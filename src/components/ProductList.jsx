import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import {popularProducts} from '../data';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 1em;
  flex-wrap: wrap;
`;


const ProductList = () => {
  return <Container>
    {popularProducts.map(item => <Product item={item} />)}
  </Container>;
};

export default ProductList;
