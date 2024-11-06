import React from 'react';
import styled from 'styled-components';
import dino from '../imgs/dinosaur.png'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: wheat;
  padding: 1rem;
`;

const NavItem = styled.ul`
  margin: 0;
  display:flex;
  flex-direction: row;

  li {
    margin: 0 1rem;
  }

  a {
    padding: 1rem;
    border-bottom: black solid 4px;
    border-radius: 16px 16px 16px 16px;
    background-color: white;
    transition: all 0.5s ease;
    font-size: 1.25em;
    color: black;
    transition: all 0.5s ease;
  }

  a:hover {
    border-bottom: white solid 4px;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  image-rendering: pixelated;
  max-width: 100%;
  max-height: 100%;
  width: 96px;
  margin: 0;
  transition: all 0.5s ease;
  &:hover {
    scale:1.5;
  }
`;

const Navbar = () => {
  return (
    <Nav>
    <a href="/"><Logo src={dino}></Logo></a>
    <NavItem>
        <li><a href="/">Início</a></li>
        <li><a href="/">Sobre</a></li>
        <li><a href="/">Imagens</a></li>
        <li><a href="/">Contato</a></li>
    </NavItem>
    </Nav>
  );
};

export default Navbar;