import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/images/icon/Wallet.png'
import icon2 from '../../../assets/images/icon/Category.png'
import icon3 from '../../../assets/images/icon/Image2.png'
import icon4 from '../../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Connect Wallet",
            description: "Once you’ve set up your wallet of choice, connect it to XRender.",
            icon : icon1,
            colorbg : "icon-color1"
        },
        {
            title: "Your NFT Collection",
            description: "Click Profile and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
            icon : icon2,
            colorbg : "icon-color2",
        },
        {
            title: "Gen NFT Image",
            description: "Go to the XRender AI site and start using it to mint a new NFT easily and you own them.",
            icon : icon3,
            colorbg : "icon-color3",
        },
        {
            title: "Buy/Sell NFTs",
            description: "You can buy/sell your own NFTs on the XRender Marketplace.",
            icon : icon4,
            colorbg : "icon-color4",
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3">
            <div className="themesflat-container">
                <div className="row">
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>                 
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-3 col-md-6 col-12'>
        <div className="sc-box-icon">
        <div className="image center">
            <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>                                                                           
            </div>
        <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
        <p className="content">{props.item.description}</p>
    </div>
    </div>
    
)

export default Create;
