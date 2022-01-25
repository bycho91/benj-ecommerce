import React from "react";
import styled from "styled-components";
import { Navbar, Announcements, Footer, Newsletter } from "../components";
import { GrAddCircle } from "react-icons/gr";
import { HiOutlineMinusCircle } from "react-icons/hi";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" ? "1px solid black" : "none")};
  background: ${(props) => (props.type === "filled" ? "black" : "white")};
  background-color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  display: flex;
  gap: 2em;
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
const ProductQty = styled.div`
  font-size: 1.2rem;
`;
const ProductPrice = styled.div`
  font-size: 1.5rem;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryTitle = styled.h1``;
const SummaryItem = styled.div``;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button``;

const CartPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />

      <Wrapper>
        <Title>YOUR BAG</Title>

        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>

          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your wishlist</TopText>
          </TopTexts>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Details>
                  <ProductName>
                    <b>Product:</b> FANCY SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 3246090253
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 12
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <HiOutlineMinusCircle size="1.3rem" />
                  <ProductQty>2</ProductQty>
                  <GrAddCircle size="1.2rem" />
                </ProductAmountContainer>
                <ProductPrice>$300</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <Details>
                  <ProductName>
                    <b>Product:</b> SWAG SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 363945614
                  </ProductId>
                  <ProductColor color="orange" />
                  <ProductSize>
                    <b>Size:</b> 12
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <HiOutlineMinusCircle size="1.3rem" />
                  <ProductQty>1</ProductQty>
                  <GrAddCircle size="1.2rem" />
                </ProductAmountContainer>
                <ProductPrice>$450</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <Details>
                  <ProductName>
                    <b>Product:</b> SWAG SUNGLASSES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 36234123
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <HiOutlineMinusCircle size="1.3rem" />
                  <ProductQty>1</ProductQty>
                  <GrAddCircle size="1.2rem" />
                </ProductAmountContainer>
                <ProductPrice>$250</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$1000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$15.23</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$-15.23</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice>$1000</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default CartPage;
