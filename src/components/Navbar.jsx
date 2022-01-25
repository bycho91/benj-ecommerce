import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { Badge } from "@material-ui/core";
import { FiMail, FiShoppingCart } from "react-icons/fi";
import { device } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;

  @media (max-width: 420px) {
    height: 50px;
  }
`;

const Wrapper = styled.div`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 420px) {
    padding: 10px;
  }
`;

// LEFT
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 420px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid whitesmoke;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  padding: 0 5px;
  &:focus {
    outline: none;
  }

  @media (max-width: 420px) {
    width: 50px;
  }
`;

// CENTER
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 800;
  font-size: 1.8rem;
  letter-spacing: 0.3em;

  @media (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

// RIGHT
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;

  @media (max-width: 420px) {
    gap: 0.5em;
    justify-content: flex-end;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;

  @media (max-width: 420px) {
    font-size: 12px;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <BsSearch style={{ color: "gray", fontSize: "1em" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BENJ</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register">REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">SIGN IN</Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <Link to="/cart">
                <FiShoppingCart size="1.3em" />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
