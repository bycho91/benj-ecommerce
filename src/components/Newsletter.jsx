import React from 'react';
import styled from 'styled-components';
import {AiOutlineSend} from 'react-icons/ai';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`;
const Title = styled.h1`
    font-size: 5rem;
`;
const Description = styled.div`
    font-size: 2rem;
    color: gray;
`;
const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    max-width: 1000px;
    min-width: 400px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 2em;
    align-items: center;
`;
const Input = styled.input`
    border: none;
    border-radius: 2em;
    outline: none;
    font-size: 1.5rem;
    text-align: center;
    flex: 1;
`;
const Button = styled.button`
    padding: .5em 1em;
    background: none;
    border: none;
`;

const Newsletter = () => {
  return <Container>
      <Title>Newsletter</Title>
      <Description>Get the latest on your favorite products!</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
            <AiOutlineSend size='2rem'/>
        </Button>
      </InputContainer>
  </Container>;
};

export default Newsletter;
