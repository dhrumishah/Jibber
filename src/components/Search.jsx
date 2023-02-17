import React from "react";
import Profile from "../img/profile.png";
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src={Profile} alt="" />
        <div className="userChatInfo">
          <span>dee</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
