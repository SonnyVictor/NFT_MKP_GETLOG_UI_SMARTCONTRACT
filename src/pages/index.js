import Home05 from "./Home05";
import Explore01 from "./Explore01";
import Explore02 from "./Explore02";
import Explore03 from "./Explore03";
import Explore04 from "./Explore04";
import LiveAuctions from "./LiveAuctions";
import ItemDetails01 from "./ItemDetails01";
import ItemDetails02 from "./ItemDetails02";
import Activity01 from "./Activity01";
import Activity02 from "./Activity02";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import HelpCenter from "./HelpCenter";
import Authors01 from "./Authors01";
import Authors02 from "./Authors02";
import WalletConnect from "./WalletConnect";
import CreateItem from "./CreateItem";
import EditProfile from "./EditProfile";
import Ranking from "./Ranking";
import Login from "./Login";
import SignUp from "./SignUp";
import NoResult from "./NoResult";
import FAQ from "./FAQ";
import Contact01 from "./Contact01";
import Contact02 from "./Contact02";
import ArbNFTPage from "./ArbNFTPage";
import MinNft from "./MinNft";

const routes = [
  { path: "/", component: <Home05 /> },
  // { path: "/marketplace", component: <Explore01 /> },
  // { path: "/explore-02", component: <Explore02 /> },
  // { path: "/explore-03", component: <Explore03 /> },
  // { path: "/explore-04", component: <Explore04 /> },
  // { path: "/live-auctions", component: <LiveAuctions /> },
  {
    path: "/details",
    component: <ItemDetails01 />,
  },
  // { path: "/item-details-02", component: <ItemDetails02 /> },
  { path: "/activity-01", component: <Activity01 /> },
  // { path: "/activity-02", component: <Activity02 /> },
  // { path: "/blog", component: <Blog /> },
  // { path: "/blog-details", component: <BlogDetails /> },
  // { path: "/help-center", component: <HelpCenter /> },
  // { path: "/authors-01", component: <Authors01 /> },
  { path: "/profile", component: <Authors02 /> },
  // { path: "/wallet-connect", component: <WalletConnect /> },
  // { path: "/create-item", component: <CreateItem /> },
  { path: "/edit-profile", component: <EditProfile /> },
  // { path: "/ranking", component: <Ranking /> },
  // { path: "/no-result", component: <NoResult /> },
  { path: "/mint-nft", component: <MinNft /> },
  // { path: "/contact-01", component: <Contact01 /> },
  // { path: "/contact-02", component: <Contact02 /> },
  { path: "/nft-ai", component: <ArbNFTPage /> },
];

export default routes;
