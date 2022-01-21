import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #e85d04;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const announcements = () => {
  return <Container>Free Shipping on Orders over $50</Container>;
};

export default announcements;
