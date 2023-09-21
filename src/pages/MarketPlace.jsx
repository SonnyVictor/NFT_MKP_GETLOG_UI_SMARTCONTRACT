import React, { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import TodayPicks from "../components/layouts/home-5/TodayPicks";
import { SliderMarketPlace } from "../components/slider/SliderMarketPlace";
import axiosInstance from "../utils/axios";

const MarketPlace = () => {
  const [data, setData] = useState();
  const [totalData, setTotalData] = useState(0);
  
  const [listEvent, setListEvent] = useState(null);
  const handleSaveData = (isdata) => {
    setData(isdata);
  };
  const [listNftFull, setListNftFull] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getListNFT = async (chainId, page) => {
    try {
      const res = await axiosInstance.post(`/api/nft/list-nft?chainId=${chainId}`, {
        page
      })
      const oldNFT = listNftFull
      setListNftFull(oldNFT.concat(res?.data.nftList));
      setTotalData(res?.data.total)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getListNFT(204,currentPage);
  }, []);

  const handleLoadMore = async () => {
    getListNFT(204,currentPage + 1);
    setCurrentPage(currentPage + 1)
  }

  //   const contextValues = { data, handleSaveData, listNftFull };
  return (
    <div className="home-5">
      {/* <HeaderStyle2 /> */}
     
     <SliderMarketPlace />
      {/* <BrowCategory /> */}
      <TodayPicks
        isMarketPlace={true} 
        data={listNftFull} 
        total={totalData} 
        onLoadMore={handleLoadMore}  
      />
      {/* <LiveAuction data={liveAuctionData} /> */}
      <Footer />
    </div>
  );
};

export default MarketPlace;
