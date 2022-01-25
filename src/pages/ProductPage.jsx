import React from "react";
import styled from "styled-components";
import { Navbar, Announcements, Newsletter, Footer } from "../components";
import { GrAddCircle } from "react-icons/gr";
import { HiOutlineMinusCircle } from "react-icons/hi";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  gap: 3em;
`;
const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 2rem;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Amount = styled.p`
  font-size: 1.3rem;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: none;
  padding: 0.3rem 1rem;
  border: 2px solid teal;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            dolorum amet facere doloribus explicabo eum earum in quae a
            perferendis illo minus sapiente culpa doloremque, laudantium ab
            excepturi deserunt delectus.
          </Description>
          <Price>$20.00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <HiOutlineMinusCircle size="1.3rem" />
              <Amount>1</Amount>
              <GrAddCircle size="1.2rem" />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
