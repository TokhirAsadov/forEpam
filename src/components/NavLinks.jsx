import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const NavLinks = () => {

    const Container = styled.div`
      position: relative;
      flex : 2;
      display: flex;
      align-items: center;
      justify-content: space-around;
      right: 20px;
    `;

    const LinkWrapper = styled.span`
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `;

    const NavLinks = styled.a`
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 100%;
      padding: 5px 8px;
      font-size: 12px;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      letter-spacing: 1.1px;

      &:hover {
        background-color: #ac77ac;
      }
    `;

    return (
        <Container>
            <LinkWrapper>
                <NavLinks>
                    <Link to="/" style={{textDecoration:"none",color:"#fff"}}>
                        Home
                    </Link>
                </NavLinks>
            </LinkWrapper>
            <LinkWrapper>
                <NavLinks>
                    <Link to="/about" style={{textDecoration:"none",color:"#fff"}}>
                        About
                    </Link>
                </NavLinks>
            </LinkWrapper>
            <LinkWrapper>
                <NavLinks>
                    <Link to="/computer" style={{textDecoration:"none",color:"#fff"}}>
                        Computer
                    </Link>
                </NavLinks>
            </LinkWrapper>
            <LinkWrapper>
                <NavLinks>
                    <Link to="/laptop" style={{textDecoration:"none",color:"#fff"}}>
                        Laptop
                    </Link>
                </NavLinks>
            </LinkWrapper>
            <LinkWrapper>
                <NavLinks>
                    <Link to="/products" style={{textDecoration:"none",color:"#fff"}}>
                        Products
                    </Link>
                </NavLinks>
            </LinkWrapper>
            <LinkWrapper>
                <NavLinks>
                    <Link to="/contact" style={{textDecoration:"none",color:"#fff"}}>
                        Contact Us
                    </Link>
                </NavLinks>
            </LinkWrapper>
            <LinkWrapper>
                <SearchIcon style={{fontSize: "18px",padding:"4px",borderRadius:"50%",color:"#fff"}}/>
            </LinkWrapper>
            <LinkWrapper>
                <NavLinks>
                    Login
                </NavLinks>
            </LinkWrapper>
        </Container>
    );
};

export default NavLinks;