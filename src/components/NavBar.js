import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  background-color: #94C9E6;
  width: 100%;
  height: 50px;
  position: relative;
  left: 0%;
  top: 0%;
`;

const Title = styled.div`
  width: 300px;
  height: 90%;
  position: relative;
  left: 10px;
  top: 50%;
  transform: translate(-10px, -50%);
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
`;

const Text = styled.span`
  font-size: 1.5em;
  ${'' /* color: palevioletred */}
  ${'' /* color: #ffff; */}
`;

const NavBar = () => {
  return (
    <Nav>
     <Title>
         <Text>Messager</Text>
     </Title> 
    </Nav>
  );
};

export default NavBar;
