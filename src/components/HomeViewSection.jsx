import React from 'react';
import LeftFromHomeViewSection from "./LeftFromHomeViewSection";
import RightFromHomeViewSection from "./RightFromHomeViewSection";
import styled from "styled-components";

const HomeViewSection = () => {

    const Container = styled.div`
      display: flex; 
      align-items: center;
      justify-content: center;
      height: calc(100vh - 70px);
      background-color: #4842A2;
      color: #fff;
    `;

    return (
        <Container>
            <LeftFromHomeViewSection />
            <RightFromHomeViewSection />
        </Container>
    );
};

export default HomeViewSection;