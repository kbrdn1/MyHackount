import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes/Routing";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/jwtid`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setUid(res.data);
      })
      .catch((err) => console.log("No token react " + err));

    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
