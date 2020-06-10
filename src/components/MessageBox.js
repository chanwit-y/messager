import React, { useState } from "react";
import styled from "styled-components";

// import { db } from "../database/database";

const Box = styled.div`
  width: 80%;
  height: 120px;
  margin-top: 5px;
  position: relative;
  left: 10%;
  right: 10%;
  top: 50%;
  padding: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #94c9e6;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #888;
  font-weight: bold;
`;

const MessageBox = (props) => {
  const [message, setMessage] = useState("");

  return (
    <Box>
      <div>
        <textarea
          style={{
            width: "99%",
            borderRadius: "10px",
            border: "1px solid #888",
            resize: "none",
          }}
          id="w3review"
          name="w3review"
          rows="5"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <div style={{ float: "right" }}>
        <Button
          onClick={() => {
            props.onSended(message);
            setMessage('');
          }}
        >
          Send
        </Button>
      </div>
    </Box>
  );
};

export default MessageBox;
