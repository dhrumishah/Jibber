import React from "react";
import Profile from "../img/profile.png";
const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Profile} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img src={Profile} alt="" /> */}
      </div>
    </div>
  );
};

export default Message;
