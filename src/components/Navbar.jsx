import React from 'react';
import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {

    const Container = styled.div`
        top: 0;
        position: fixed;
        z-index: 1000;
        width: 100vw;
        height: 60px;
        display: flex;
        align-items: center;
        line-height:40px;
        padding: 5px 10px;
      background-color: #4842A2;
    `;

    const Wrapper = styled.div`
      display: flex;
      position: fixed; 
      width: 100%;
      background-color: #4842A2;
    `;

    return (
        <Container>
            <Wrapper>
            <Logo color={"green"}/>
            <NavLinks />
            </Wrapper>
        </Container>
    );
};

export default Navbar;