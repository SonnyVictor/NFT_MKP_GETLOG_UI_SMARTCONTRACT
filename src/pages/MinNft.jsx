import HeaderStyle2 from "../components/header/HeaderStyle2";
import {
  Container,
  ContentBox,
  Layout,
  GifLayout,
  BoxCoppyContrac,
  ButnSubMit,
} from "./MinNftStyle";
import { useToast } from "react-toastify";
import { useState, useMemo, useEffect } from "react";
import { getProvider } from "../services/lib/ethers";
import { ethers } from "ethers";
import { useActiveWeb3React } from "../hooks";

const contractAddress = "";
const ABI_MINT = "";

const MinNft = () => {
  // const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [local, setLocal] = useState("");
  const [total, setTotal] = useState(0);
  const changeTotal = (value) => {
    setTotal(value);
  };

  // const [account, setAccount] = useState();
  // const { onCopy, value, setValue, hasCopied } = useClipboard(contractAddress);
  // const { connect } = useConnect({
  //   connector: new MetaMaskConnector(),
  // });
  const [isDefinitelyConnected, setIsDefinitelyConnected] = useState(false);

  const { account } = useActiveWeb3React();

  useEffect(() => {
    setIsDefinitelyConnected(!account);
  }, [account]);

  async function mintNFT() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setLoading(true);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(contractAddress, ABI_MINT, signer);
      await contract.mint({ value: 9000000000000000 }).then((res) => {
        res.wait().then((res2) => {
          if (res2.status === 1) {
            //   toast({
            //     position: "top-right",
            //     title: "NFT Minted",
            //     description: "Your NFT has been successfully minted!",
            //     status: "success",
            //     duration: 5000,
            //     isClosable: true,
            //   });
            setLoading(false);
            getInfoMintUser(contractAddress, account);
          }
        });
      });
    } catch (error) {
      // console.log('error',error)
      setLoading(false);
      // toast({
      //   title: "Error",
      //   // description: "Failed",
      //   description: `${error?.data?.message.substring(0, 32) + "..."}`,
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      // });
    }
  }

  const fixedMintNft = () => {
    if (!account) {
      // connect();
    } else {
      mintNFT();
    }
  };

  const TitleMint = useMemo(() => {
    if (account) {
      return "Mint NFT";
    } else {
      return "Connect Wallet";
    }
  }, [account]);

  async function getInfoMintUser(contractAddress, userAddress) {
    try {
      const provider = await getProvider();
      const contract = new ethers.Contract(contractAddress, ABI_MINT, provider);
      const data = await contract.getInfoMintUser(userAddress);
      const svg = await contract.genImgSVG(data.tokenId.toNumber());
      return {
        mintDate: data.mintDate.toNumber(),
        tokenId: data.tokenId.toNumber(),
        img: svg,
      };
    } catch (error) {
      //console.log("error", error);
    }
    return {};
  }
  async function numClaimed(contractAddress) {
    try {
      const provider = await getProvider();
      const contract = new ethers.Contract(contractAddress, ABI_MINT, provider);
      const numClaimed = await contract.numClaimed();
      return numClaimed;
    } catch (error) {
      return 0;
    }
    return 0;
  }
  useEffect(() => {
    account &&
      contractAddress &&
      getInfoMintUser(contractAddress, account).then((res) => {
        setData(res);
      });
    numClaimed(contractAddress).then((data) => {
      if (data) {
        changeTotal(data.toNumber());
      }
    });
  }, [account]);

  // useEffect(() => {
  //   (async () => {
  //     const provider = await getProvider();
  //     if (provider) {
  //       const accounts: any = await provider.listAccounts();
  //       setAccount(accounts[0]);
  //     }
  //   })();
  // }, []);

  const [copySuccess, setCopySuccess] = useState("");
  const copyToClipboard = async (text) => {
    if (!navigator.clipboard) {
      return alert("Your browser does not support clipboard copy.");
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("copied!");
    } catch (err) {
      setCopySuccess("Cannot copy!");
    }
  };

  return (
    <div>
      <HeaderStyle2 />
      <Container>
        <ContentBox>
          <Layout>
            <GifLayout>
              <img src="./assets/images/backgroundMint.png" alt="" />
            </GifLayout>
          </Layout>
          {/* <Gif totalNFTminted={total} /> */}
          {/* <Content changeTotal={changeTotal} /> */}
          <div style={{ width: "100%", position: "relative" }}>
            <div style={{ maxWidth: "600px", margin: "0px auto" }}>
              <h3 style={{ paddingBottom: "12px" }}>ARBA #???</h3>
              <ul>
                <div style={{ paddingBottom: "12px" }}>
                  <li>
                    The ArbNFT Astronaut Club is the only ArbNFT collection
                    launched on the Arbitrum Chain. ArbNFT Astronaut Club was
                    released with the theme of astronauts coming to the Arbitrum
                    universe. Along with the beautiful astronauts we also have
                    Dogs, Cats, Monkeys... with Mars, Mercury, Moon and all
                    other planets.
                  </li>
                </div>
                <div style={{ paddingBottom: "12px" }}>
                  <li>
                    ArbNFT Astronaut Club Collection consists of 9,000 with the
                    main characters being men, women, dogs, cats, monkeys... in
                    astronaut costumes with various features in the form of
                    pixels. Each NFTs in the collection is a unique item and no
                    two items are alike. This Collection is owned by LumiaNFT AI
                    Marketplace on the Arbitrum Chain ecosystem.
                  </li>
                </div>
                <div style={{ paddingBottom: "12px" }}>
                  <li>
                    Users who own a full set of 9 NFTs corresponding to 9
                    planets in the solar system will receive a special ticket to
                    receive many offers from ArbNFT and a reward for a Special
                    Airdrop
                  </li>
                </div>
              </ul>
              <BoxCoppyContrac>
                <h4>Smart Contract</h4>
                <div>
                  <h3>0x272128041de36C9239E2291133d3a2752c45c02c</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "0x272128041de36C9239E2291133d3a2752c45c02c"
                      )
                    }
                  >
                    📑
                    <span>{copySuccess}</span>
                  </button>
                </div>
              </BoxCoppyContrac>
              <div style={{ marginBottom: "12px" }}>
                <ButnSubMit
                  className={`sc-button style ${
                    account ? "bag" : "wallet"
                  } fl-button pri-3 no-bg `}
                >
                  <span>{TitleMint}</span>
                </ButnSubMit>
              </div>
              <h3>Price Mint : 0.009 ETH</h3>
              <div style={{ paddingTop: "12px" }}>
                {/* <Activity
                  contractAddress={contractAddress}
                  account={account}
                  data={data}
                /> */}
              </div>
            </div>
          </div>
        </ContentBox>
      </Container>
    </div>
  );
};
export default MinNft;
