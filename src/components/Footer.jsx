import React from "react";
import styled from "styled-components";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

const Container = styled.div`
  display: flex;
  height: 40vh;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  background-color: whitesmoke;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 1em;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 800;
`;
const Description = styled.p``;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BENJ</Logo>
        <Description>
          We sell nothing but the best. Get your swag on for less.
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <BsFacebook size="1.5rem" />
          </SocialIcon>
          <SocialIcon color="55acee">
            <BsTwitter size="1.5rem" />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <BsInstagram size="1.5rem" />
          </SocialIcon>
          <SocialIcon color="e60023">
            <BsPinterest size="1.5rem" />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Resources</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <HiOutlineLocationMarker size="1.5rem" />
          333 Magical Place, Fairy Land 337733
        </ContactItem>
        <ContactItem>
          <HiOutlinePhone size="1.5rem" />
          (333)-777-3377
        </ContactItem>
        <ContactItem>
          <HiOutlineMail size="1.5rem" /> benj@benj.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
