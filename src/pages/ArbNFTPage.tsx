import { useState } from "react";
import Examples from "../components/AbrNftAI/Body/minComponent/Examples";
import InputComponent from "../components/AbrNftAI/Body/minComponent/input";
import OutputComponent from "../components/AbrNftAI/Body/minComponent/output";
import { Wapper } from "../components/AbrNftAI/Body/styled";
import { ContainerGb } from "../components/container";
import Footer from "../components/footer/Footer";
import HeaderStyle2 from "../components/header/HeaderStyle2";

interface Props {}

function ArbNFTPage(props: Props) {
  const [imageNFT, setImageNFT] = useState<any>(null);

  const onSetImage = (images: any) => {
    setImageNFT(images);
  };

  return (
    <div className="nft-ai-page" >
      {/* <HeaderStyle2 /> */}
      <ContainerGb>
        <Wapper>
          <InputComponent onSetImage={onSetImage} />
          <OutputComponent imageOutput={imageNFT} />
        </Wapper>
      </ContainerGb>
      <Footer />
    </div>
  );
}

export default ArbNFTPage;
