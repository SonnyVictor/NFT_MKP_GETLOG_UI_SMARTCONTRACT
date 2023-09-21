import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import _ from "lodash";

const DATA_TOP_TRENDING ={
    "rows": [
      {
        "coverUrl": "https://public.nftstatic.com/static/nft/res/7c2bdc6c55a84d2aaff2f348522825cc.png",
        "title": "Bored Ape Yacht Club",
        "network": "ETH",
        "floorPrice": "42809.3328",
        "floorPriceRate": "4.28",
        "verified": 1
      },
      {
        "coverUrl": "https://public.nftstatic.com/static/nft/res/2c66a6e10df04bbea3eff518e06f8d73.jpeg",
        "title": "Mutant Ape Yacht Club",
        "network": "ETH",
        "floorPrice": "8082.84672",
        "floorPriceRate": "-2.3",
        "verified": 1
      },
      {
        "coverUrl": "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1680315311520_bbkd4ll4i5ylykbam34twi0omc736x8p.png",
        "title": "DeGods",
        "network": "ETH",
        "floorPrice": "5983.497312",
        "floorPriceRate": "-2.08",
        "verified": 1
      },
      {
        "coverUrl": "https://public.nftstatic.com/static/nft/res/nft-extdata-loader/S3/1680744730441_4lg38ehc0z91k4qmw66teiz4xj5f9ozz.jpg",
        "title": "Otherside Vessels",
        "network": "ETH",
        "floorPrice": "285.28656",
        "floorPriceRate": "9.53",
        "verified": 1
      },
      {
        "coverUrl": "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1667874736142_4iimvwacp4r3v0khr6j8sr2tlzyxs8zr.jpg",
        "title": "Milady Maker",
        "network": "ETH",
        "floorPrice": "4249.05312",
        "floorPriceRate": "-5.65",
        "verified": 1
      },
      {
        "coverUrl": "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1679504422444_vjcv41ljfw58vjy9hkcyarbkxjus3u2d.png",
        "title": "Nakamigos",
        "network": "ETH",
        "floorPrice": "370.790784",
        "floorPriceRate": "-18.58",
        "verified": 0
      },
      {
        "coverUrl": "https://public.nftstatic.com/static/nft/res/9e9d1ca1a76847418c3a10ac13c627db.png",
        "title": "Pudgy Penguins",
        "network": "ETH",
        "floorPrice": "7082.30016",
        "floorPriceRate": "5.73",
        "verified": 1
      },
      {
        "coverUrl": "https://public.nftstatic.com/static/nft/res/303d4787c96242a1bb000136dd57f405.jpeg",
        "title": "Azuki",
        "network": "ETH",
        "floorPrice": "6343.3344",
        "floorPriceRate": "-2.71",
        "verified": 1
      },
      {
        "coverUrl": "https://public.nftstatic.com/static/nft/res/b8b7c6ac4743492db019ce26f7347462.jpeg",
        "title": "CLONE X - X TAKASHI MURAKAMI",
        "network": "ETH",
        "floorPrice": "2201.856384",
        "floorPriceRate": "0.3",
        "verified": 1
      },
      {
        "coverUrl": "https://public.nftstatic.com/static/nft/res/nft-cex/S3/1674158452400_vx3wp10xif320ent425wm1a378f7hr77.png",
        "title": "Opepen Edition",
        "network": "ETH",
        "floorPrice": "648.883872",
        "floorPriceRate": "-3.39",
        "verified": 1
      }
    ]
}

const TopSeller = () => {
  const [data, setData] = useState(DATA_TOP_TRENDING);
  const [keyParam, setKeyParam] = useState({
    top: "SIX_HOUR_VOLUME",
    trending: "SIX_HOUR_SALES",
  });

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
                    return <TabPanel>
                    {DATA_TOP_TRENDING.rows.map((item, index) => {
                      return (
                        <div className="box-item" key={index}>
                          <div className="sc-author-box style-3">
                            <div className="author-avatar">
                              <img
                                src={item?.coverUrl}
                                alt="Axies"
                                className="avatar"
                              />
                              <div className="badge">
                                <i className="ripple"></i>
                              </div>
                            </div>
                            <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              width: '100%',
                              paddingRight: '50px'
                            }}
                            >
                              <div className="author-infor">
                                <h5>{item?.title}</h5>
                                <span className="price">
                                {item?.floorPriceRate} {item?.network} 
                                </span>
                              </div>
                              <div className="author-infor">
                                <h5>{item?.floorPriceRate} {item?.network} </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </TabPanel> 
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
