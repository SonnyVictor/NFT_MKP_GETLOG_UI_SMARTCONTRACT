import React, { useState, useEffect } from "react";
import HeaderStyle2 from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import SliderStyle2 from "../components/slider/SliderStyle2";
import heroSliderData from "../assets/fake-data/data-slider";
import BrowCategory from "../components/layouts/home-5/BrowCategory";
import LiveAuction from '../components/layouts/LiveAuction';
import TopSeller from "../components/layouts/home-5/TopSeller";
import TodayPicks from "../components/layouts/home-5/TodayPicks";
import todayPickData from "../assets/fake-data/data-today-pick";
import PopularCollection from "../components/layouts/home-5/PopularCollection";
import liveAuctionData from '../assets/fake-data/data-live-auction';
import Create from "../components/layouts/home-2/Create";
import {
  getAllValueMarketPlace,
  getImageNFT,
  getNameNFT,
  getSymbolNFT,
  getTokenURI,
} from "../integrateContract/contract";
import { ethers } from "ethers";
import axiosInstance from "../utils/axios";

const Home05 = () => {
  const [data, setData] = useState();
  const [listEvent, setListEvent] = useState(null);
  const handleSaveData = (isdata) => {
    setData(isdata);
  };
  const [listNftFull, setListNftFull] = useState([]);
  const getAllNftListMarketPlace = async () => {
    try {
      let transition = await getAllValueMarketPlace();

      const items = await Promise.all(
        transition.map(async (i) => {
          var tokenURI = await getImageNFT(i.tokenId);
          var nameNFT = await getNameNFT();
          var symbolNFT = await getSymbolNFT();
          let price = ethers.utils.formatUnits(i.price.toString(), "ether");
          let attributes = await getTokenURI(i.tokenId.toString());
          // let timeEnd = await
          let item = {
            id: i.itemId.toString(),
            seller: i.seller,
            tokenId: i.tokenId.toString(),
            tokenIMG: tokenURI,
            price,
            name: nameNFT.toString(),
            symbolNFT: symbolNFT,
            attributes: attributes,
            endTime: i.timeEnd.toString(),
          };
          return item;
        })
      );

      // setListNftFull(items);
      // console.log('items',items[0]);
    } catch (error) {
      console.log("getAllNftListMarketPlace", error);
    }
  };

  const getListNFT = async () => {
    try {
      const chainId = 204
      const res = await axiosInstance.post(`/api/nft/list-nft?chainId=${chainId}`)
      setListNftFull(res.data.nftList?.splice(0,8));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListNFT()
    // getAllNftListMarketPlace()
  }, []);

  //   const contextValues = { data, handleSaveData, listNftFull };
  return (
    <div className="home-5">
      {/* <HeaderStyle2 /> */}

      <SliderStyle2 data={heroSliderData} />
      {/* <BrowCategory /> */}
      <TopSeller />

      <TodayPicks data={listNftFull} />
      {/* <LiveAuction data={liveAuctionData} /> */}
      {/* <TodayPicks data={todayPickData} /> */}

      <PopularCollection />
      <Create />
      <Footer />
    </div>
  );
};

export default Home05;
