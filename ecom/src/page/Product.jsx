import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
`

const SubContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: #FFFFFF;
  margin: 15px;
  border-radius: 14px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const ImgContainer = styled.img`
  width: 150px;
  height: 150px;
  background-color: transparent;
  margin-bottom: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  &:hover {
    background-color: #555;
  }
`
const Title = styled.h1`
    font-size: 20px;
`

const Product = () => {
  const [apiData, setApiData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setApiData(res.data);
        setSortedData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

 
  const sortAscending = () => {
    const sorted = [...apiData].sort((a, b) => a.price - b.price);
    setSortedData(sorted);
  };

 
  const sortDescending = () => {
    const sorted = [...apiData].sort((a, b) => b.price - a.price);
    setSortedData(sorted);
  };

  
  const sortNone = () => {
    setSortedData(apiData);
  };
  

  return (
    <>
      <ButtonContainer>
        <Button onClick={sortNone}>None</Button>
        <Button onClick={sortAscending}>Ascending</Button>
        <Button onClick={sortDescending}>Descending</Button>
      </ButtonContainer>

      <Container>
        {sortedData.map((product) => (
          <SubContainer>
            <Title>{product.title}</Title>
            <ImgContainer src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate}({product.rating.count} reviews)</p>
          </SubContainer>
        ))}
      </Container>
    </>
  );
};

export default Product;
