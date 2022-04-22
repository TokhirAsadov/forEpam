import React from 'react';
import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {

    const Container = styled.div`
        width: 100vw;
        height: 60px;
        background-color: #4842A2;
        display: flex;
        align-items: center;
        line-height:40px;
        padding: 5px 10px;
    `;

    return (
        <Container>
            <Logo />
            <NavLinks />
        </Container>
    );
};

export default Navbar;