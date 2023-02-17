import React from "react";
import Profile from "../img/profile.png";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Profile} alt="" />
        <div className="userChatInfo">
          <span>dee</span>
          <p>Wanna hangout?</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Profile} alt="" />
        <div className="userChatInfo">
          <span>john</span>
          <p>Hey</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
