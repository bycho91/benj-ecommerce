import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { Badge } from "@material-ui/core";
import { FiMail, FiShoppingCart } from "react-icons/fi";

const Container = styled.div`
  height: 60px;
  margin-bottom: 1em;
`;

const Wrapper = styled.div`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

// RIGHT
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
`;

const MenuItem = styled.div`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <BsSearch style={{ color: "gray", fontSize: "1em" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BENJ</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <FiShoppingCart size="1.3em" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
