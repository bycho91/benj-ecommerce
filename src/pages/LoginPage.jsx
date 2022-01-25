import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  gap: 1em;
  margin-top: 1em;
  flex-direction: column;
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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1em 2em;
  background-color: teal;
  color: white;
  margin: 0 auto;
`;

const Link = styled.a`
  font-size: 0.7rem;
  text-decoration: underline;
  cursor: pointer;
`;

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
