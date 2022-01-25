import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import HeroImg from "../static/fashion.png";
import HeroImg2 from "../static/fashion2.png";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  position: relative;
  overflow: hidden;

  @media (max-width: 420px) {
    display: none;
  }
`;

const Arrow = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 100;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.7s ease-in;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 1em 2em;
  font-size: 1.5rem;
  background: none;
  cursor: pointer;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <IoMdArrowDropleft size="2em" />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <IoMdArrowDropright size="2em" />
      </Arrow>
    </Container>
  );
};

export default Slider;
