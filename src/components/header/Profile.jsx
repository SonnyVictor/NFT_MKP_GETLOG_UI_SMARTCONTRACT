import styled from "styled-components";
import userIcon from "../../assets/images/logo/UserIcon.svg";
import MyProfile from "../../assets/images/logo/MyNftIcon.svg";
import DarkTheme from "../../assets/images/logo/DarkModeIcon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileBtn = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem("theme"));
  const [isShow, setIsShow] = useState(false);
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "is_dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(darkTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      setIsDarkTheme("light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "is_dark");
      setIsDarkTheme("is_dark");
      theme = darkTheme;
    }
  };
  return (
    <ProfileWapper darktheme={isDarkTheme === "is_dark"} isshow={isShow}>
      <img src={userIcon} alt="" />
      <input type="text" />
      <ul>
        <Link to="/profile">
          <li className="sc-button header-slider style style-1 wallet fl-button pri-1">
            <div>
              <img src={MyProfile} alt="" /> Profile
            </div>
          </li>
        </Link>
        <Link to="#">
          <li
            className="sc-button header-slider style style-1 wallet fl-button pri-1"
            onClick={(e) => {
              switchTheme(e);
              setIsShow(true);
            }}
          >
            <div>
              <img src={DarkTheme} alt="" /> Night Mode
            </div>
            <p></p>
          </li>
        </Link>
      </ul>
    </ProfileWapper>
  );
};
export default ProfileBtn;
const ProfileWapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 4px;
  }
  input {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  ul {
    position: absolute;
    bottom: 0px;
    right: 0px;
    transform: translateY(calc(100% + 10px));
    /* padding: 5px 0px ; */
    padding: 0px;
    width: fit-content;
    overflow: hidden;
    /* width: ${(props) => (props.isshow ? "250px" : "0px")};
    height: ${(props) => (props.isshow ? "fit-content" : "0px")};
    opacity: ${(props) => (props.isshow ? "1" : "0")}; */
    width: 0px;
    height: fit-content;
    opacity: 0;
    transition: all 0.3s linear;
    display: flex;
    flex-direction: column;
    border: 2px solid #fff;
    border-radius: 10px;
    background-color: rgba(176, 176, 176, 0.5) !important;
    backdrop-filter: blur(10px);
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      width: fit-content;
      padding: 10px 10px;
      font-size: 14px;
      font-weight: 600;
      width: 100%;
      border: none !important;
      border-radius: 0px !important;
      img {
        margin: 0px;
        margin-right: 5px;
        filter: brightness(500%);
        transition: all 0.3s ease;
      }
      p {
        width: 30px;
        height: 15px;
        border: 2px solid
          ${(props) => (props.darktheme ? "#5142fc" : "#0f0e18")};
        border-radius: 10px;
        position: relative;
        transition: all 0.3s linear;
        ::after {
          position: absolute;
          content: "";
          width: 9px;
          height: 9px;
          transition: all 0.3s linear;
          background: ${(props) =>
            props.darktheme
              ? "var(--papaya-color-gradient, linear-gradient(132deg, #A73EE7 14.48%, #00EBFF 83.43%))"
              : "var(--papaya-color-gradient, linear-gradient(132deg, #0f0e18 14.48%, #0f0e18 83.43%))"};
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          left: ${(props) => (props.darktheme ? "15px" : "1px")};
        }
      }
      :hover {
        background-color: #fff;
        color: #5142fc !important;
        img {
          filter: brightness(100%);
        }
      }
    }
  }
  :hover {
    ul {
      width: 250px;
      height: fit-content;
      opacity: 1;
    }
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    height: 40px;
    border-radius: 0%;
    border: 2px solid ${(props) => (props.darktheme ? "#fff" : "#0f0e18")};
    top: 0%;
    transform: translateY(0%);
    right: 0px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: none;
    }
    input {
      display: none;
    }
    ul {
      position: relative;
      bottom: 0px;
      right: 0px;
      transform: translateY(0px);
      /* padding: 5px 0px ; */
      padding: 0px;
      width: 100%;
      overflow: hidden;
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: all 0.3s linear;
      display: flex;
      flex-direction: column;
      border: 2px solid transparent;
      border-radius: 0px;
      background-color: transparent !important;
      backdrop-filter: blur(10px);
      a {
        height: 100%;
        :first-child {
          display: none;
        }
      }
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${(props) => (props.darktheme ? "#fff" : "#0f0e18")} !important;
        padding: 5px 13px 5px 13px !important ;
        font-size: 14px;
        font-weight: 600;
        width: 100%;
        height: 100%;
        border: none !important;
        border-radius: 0px !important;
        background-color: transparent !important;
        div {
          display: flex;
          align-items: center;
        }
        img {
          display: block;
          margin: 0px;
          margin-right: 5px;
          filter: ${(props) =>
            props.darktheme ? "brightness(500%)" : "brightness(0%)"};
          transition: all 0.3s ease;
        }
        p {
          width: 30px;
          height: 15px;
          border: 2px solid
            ${(props) => (props.darktheme ? "#5142fc" : "#0f0e18")};
          border-radius: 10px;
          position: relative;
          transition: all 0.3s linear;
          ::after {
            position: absolute;
            content: "";
            width: 9px;
            height: 9px;
            transition: all 0.3s linear;
            background: ${(props) =>
              props.darktheme
                ? "var(--papaya-color-gradient, linear-gradient(132deg, #A73EE7 14.48%, #00EBFF 83.43%))"
                : "var(--papaya-color-gradient, linear-gradient(132deg, #0f0e18 14.48%, #0f0e18 83.43%))"};
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            left: ${(props) => (props.darktheme ? "15px" : "1px")};
          }
        }
        :hover {
          background-color: #fff;
          color: #5142fc !important;
          img {
            filter: brightness(100%);
          }
        }
      }
    }
  }
`;
