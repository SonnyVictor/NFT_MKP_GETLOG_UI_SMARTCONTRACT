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
  const [data, setData] = useState(null);
  const [keyParam, setKeyParam] = useState({
    top: "SIX_HOUR_VOLUME",
    trending: "SIX_HOUR_SALES",
  });
  useEffect(() => {
    const query = {
      id: "HomePageStatsTablesLazyQuery",
      query:
        "query HomePageStatsTablesLazyQuery(\n  $chain: [ChainScalar!]\n  $parents: [CollectionSlug!]\n  $categories: [CategorySlug!]\n  $categoriesV2: [CategoryV2Slug!]!\n  $isCategory: Boolean!\n  $sortBy: CollectionSort\n  $trendingCollectionsSortBy: TrendingCollectionSort\n  $topCollectionsSortBy: TrendingCollectionSort\n  $fromHomePage: Boolean!\n) {\n  ...HomePageStatsTables_data_3yoAbP\n}\n\nfragment HomePageStatsTables_data_3yoAbP on Query {\n  topCollectionsByCategory(first: 15, chains: $chain, categories: $categoriesV2, sortBy: $topCollectionsSortBy) @include(if: $isCategory) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        ...StatsHomepageCollectionCell_collection\n        ...collection_url\n        ...StatsTableHomepageRowData\n        ...StatsTableHomepageRowLiveData\n        id\n      }\n    }\n  }\n  trendingCollectionsByCategory(first: 15, topCollectionLimit: 500, chains: $chain, categories: $categoriesV2, sortBy: $trendingCollectionsSortBy) @include(if: $isCategory) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        ...StatsHomepageCollectionCell_collection\n        ...collection_url\n        ...StatsTableHomepageRowData\n        ...StatsTableHomepageRowLiveData\n        id\n      }\n    }\n  }\n  rankings(first: 15, sortBy: $sortBy, chains: $chain, parents: $parents) @skip(if: $isCategory) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        ...StatsHomepageCollectionCell_collection\n        ...collection_url\n        ...StatsTableHomepageRowData\n        ...StatsTableHomepageRowLiveData\n        id\n      }\n    }\n  }\n  trendingCollections(first: 15, topCollectionLimit: 500, chains: $chain, categories: $categories, sortBy: $trendingCollectionsSortBy, fromHomePage: $fromHomePage) @skip(if: $isCategory) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        ...StatsHomepageCollectionCell_collection\n        ...collection_url\n        ...StatsTableHomepageRowData\n        ...StatsTableHomepageRowLiveData\n        id\n      }\n    }\n  }\n}\n\nfragment StatsHomepageCollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n  slug\n}\n\nfragment StatsTableHomepageRowData on CollectionType {\n  statsV2 {\n    thirtyDayChange\n    thirtyDayVolume {\n      eth\n      unit\n      symbol\n    }\n    totalVolume {\n      eth\n      unit\n      symbol\n    }\n  }\n}\n\nfragment StatsTableHomepageRowLiveData on CollectionType {\n  statsV2 {\n    floorPrice {\n      unit\n      eth\n      symbol\n    }\n    oneHourChange\n    oneHourVolume {\n      eth\n      unit\n      symbol\n    }\n    sixHourChange\n    sixHourVolume {\n      eth\n      unit\n      symbol\n    }\n    oneDayChange\n    oneDayVolume {\n      eth\n      unit\n      symbol\n    }\n    sevenDayChange\n    sevenDayVolume {\n      eth\n      unit\n      symbol\n    }\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n",
      variables: {
        chain: null,
        parents: null,
        categories: null,
        categoriesV2: [],
        isCategory: false,
        sortBy: keyParam.top,
        trendingCollectionsSortBy: keyParam.trending,
        topCollectionsSortBy: keyParam.top,
        fromHomePage: false,
      },
    };
    const headers = {
      // "x-signed-query":
      //   "b9cc25ed18fe06e848a88612039b70e71682f2c299cf8793e9c6c14bcf82e2f4",
      // "X-API-KEY": "a91348b2550340c1b15fa45c354438aa", 
      // "Content-Type": "application/json",
      
    };
    axios
      .get('https://tofunft.com/_next/data/NlEkfXTdGmJdcueURNmZC/en/ranking.json')
      .then((response) => {
        console.log(response);
        setData(response?.data?.data?.trendingCollections?.edges);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
  }, [keyParam]);
  const [dataTopSellerTab] = useState([
    {
      title: "6 hour",
      key: { top: "SIX_HOUR_VOLUME", trending: "SIX_HOUR_SALES" },
    },
    {
      title: "1 Day",
      key: { top: "ONE_DAY_VOLUME", trending: "ONE_DAY_SALES" },
    },
    {
      title: "1 Week",
      key: { top: "SEVEN_DAY_VOLUME", trending: "SEVEN_DAY_SALES" },
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
                      <Tab
                        key={index}
                        onClick={() => {
                          setKeyParam(item.key);
                        }}
                      >
                        {item.title}
                      </Tab>
                    ))}
                  </TabList>
                  <div className="content-tab">
                    {dataTopSellerTab.map(() => {
                      return (
                        <TabPanel>
                          {data?.map((item, index) => {
                            return (
                              <div className="box-item" key={item?.node?.id}>
                                <div className="sc-author-box style-3">
                                  <div className="author-avatar">
                                    <img
                                      src={item?.node?.imageUrl}
                                      alt="Axies"
                                      className="avatar"
                                    />
                                    <div className="badge">
                                      <i className="ripple"></i>
                                    </div>
                                  </div>
                                  <div className="author-infor">
                                    <h5>{item?.node?.name}</h5>
                                    <span className="price">
                                      {item?.node?.statsV2?.floorPrice?.eth}{" "}
                                      {item?.node?.statsV2?.floorPrice?.symbol}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </TabPanel>
                      );
                    })}
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSeller;
