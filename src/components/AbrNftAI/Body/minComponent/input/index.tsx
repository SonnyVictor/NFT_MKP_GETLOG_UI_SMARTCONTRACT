import { useState } from "react";
import Progress from "./Progress";
import { Wapper, BoxOneElm, BoxTowElm, BtnGroup } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../../../utils/axios";

const InputComponent = ({ onSetImage }: any) => {
  const [numOutPut, setNumOutpt] = useState<any>(1);
  const [steps, setSteps] = useState<any>(10);
  const [Scale, setScale] = useState<any>(1);
  const [chooseSize, setChooseSize] = useState<number>(0);
  const [showListSize, setShowListSize] = useState<boolean>(false);
  const [promptVal, setPromptVal] = useState<string>("");
  const [urlImage, setUrlImage] = useState<any>("");
  const [Negative, setNegative] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);
  const getvalueOutPut = (e: any) => {
    const inputValue = e.target.value;
    if (inputValue === "" || /^\d*$/.test(inputValue)) {
      if (Number(inputValue) > 4) {
        setNumOutpt(4);
      } else {
        setNumOutpt(inputValue);
      }
    }
  };
  const getvaluesteps = (e: any) => {
    const inputValue = e.target.value;
    if (inputValue === "" || /^\d*$/.test(inputValue)) {
      if (Number(inputValue) > 500) {
        setSteps(500);
      } else {
        setSteps(inputValue);
      }
    }
  };
  const getvalueScale = (e: any) => {
    const inputValue = e.target.value;
    if (inputValue === "" || /^\d*$/.test(inputValue)) {
      if (Number(inputValue) > 20) {
        setScale(20);
      } else {
        setScale(inputValue);
      }
    }
  };
  const handleBlur = (e: any, key: any) => {
    if (!e.target.value || Number(e.target.value) === 0) {
      switch (key) {
        case "outPut":
          setNumOutpt(1);
          break;
        case "steps":
          setSteps(1);
          break;
        case "scale":
          setScale(1);
          break;
        default:
          return null;
      }
    }
  };
  const handleReset = () => {
    setNumOutpt(1);
    setChooseSize(0);
    setSteps(10);
    setScale(1);
    setPromptVal("");
    setNegative("");
    setSubmitError(false);
  };
  const handleSubmit = async () => {
    try {
      if (promptVal) {
        setIsLoading(true);
        const params = {
          prompt: promptVal,
          image_dimensions: ListSizeImg[chooseSize].title,
          num_outputs: numOutPut,
          negative_prompt: Negative,
          num_inference_steps: steps,
          guidance_scale: Scale,
        };
        const res: any = await axiosInstance.post(
          "/ai-image/text-to-image",
          params
        );
        setIsLoading(false);
        if (res) {
          onSetImage(res);
          setUrlImage(res);
        }
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Generate image unsuccessfully !");
    }
  };
  return (
    <Wapper>
      <ToastContainer />
      <h1>Input</h1>
      <BoxOneElm required={true} submitError={submitError}>
        <h6>Prompt</h6>
        <input
          type="text"
          placeholder={submitError ? "is required" : ""}
          value={promptVal}
          onChange={(e) => {
            setPromptVal(e.target.value);
          }}
          onBlur={(e) => {
            e.target.value ? setSubmitError(false) : setSubmitError(true);
          }}
        />
        <p>Input prompt</p>
      </BoxOneElm>
      <BoxOneElm showListSize={showListSize}>
        <h6>Image Dimensions</h6>
        <button
          onClick={() => {
            setShowListSize(!showListSize);
          }}
        >
          {ListSizeImg[chooseSize].title}
          <img src="./images/Mint/Dropdown.svg" alt="" />
        </button>
        <ul>
          {ListSizeImg.map((item, index) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  setChooseSize(index);
                  setShowListSize(false);
                }}
                style={{
                  fontSize: "16px",
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <p>Pixel dimensions of output image</p>
      </BoxOneElm>
      <BoxOneElm>
        <h6>Negative Prompt</h6>
        <input
          type="text"
          placeholder="abc"
          value={Negative}
          onChange={(e) => {
            setNegative(e.target.value);
          }}
        />
        <p>Specify things to not see in the output</p>
      </BoxOneElm>
      <BoxTowElm>
        <h6>Num Outputs</h6>
        <input
          type="number"
          value={numOutPut}
          onChange={(e) => {
            getvalueOutPut(e);
          }}
          onBlur={(e) => {
            handleBlur(e, "outPut");
          }}
        />
        <Progress
          value={numOutPut}
          min={1}
          max={4}
          changeVal={getvalueOutPut}
        />
        <p>Number of images to output. (minimum: 1; maximum: 4)</p>
      </BoxTowElm>
      <BoxTowElm>
        <h6>Num Inference Steps</h6>
        <input
          type="number"
          value={steps}
          onChange={(e) => {
            getvaluesteps(e);
          }}
          onBlur={(e) => {
            handleBlur(e, "steps");
          }}
        />
        <Progress value={steps} min={1} max={500} changeVal={getvaluesteps} />
        <p>Number of denoising steps (minimum: 1; maximum: 500)</p>
      </BoxTowElm>
      <BoxTowElm>
        <h6>Guidance Scale</h6>
        <input
          type="number"
          value={Scale}
          onChange={(e) => {
            getvalueScale(e);
          }}
          onBlur={(e) => {
            handleBlur(e, "scale");
          }}
        />
        <Progress value={Scale} min={1} max={20} changeVal={getvalueScale} />
        <p>Scale for classifier-free guidance (minimum: 1; maximum: 20)</p>
      </BoxTowElm>
      <BtnGroup>
        <button
          style={{
            background: "transparent",
          }}
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          style={{
            border: "none",
          }}
          onClick={handleSubmit}
        >
          Submit{" "}
          {isLoading && (
            <i
              style={{
                marginLeft: "10px",
              }}
              className="fa fa-spinner fa-spin"
            ></i>
          )}
        </button>
      </BtnGroup>
    </Wapper>
  );
};
export default InputComponent;

const ListSizeImg = [
  {
    id: 1,
    type: 1,
    title: "512x512",
  },
  {
    id: 2,
    type: 2,
    title: "768x768",
  },
];
