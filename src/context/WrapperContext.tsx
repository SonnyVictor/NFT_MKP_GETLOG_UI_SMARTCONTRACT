import React, { createContext, useState, useContext, useEffect, useReducer } from 'react';
// import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons';
import './style.css';
// import { MarketApi } from 'components/market/marketApi';
import { useActiveWeb3React, useConnectWallet } from '../hooks';
import { BrowserRouter as Router, Route, Link, useLocation, useNavigate } from 'react-router-dom';

export type IProps = {
	showNoti: Function;
	tokenID: string;
	routerWrap: string;
};

const WrapperContext = createContext<IProps>({
	showNoti: () => { },
	tokenID: '',
	routerWrap: ''
});

// const initialState = {
//   noti: "",
// };

// function reducer() {}

export const WrapperProvider = ({ children }: any) => {
	const { account } = useActiveWeb3React();
	const [tokenID, setTokenID] = useState('');
	const location = useLocation()
	const routerWrap = location.pathname;

	// --- Show Notification ---
	const showNoti = (type: string, content: string) => {
		const nodeNoti = () => {
			return (
				<div className={`noti-box`}>
					<div className="noti-box__content">
						<span className="icon">
							{/* {type == 'danger' ? <WarningOutlined /> : type == 'success' && <CheckCircleOutlined />} */}
						</span>
						<span className="text">{content}</span>
					</div>
				</div>
			);
		};

		// switch (type) {
		// 	case 'success':
		// 		toast.success(content);
		// 		break;
		// 	case 'error':
		// 		toast.error(content);
		// 		break;
		// 	case 'warning':
		// 		toast.warning(content);
		// 		break;
		// 	default:
		// 		break;
		// }
	};

	return (
		<>
			<WrapperContext.Provider
				value={{
					showNoti,
					tokenID: tokenID,
					routerWrap: routerWrap
				}}
			>
				{/* <ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/> */}

				{children}
			</WrapperContext.Provider>
		</>
	);
};

export const useWrap = () => useContext(WrapperContext);
