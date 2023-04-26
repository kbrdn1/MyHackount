import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Logout = (props) => {
    const removeCookie = (key) => {
        if (window !== "undefined") {
            cookies.remove(key, { expires: 1 })
        }
    }

  const logout = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/logout`, {
        withCredentials: true,
      })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
     window.location = "/";
  };

  return (
    <li onClick={logout}>
      <img src="./img/icons/logout.svg" alt="logout" />
    </li>
  );
};

export default Logout;
