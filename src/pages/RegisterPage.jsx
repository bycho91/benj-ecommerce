import React from "react";
import styled from "styled-components";
import { Navbar, Announcements, Footer, Newsletter } from "../components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 1em;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
`;

const Agreement = styled.div`
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1em 2em;
  background-color: teal;
  color: white;
  margin: 0 auto;
`;

const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating this account, I consent to the processor of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
