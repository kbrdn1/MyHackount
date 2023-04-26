import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import { useSelector } from "react-redux";
import LeftNav from "../components/LeftNav";
import { isEmpty } from "../components/Utils";
import Cards from "../components/Post/Cards";
import Trends from "../components/Trends";
import FriendsHint from "../components/Profil/FriendsHint";

const Trending = (props) => {
  const uid = useContext(UidContext);
  const trendList = useSelector((state) => state.trendingReducer);
  return (
    <div className="trending-page">
      <LeftNav trending={true} />
      <div className="main">
        <ul>
          {!isEmpty(trendList[0]) &&
            trendList.map((post) => <Cards post={post} key={post._id} />)}
        </ul>
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <Trends />
          {uid && <FriendsHint />}
        </div>
      </div>
    </div>
  );
};

export default Trending;
