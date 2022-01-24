import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    min-width: 400px;
    height: 100vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: white;
    mix-blend-mode: difference;
    margin-bottom: .5em;
`;
const Button = styled.button`
    background: white;
    border: none;
    color: gray;
    cursor: pointer;
    padding: 1em 2em;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return <Container>
      <Image src={item.img} />
      <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
      </Info>
  </Container>;
};

export default CategoryItem;
