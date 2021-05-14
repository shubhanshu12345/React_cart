import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./navchange.css";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #2874f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  padding-left: 2px;
  letter-spacing: 0.1rem;
  font-style: oblique;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "40vh" : 0)};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 40px;
  width: 100vw;
  background: #2874f0;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Navchange = (props) => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo>Flipkart</Logo>
        <Menu>
          <Item>
            <Link className="link" to="/">
              HOME
            </Link>
          </Item>
          <Item>
            <Link className="link" to="/cart">
              CART
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link className="link" to="/">
              HOME
            </Link>
          </Item>
          <Item>
            <Link className="link" to="/cart">
              CART
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Navchange;
