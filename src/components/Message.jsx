import React from "react";
import styled from "styled-components";

const Message = ({ user, message, userImage, timeStamp }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}{" "}
          <span>{new Date(timeStamp?.seconds * 1000).toLocaleTimeString()}</span>
          <span>{new Date(timeStamp?.seconds * 1000).toLocaleDateString()}</span>
        </h4>
        <p>{message} </p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  > img {
    height: 40px;
    width: 40px;
    border-radius: 20px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 {
    font-size: 14px;
  }

  > h4 > span {
    font-size: 10px;
    color: gray;
    margin-left: 10px;
    font-weight: 300;
  }

  > p {
    color: darkgreen;
    font-size: 18px;
    font-weight: 600;
  }
`;
