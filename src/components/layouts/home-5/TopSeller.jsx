import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../../../assets/images/avatar/avt-1.jpg";
import img2 from "../../../assets/images/avatar/avt-2.jpg";
import img3 from "../../../assets/images/avatar/avt-3.jpg";
import img4 from "../../../assets/images/avatar/avt-4.jpg";
import axios from "axios";
const TopSeller = () => {
  const [responseData, setResponseData] = useState(null);
  const apiUrl = `https://api.coinmarketcap.com/nft/v3/nft/collections?start=0&limit=40&category=&collection=&sort=volume&desc=false&period=1`; // Thay thế bằng URL của API bạn muốn gọi

  const postData = {
    network: "ALL",
    period: "24H",
    sortType: "volumeDesc",
    page: 1,
    rows: 20,
  };

  const handlePostRequest = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  };
  console.log(responseData);
  useEffect(() => {
    handlePostRequest();
  }, []);
  const [dataTopSellerTab] = useState([
    {
      title: "1 Day",
    },
    {
      title: "1 Week",
    },
    {
      title: "1 Month",
    },
  ]);
  const [dataTopSellerPanel] = useState([
    {
      id: 1,
      dataTopSellerContent: [
        {
          collectionId: "709714422037364736",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1693399358511_gnbyq7wetiku9zrsnhp5hwu2xa3l754b.gif",
          title: "Bitcoin Punk Ordinal NFT (BTC)",
          network: "BSC",
          volume: "1540.973",
          volumeRate: "43.39",
          ownersCount: 57,
          itemsCount: 165,
          listedCount: null,
          floorPrice: "25",
          floorPriceRate: "25",
          verified: 0,
        },
        {
          collectionId: "674576679284477953",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1690992502689_0m13h0ug5rn0u19phl4wvo90j1056myh.png",
          title: "MOTORCYCLE BABIES",
          network: "BSC",
          volume: "740.51",
          volumeRate: "0",
          ownersCount: 87,
          itemsCount: 766,
          listedCount: null,
          floorPrice: "9",
          floorPriceRate: "0.11",
          verified: 0,
        },
        {
          collectionId: "740358447595503617",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1691280122291_ccs6y1aot1j0hqas4g5bqtga98abji4u.jpg",
          title: "Dorkz",
          network: "ETH",
          volume: "12752.1681",
          volumeRate: "292.11",
          ownersCount: 2222,
          itemsCount: 10000,
          listedCount: null,
          floorPrice: "19.62",
          floorPriceRate: "15.28",
          verified: 0,
        },
        {
          collectionId: "666761507224772609",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1686422867575_fe1wtze1g3y9bm6epx9vxd9ot8go9cs9.jpeg",
          title: "Element Benders",
          network: "BSC",
          volume: "260.78",
          volumeRate: "0",
          ownersCount: 38,
          itemsCount: 248,
          listedCount: null,
          floorPrice: "14.5",
          floorPriceRate: "0",
          verified: 0,
        },
        {
          collectionId: "696173597875834881",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1680745570357_kwuoqkwgcwdqu2fobh7erh298y7lz43m.jpg",
          title: "Otherdeed Expanded",
          network: "ETH",
          volume: "226933.6242",
          volumeRate: "-68.62",
          ownersCount: 13340,
          itemsCount: 46490,
          listedCount: null,
          floorPrice: "680.66",
          floorPriceRate: "4.19",
          verified: 1,
        },
        {
          collectionId: "746107575269625857",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1692650770279_v6xkf3eeleqqmhef2xk28cyvzo5yivrc.jpg",
          title: "Dimension X",
          network: "ETH",
          volume: "17336.3609",
          volumeRate: "42.77",
          ownersCount: 360,
          itemsCount: 593,
          listedCount: null,
          floorPrice: "30.54",
          floorPriceRate: "-1.32",
          verified: 0,
        },
        {
          collectionId: "669205774019788801",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1681034550986_e8f4hhekklh2jrd0pfliu6mhjiqpwsiy.gif",
          title: "Football Club",
          network: "BSC",
          volume: "282.8177",
          volumeRate: "-48.26",
          ownersCount: 35,
          itemsCount: 77,
          listedCount: null,
          floorPrice: "6.98",
          floorPriceRate: "16.53",
          verified: 0,
        },
        {
          collectionId: "740709501932494849",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1691363771095_uk9ye2mnigin01v3sbh4j9dp2hrbpc0i.jpg",
          title: "frENS",
          network: "ETH",
          volume: "8088.4407",
          volumeRate: "311.11",
          ownersCount: 1339,
          itemsCount: 7777,
          listedCount: null,
          floorPrice: "34.12",
          floorPriceRate: "2.31",
          verified: 0,
        },
        {
          collectionId: "699235882968514560",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1690111410756_cwb8df28s5jgq68ftjj3f8an2c5le475.gif",
          title: "Axies Infinity NFTs: AXS XRP BTC",
          network: "BSC",
          volume: "300.5862",
          volumeRate: "-55.34",
          ownersCount: 24,
          itemsCount: 82,
          listedCount: null,
          floorPrice: "12.99",
          floorPriceRate: "-13.23",
          verified: 0,
        },
        {
          collectionId: "718037077190328320",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/2a2e5fca8d224913bded77961a951be6.jpeg",
          title: "OVAL3 Fantasy Rugby",
          network: "Polygon",
          volume: "0",
          volumeRate: "-100",
          ownersCount: 774,
          itemsCount: 23923,
          listedCount: null,
          floorPrice: "1.44",
          floorPriceRate: "33.33",
          verified: 1,
        },
        {
          collectionId: "703398655788212225",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1682469730331_8rgwi3wamw5at18kzv1ajqvna04uhv44.jpg",
          title: "reepz",
          network: "ETH",
          volume: "5637.6551",
          volumeRate: "479.1",
          ownersCount: 1146,
          itemsCount: 5000,
          listedCount: null,
          floorPrice: "42",
          floorPriceRate: "3.96",
          verified: 0,
        },
        {
          collectionId: "743616152198668288",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1692056770419_oz3vnaf1o1g7vnrn9w89mykr6752gyse.jpg",
          title: "Sproto Pepes",
          network: "ETH",
          volume: "4183.8017",
          volumeRate: "0.71",
          ownersCount: 888,
          itemsCount: 3333,
          listedCount: null,
          floorPrice: "32.41",
          floorPriceRate: "-5.73",
          verified: 0,
        },
        {
          collectionId: "505303452945186817",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/2c66a6e10df04bbea3eff518e06f8d73.jpeg",
          title: "Mutant Ape Yacht Club",
          network: "ETH",
          volume: "1412002.0656",
          volumeRate: "19.71",
          ownersCount: 11565,
          itemsCount: 19481,
          listedCount: null,
          floorPrice: "9894.28",
          floorPriceRate: "8.61",
          verified: 1,
        },
        {
          collectionId: "642353810240229377",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1667913883343_wtzv4cg0pywu4ldf6fgery1tzvgomugp.png",
          title: "0N1 Force",
          network: "ETH",
          volume: "169907.6079",
          volumeRate: "-4.56",
          ownersCount: 3796,
          itemsCount: 7777,
          listedCount: null,
          floorPrice: "1276.02",
          floorPriceRate: "3.1",
          verified: 1,
        },
        {
          collectionId: "690968054768242689",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1679504422444_vjcv41ljfw58vjy9hkcyarbkxjus3u2d.png",
          title: "Nakamigos",
          network: "ETH",
          volume: "87286.3327",
          volumeRate: "15.53",
          ownersCount: 5672,
          itemsCount: 20000,
          listedCount: null,
          floorPrice: "588.54",
          floorPriceRate: "4.05",
          verified: 0,
        },
        {
          collectionId: "676733015437500417",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1676110524609_gsxbfhgpqujpkpju7y7vxwx92o6bnu5j.jpg",
          title: "Earpitz",
          network: "ETH",
          volume: "3245.1402",
          volumeRate: "8851.86",
          ownersCount: 0,
          itemsCount: 6969,
          listedCount: null,
          floorPrice: "34.12",
          floorPriceRate: "89.24",
          verified: 0,
        },
        {
          collectionId: "662917212174016513",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1672816580476_glax7i9b1b0n2k5jiczlro0gsscsdv0p.gif",
          title: "Kubz",
          network: "ETH",
          volume: "40412.2304",
          volumeRate: "-13.56",
          ownersCount: 1969,
          itemsCount: 9852,
          listedCount: null,
          floorPrice: "341.18",
          floorPriceRate: "1.25",
          verified: 0,
        },
        {
          collectionId: "737489536695332865",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1690596130440_l9aajwa3xch8w7jjnd7acn1ps2u47ohq.jpg",
          title: "Himalaya",
          network: "ETH",
          volume: "2205.1278",
          volumeRate: "264.54",
          ownersCount: 40,
          itemsCount: 7777,
          listedCount: null,
          floorPrice: "12",
          floorPriceRate: "0",
          verified: 0,
        },
        {
          collectionId: "601688241533661184",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1658296407188_hyxh95trvqmxil6um8j2k4oek41jd4g6.png",
          title: "🍦Icy Popsicle Gang🍦",
          network: "BSC",
          volume: "55.4",
          volumeRate: "-82.56",
          ownersCount: 0,
          itemsCount: 4500,
          listedCount: null,
          floorPrice: "0.25",
          floorPriceRate: "25",
          verified: 0,
        },
        {
          collectionId: "641881071684722689",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1667801173679_6osf0fmr4zgqsgotq5zt40pzdm8njn3g.png",
          title: "Otherdeed for Otherside",
          network: "ETH",
          volume: "136786.2964",
          volumeRate: "51.87",
          ownersCount: 3342,
          itemsCount: 100000,
          listedCount: null,
          floorPrice: "1142.96",
          floorPriceRate: "0.73",
          verified: 1,
        },
      ],
    },
    {
      id: 2,
      dataTopSellerContent: [
        {
          collectionId: "700672909955403776",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1690209943327_30idxysl3vtka4cg38awsg90w2epxxa3.gif",
          title: "Hero Metaverse",
          network: "BSC",
          volume: "5335.1021",
          volumeRate: "-0.82",
          ownersCount: 78,
          itemsCount: 155,
          listedCount: null,
          floorPrice: "19.5",
          floorPriceRate: "2.63",
          verified: 0,
        },
        {
          collectionId: "746107575269625857",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1692650770279_v6xkf3eeleqqmhef2xk28cyvzo5yivrc.jpg",
          title: "Dimension X",
          network: "ETH",
          volume: "130605.564",
          volumeRate: "-31.55",
          ownersCount: 360,
          itemsCount: 593,
          listedCount: null,
          floorPrice: "30.54",
          floorPriceRate: "-8.89",
          verified: 0,
        },
        {
          collectionId: "671288102148268032",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1681035714101_0zra0kprt5dqoiu30izxe6jqn4k58icd.gif",
          title: "Metaverse King",
          network: "BSC",
          volume: "3045.37",
          volumeRate: "201.2",
          ownersCount: 55,
          itemsCount: 118,
          listedCount: null,
          floorPrice: "14.99",
          floorPriceRate: "-0.07",
          verified: 0,
        },
        {
          collectionId: "671407666795769857",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1681223844933_osojo11ol9za0xngs225xmmc684kntya.png",
          title: "HERO SKULLS",
          network: "BSC",
          volume: "2417.39",
          volumeRate: "28.54",
          ownersCount: 81,
          itemsCount: 549,
          listedCount: null,
          floorPrice: "9",
          floorPriceRate: "-52.63",
          verified: 0,
        },
        {
          collectionId: "639337213600321536",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/d85eec3768b14b149f124a9046143303.png",
          title: "NFT Passport Collection",
          network: "BSC",
          volume: "1675.0071",
          volumeRate: "126.38",
          ownersCount: 210413,
          itemsCount: 2500000,
          listedCount: null,
          floorPrice: "0.25",
          floorPriceRate: "8.7",
          verified: 1,
        },
        {
          collectionId: "668759428913696768",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1686313208695_dom4t3byesa95h118zn520ugcd0pdplj.gif",
          title: "Rose Collection",
          network: "BSC",
          volume: "2451.9983",
          volumeRate: "12.62",
          ownersCount: 123,
          itemsCount: 288,
          listedCount: null,
          floorPrice: "7",
          floorPriceRate: "-6.17",
          verified: 0,
        },
        {
          collectionId: "699235882968514560",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1690111410756_cwb8df28s5jgq68ftjj3f8an2c5le475.gif",
          title: "Axies Infinity NFTs: AXS XRP BTC",
          network: "BSC",
          volume: "2384.419",
          volumeRate: "12.99",
          ownersCount: 24,
          itemsCount: 82,
          listedCount: null,
          floorPrice: "12.99",
          floorPriceRate: "-1.37",
          verified: 0,
        },
        {
          collectionId: "709714422037364736",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1693399358511_gnbyq7wetiku9zrsnhp5hwu2xa3l754b.gif",
          title: "Bitcoin Punk Ordinal NFT (BTC)",
          network: "BSC",
          volume: "2564.053",
          volumeRate: "0",
          ownersCount: 57,
          itemsCount: 165,
          listedCount: null,
          floorPrice: "25",
          floorPriceRate: "0",
          verified: 0,
        },
        {
          collectionId: "601688241533661184",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1658296407188_hyxh95trvqmxil6um8j2k4oek41jd4g6.png",
          title: "🍦Icy Popsicle Gang🍦",
          network: "BSC",
          volume: "752.1391",
          volumeRate: "18826.02",
          ownersCount: 0,
          itemsCount: 4500,
          listedCount: null,
          floorPrice: "0.25",
          floorPriceRate: "47.06",
          verified: 0,
        },
        {
          collectionId: "744597625424797697",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1692290764236_pbei6qgfkh0fbkptqc23093lb8fwqi3f.jpg",
          title: "Wreck League Majestics",
          network: "ETH",
          volume: "301154.3246",
          volumeRate: "-56.5",
          ownersCount: 2304,
          itemsCount: 2016,
          listedCount: null,
          floorPrice: "64.82",
          floorPriceRate: "-66.31",
          verified: 1,
        },
        {
          collectionId: "642353810240229377",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1667913883343_wtzv4cg0pywu4ldf6fgery1tzvgomugp.png",
          title: "0N1 Force",
          network: "ETH",
          volume: "1461593.7976",
          volumeRate: "36.28",
          ownersCount: 3796,
          itemsCount: 7777,
          listedCount: null,
          floorPrice: "1276.02",
          floorPriceRate: "6.99",
          verified: 1,
        },
        {
          collectionId: "740709501932494849",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1691363771095_uk9ye2mnigin01v3sbh4j9dp2hrbpc0i.jpg",
          title: "frENS",
          network: "ETH",
          volume: "40365.0955",
          volumeRate: "-43.09",
          ownersCount: 1339,
          itemsCount: 7777,
          listedCount: null,
          floorPrice: "34.12",
          floorPriceRate: "19.76",
          verified: 0,
        },
        {
          collectionId: "669205774019788801",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1681034550986_e8f4hhekklh2jrd0pfliu6mhjiqpwsiy.gif",
          title: "Football Club",
          network: "BSC",
          volume: "1302.5516",
          volumeRate: "149.15",
          ownersCount: 35,
          itemsCount: 77,
          listedCount: null,
          floorPrice: "6.98",
          floorPriceRate: "16.53",
          verified: 0,
        },
        {
          collectionId: "743616152198668288",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1692056770419_oz3vnaf1o1g7vnrn9w89mykr6752gyse.jpg",
          title: "Sproto Pepes",
          network: "ETH",
          volume: "49601.2496",
          volumeRate: "-61.07",
          ownersCount: 888,
          itemsCount: 3333,
          listedCount: null,
          floorPrice: "32.41",
          floorPriceRate: "-51.04",
          verified: 0,
        },
        {
          collectionId: "740358447595503617",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1691280122291_ccs6y1aot1j0hqas4g5bqtga98abji4u.jpg",
          title: "Dorkz",
          network: "ETH",
          volume: "22203.821",
          volumeRate: "48.22",
          ownersCount: 2221,
          itemsCount: 10000,
          listedCount: null,
          floorPrice: "19.62",
          floorPriceRate: "72.11",
          verified: 0,
        },
        {
          collectionId: "508700038943432705",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/77973d141adf41bea255db516a96348d.png",
          title: "X World Games",
          network: "BSC",
          volume: "564.497",
          volumeRate: "12.46",
          ownersCount: 41883,
          itemsCount: 602087,
          listedCount: null,
          floorPrice: "0.38",
          floorPriceRate: "0",
          verified: 1,
        },
        {
          collectionId: "505303452945186817",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/2c66a6e10df04bbea3eff518e06f8d73.jpeg",
          title: "Mutant Ape Yacht Club",
          network: "ETH",
          volume: "7497160.9542",
          volumeRate: "-20.2",
          ownersCount: 11565,
          itemsCount: 19481,
          listedCount: null,
          floorPrice: "9894.28",
          floorPriceRate: "28.36",
          verified: 1,
        },
        {
          collectionId: "694369170047053825",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1680315311520_bbkd4ll4i5ylykbam34twi0omc736x8p.png",
          title: "DeGods",
          network: "ETH",
          volume: "5955368.3257",
          volumeRate: "-56.08",
          ownersCount: 2526,
          itemsCount: 8683,
          listedCount: null,
          floorPrice: "8000.72",
          floorPriceRate: "29.41",
          verified: 1,
        },
        {
          collectionId: "718037077190328320",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/2a2e5fca8d224913bded77961a951be6.jpeg",
          title: "OVAL3 Fantasy Rugby",
          network: "Polygon",
          volume: "11.1905",
          volumeRate: "-84.75",
          ownersCount: 774,
          itemsCount: 23923,
          listedCount: null,
          floorPrice: "1.44",
          floorPriceRate: "60",
          verified: 1,
        },
        {
          collectionId: "696173597875834881",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1680745570357_kwuoqkwgcwdqu2fobh7erh298y7lz43m.jpg",
          title: "Otherdeed Expanded",
          network: "ETH",
          volume: "3562835.5995",
          volumeRate: "-14.07",
          ownersCount: 13340,
          itemsCount: 46490,
          listedCount: null,
          floorPrice: "680.66",
          floorPriceRate: "27.39",
          verified: 1,
        },
      ],
    },
    {
      id: 3,
      dataTopSellerContent: [
        {
          collectionId: "709714422037364736",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1693399358511_gnbyq7wetiku9zrsnhp5hwu2xa3l754b.gif",
          title: "Bitcoin Punk Ordinal NFT (BTC)",
          network: "BSC",
          volume: "697.16",
          volumeRate: "644.27",
          ownersCount: 57,
          itemsCount: 165,
          listedCount: null,
          floorPrice: "25",
          floorPriceRate: "0",
          verified: 0,
        },
        {
          collectionId: "345093608531719168",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/9952dcdef80b4e50ab59ba7eac6aa6fd.png",
          title: "Alpine Esports Series 2023",
          network: "BSC",
          volume: "9.64",
          volumeRate: "3607.69",
          ownersCount: 18723,
          itemsCount: 48000,
          listedCount: null,
          floorPrice: "0.17",
          floorPriceRate: "6.25",
          verified: 1,
        },
        {
          collectionId: "601688241533661184",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1658296407188_hyxh95trvqmxil6um8j2k4oek41jd4g6.png",
          title: "🍦Icy Popsicle Gang🍦",
          network: "BSC",
          volume: "7.04",
          volumeRate: "3605.26",
          ownersCount: 0,
          itemsCount: 4500,
          listedCount: null,
          floorPrice: "0.25",
          floorPriceRate: "-7.41",
          verified: 0,
        },
        {
          collectionId: "204801017341414400",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/d5570f1703e1404587cfd484d4eae513.jpeg",
          title: "UBA Crypto Traders",
          network: "BSC",
          volume: "14.18",
          volumeRate: "0",
          ownersCount: 1990,
          itemsCount: 15500,
          listedCount: null,
          floorPrice: "0.4",
          floorPriceRate: "-14.89",
          verified: 1,
        },
        {
          collectionId: "618017322892853248",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/e29b8c75f5824a908547898341d1e7a3.jpeg",
          title: "WIN NFT HERO",
          network: "BSC",
          volume: "54.71",
          volumeRate: "465.77",
          ownersCount: 2631,
          itemsCount: 13972,
          listedCount: null,
          floorPrice: "1.7",
          floorPriceRate: "-3.95",
          verified: 1,
        },
        {
          collectionId: "692959699477970944",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/c5a578c386684132a36d17e5c3735df0.png",
          title: "Alpine Race Collectibles",
          network: "BSC",
          volume: "11.95",
          volumeRate: "86.43",
          ownersCount: 22179,
          itemsCount: 78000,
          listedCount: null,
          floorPrice: "0.2",
          floorPriceRate: "-9.09",
          verified: 1,
        },
        {
          collectionId: "601668967062999040",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1658299084225_5kag9x7lso9n9h3pnzm8a7nru1qb5v9c.gif",
          title: "😽Paradise Kitten😽",
          network: "BSC",
          volume: "11.13",
          volumeRate: "9175",
          ownersCount: 0,
          itemsCount: 9974,
          listedCount: null,
          floorPrice: "0.12",
          floorPriceRate: "0",
          verified: 0,
        },
        {
          collectionId: "370827762959315968",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/d1b9a0efa0d94d919331b986f277f1a9.png",
          title: "ForeverCR7: The GOAT Box",
          network: "BSC",
          volume: "25.16",
          volumeRate: "-49.89",
          ownersCount: 6881,
          itemsCount: 28000,
          listedCount: null,
          floorPrice: "4.7",
          floorPriceRate: "10.85",
          verified: 1,
        },
        {
          collectionId: "641210846297292800",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1667640979477_mvkwxuh3dxlhcl8unvnmosvk68bh9nvr.jpeg",
          title: "Universal Life",
          network: "BSC",
          volume: "1.1167",
          volumeRate: "0",
          ownersCount: 15,
          itemsCount: 95,
          listedCount: null,
          floorPrice: "0.32",
          floorPriceRate: "-3.03",
          verified: 0,
        },
        {
          collectionId: "289640760524506112",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/666b173a8a4d478abddbd398c2b70962.png",
          title: "CR7 Mystery Box Collection",
          network: "BSC",
          volume: "4.15",
          volumeRate: "3672.73",
          ownersCount: 237684,
          itemsCount: 1423597,
          listedCount: null,
          floorPrice: "0.85",
          floorPriceRate: "0",
          verified: 1,
        },
        {
          collectionId: "725937659166916608",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/be85c9780a2b4c7ca611b5cfdb2e3091.png",
          title: "Pome Survival NFT: BNB Edtion",
          network: "BSC",
          volume: "285.2967",
          volumeRate: "-77.72",
          ownersCount: 116,
          itemsCount: 0,
          listedCount: null,
          floorPrice: "24.5",
          floorPriceRate: "0",
          verified: 1,
        },
        {
          collectionId: "178386962544148480",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/f0253706a60e46a4b08c332449148c2e.jpeg",
          title: "UBA Influencer 3D Avatar",
          network: "BSC",
          volume: "2",
          volumeRate: "0",
          ownersCount: 3069,
          itemsCount: 18200,
          listedCount: null,
          floorPrice: "0.5",
          floorPriceRate: "-16.67",
          verified: 1,
        },
        {
          collectionId: "599165898464387072",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1657618824176_i93q0yjsqsaqw9hu6fnk4ikdu968ezsi.gif",
          title: "Droider Dudes",
          network: "BSC",
          volume: "0.7223",
          volumeRate: "35.69",
          ownersCount: 0,
          itemsCount: 11021,
          listedCount: null,
          floorPrice: "0.17",
          floorPriceRate: "-22.73",
          verified: 0,
        },
        {
          collectionId: "145714765166274560",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/3b486bb44aa24c85a380b3bff5914bd4.jpeg",
          title: "Dream Card Mystery Box III",
          network: "BSC",
          volume: "0.93",
          volumeRate: "0",
          ownersCount: 8793,
          itemsCount: 50000,
          listedCount: null,
          floorPrice: "0.41",
          floorPriceRate: "-8.89",
          verified: 1,
        },
        {
          collectionId: "155550252651737088",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/8a3d06acfc3942f0a76c573853daf625.jpeg",
          title: "RARA MetaForest Mining Farm",
          network: "BSC",
          volume: "2.3",
          volumeRate: "0",
          ownersCount: 2918,
          itemsCount: 22000,
          listedCount: null,
          floorPrice: "0.33",
          floorPriceRate: "-8.33",
          verified: 1,
        },
        {
          collectionId: "170698841493664768",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/cb2c2c758da345818fdd22dab3b54345.jpeg",
          title: "Merry Cryptmas Mystery Box",
          network: "BSC",
          volume: "4.54",
          volumeRate: "0",
          ownersCount: 18267,
          itemsCount: 50000,
          listedCount: null,
          floorPrice: "2",
          floorPriceRate: "0",
          verified: 1,
        },
        {
          collectionId: "205968248008001536",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/ce1fe76dea2a49f18f9833f871e8e420.jpeg",
          title: "Mike Tyson Mystery Box",
          network: "BSC",
          volume: "4",
          volumeRate: "0",
          ownersCount: 5689,
          itemsCount: 15000,
          listedCount: null,
          floorPrice: "2.4",
          floorPriceRate: "0",
          verified: 1,
        },
        {
          collectionId: "650636310261694464",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1669888451604_7w64su8hy43b0e0zpd8ofreh9n92f0j9.png",
          title: "Andre_Bohomazy #1",
          network: "BSC",
          volume: "3.24",
          volumeRate: "0",
          ownersCount: 24,
          itemsCount: 154,
          listedCount: null,
          floorPrice: "0.76",
          floorPriceRate: "-51.59",
          verified: 0,
        },
        {
          collectionId: "174885586816977920",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/fa0fe94fc2bd425f8f445dc5aaac721b.png",
          title: "Holidays in Snowflake Island",
          network: "BSC",
          volume: "2.4",
          volumeRate: "0",
          ownersCount: 5588,
          itemsCount: 50000,
          listedCount: null,
          floorPrice: "1.29",
          floorPriceRate: "7.5",
          verified: 1,
        },
        {
          collectionId: "548782449151475713",
          coverUrl:
            "https://public.nftstatic.com/static/nft/res/a90f8dfb3cbb4c8d9916102357169bce.jpeg",
          title: "Slipstream into the Future",
          network: "BSC",
          volume: "4.9",
          volumeRate: "0",
          ownersCount: 1141,
          itemsCount: 7500,
          listedCount: null,
          floorPrice: "14",
          floorPriceRate: "185.71",
          verified: 1,
        },
      ],
    },
  ]);
  return (
    <div>
      <section className="tf-section top-seller home5 s2 mobie-style bg-style2">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title style2 mb-25 text-left">Top Trending</h2>
              <div className="flat-tabs seller-tab tablet-30">
                <Tabs>
                  <TabList>
                    {dataTopSellerTab.map((item, index) => (
                      <Tab key={index}>{item.title}</Tab>
                    ))}
                  </TabList>

                  <div className="content-tab">
                    {dataTopSellerPanel.map((item) => (
                      <TabPanel key={item.id}>
                        {item.dataTopSellerContent.map((item, index) => (
                          <div className="box-item" key={index}>
                            <div className="sc-author-box style-3">
                              <div className="author-avatar">
                                <img
                                  src={item.coverUrl}
                                  alt="Axies"
                                  className="avatar"
                                />
                                <div className="badge">
                                  <i className="ripple"></i>
                                </div>
                              </div>
                              <div className="author-infor">
                                <h5>{item.title}</h5>
                                <span className="price">
                                  {item.floorPrice} BNB
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </TabPanel>
                    ))}
                  </div>
                </Tabs>
              </div>
            </div>
            {/* <div className="col-xl-6 col-lg-12">
              <h2 className="tf-title style2 mb-25 text-left">Top Buyers</h2>
              <div className="flat-tabs seller-tab tablet-30">
                <Tabs>
                  <TabList>
                    {dataTopSellerTab.map((item, index) => (
                      <Tab key={index}>{item.title}</Tab>
                    ))}
                  </TabList>

                  <div className="content-tab">
                    {dataTopSellerPanel.map((item) => (
                      <TabPanel key={item.id}>
                        {item.dataTopSellerContent.map((item, index) => (
                          <div className="box-item" key={index}>
                            <div className="sc-author-box style-3">
                              <div className="author-avatar">
                                <Link to="#">
                                  <img
                                    src={item.img}
                                    alt="Axies"
                                    className="avatar"
                                  />
                                </Link>
                                <div className="badge">
                                  <i className="ripple"></i>
                                </div>
                              </div>
                              <div className="author-infor">
                                <h5>
                                  <Link to="#">{item.name}</Link>
                                </h5>
                                <span className="price">{item.price}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </TabPanel>
                    ))}
                  </div>
                </Tabs>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSeller;
