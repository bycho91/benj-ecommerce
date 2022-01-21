import React from 'react';
import styled from 'styled-components';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsSearch, BsHeart} from 'react-icons/bs';

const Container = styled.div`
    flex: 1;
    min-width: 280px;
    height: 350px;
`;

const Circle = styled.div`

`;
const Image = styled.img`
    height: 80%;
    width: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Icon = styled.div``;

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
               <AiOutlineShoppingCart /> 
            </Icon>
            <Icon>
               <BsSearch /> 
            </Icon>
            <Icon>
               <BsHeart /> 
            </Icon>
        </Info>
    </Container>
  );
};

export default Product;
