import { useEffect, useState } from "react";
import { Wapper, ImgBox, BoxBtnGroup } from "./style";
import axios from "axios";

const OutputComponent = ({ imageOutput }: any) => {
  const { pathname } = window.location;
  const [fakeData, setFakeData] = useState<any>([]);
  const [ListImgSelect, setListImgSelect] = useState<any>([]);
  const [mintId, setMintId] = useState<any>([]);
  const downloadImages = async () => {
    try {
      const promises = ListImgSelect.map((url: any) =>
        axios.get(url, { responseType: "blob" })
      );
      const responses = await Promise.all(promises);
      responses.forEach((response, index) => {
        const downloadUrl = window.URL.createObjectURL(
          new Blob([response.data])
        );
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", `image${index + 1}.jpg`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e: any, value: any, id: any) => {
    if (e.target.checked) {
      setListImgSelect([...ListImgSelect, value]);
      setMintId([...mintId, id]);
    } else {
      let ImgDonwload = ListImgSelect.indexOf(value);
      let newMintId = mintId.indexOf(value);
      if (ImgDonwload !== -1) {
        let newArrDonwLoad = ListImgSelect;
        let newArrMint = mintId;
        newArrDonwLoad.splice(ImgDonwload, 1);
        newArrMint.splice(newMintId, 1);
        setListImgSelect([...newArrDonwLoad]);
        setMintId([...newArrMint]);
      }
    }
  };

  useEffect(() => {
    setFakeData(imageOutput);
  }, [imageOutput]);

  return (
    <Wapper>
      <h1>Output</h1>
      <ImgBox imgs={fakeData && fakeData.length > 0}>
        {fakeData && fakeData.length > 0 ? (
          <>
            {fakeData &&
              fakeData.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    <img src={item} alt="" />
                    <input
                      type="checkbox"
                      id={`imgOutput${index}`}
                      onChange={(e) => {
                        handleChange(e, item, index);
                      }}
                    />
                    <label htmlFor={`imgOutput${index}`}></label>
                  </div>
                );
              })}
          </>
        ) : (
          <img src="/assets/images/png/defauARBNFT.png" alt="defauARBNFT" />
        )}
      </ImgBox>
      <BoxBtnGroup
        downloadable={ListImgSelect.length > 0}
        maybeMint={mintId.length === 1}
      >
        <p>Generated in 1.80 seconds</p>
        <button
          style={{
            background: "transparent",
          }}
          onClick={() => {
            ListImgSelect.length > 0 && downloadImages();
          }}
        >
          <img src="./images/Mint/downloadIcon.svg" alt="" /> Download
        </button>
        <button
          style={{
            background: "transparent",
          }}
        >
          {mintId.length === 1 ? (
            <>
              <img src="./images/Mint/MintIcon.svg" alt="" /> Mint NFT
            </>
          ) : (
            <>
              <img src="./images/Mint/MintIcon.svg" alt="" /> Mint NFT
            </>
          )}
        </button>
      </BoxBtnGroup>
    </Wapper>
  );
};
export default OutputComponent;
