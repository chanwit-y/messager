import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  ${"" /* color: palevioletred; */}
  position: relative;
  right: 5%;
  margin: 20px;
  text-align: right;
`;

const MessagesBox = styled.div`
  display: block;
  background-color: #d4e9f4;
  border-radius: 10px;
  width: 80%;
  height: 450px;
  margin: 5px;
  position: relative;
  left: 10%;
  right: 10%;
  top: 50%;
  overflow-y: auto;
  padding: 10px;
`;

const Messages = (props) => {
  return (
    <div>
      <Title>
        <input
          type="text"
          value={props.user}
          style={{
            borderRadius: "5px",
            height: '20px',
            border: '1px solid', 
            padding: '5px'
          }}
          onChange={(e) => props.onChangeName(e.target.value)}
        />
      </Title>
      <MessagesBox>
        {props.message.map((el, index) => {
          if (props.user === el.name) {
            return (
              <div
                key={index}
                style={{
                  textAlign: "right",
                  margin: "5px",
                  padding: "5px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#0BA1F1",
                    position: "relative",
                    right: "0%",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                >
                  {el.message}
                </span>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                style={{
                  textAlign: "left",
                  left: "0%",
                  margin: "5px",
                  padding: "5px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#0BA1F1",
                    position: "relative",
                    right: "0%",
                    borderRadius: "5px",
                    margin: "5px",
                    padding: "5px",
                  }}
                >
                  {el.message}
                </span>
              </div>
            );
          }
        })}
      </MessagesBox>
    </div>
  );
};

export default Messages;
