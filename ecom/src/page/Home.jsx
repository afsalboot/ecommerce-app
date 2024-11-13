import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-components for Navbar and Items
const Navbar = styled.nav`
  background-color: #ffffff;
  padding: 10px 20px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  font-size: 18px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #000000;
  border: none;
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
`;

function Home() {

  return (
    <div>
      {/* Navbar */}
      <Navbar>
        <NavList>
            <Link to = {`/products`}>
          <NavItem>
            <Button>All Categories</Button>
          </NavItem>
          </Link>
          <Link to = {`/cloths`}>
          <NavItem>
            <Button>Clothing</Button>
          </NavItem>
          </Link>
          <Link to = {`/electronics`}>
          <NavItem>
            <Button>Electronics</Button>
          </NavItem>
          </Link>
          <Link to = {`/jewelery`}>
          <NavItem>
            <Button>Jewelry</Button>
          </NavItem>
          </Link>
        </NavList>
      </Navbar>
    </div>
  );
}

export default Home;
