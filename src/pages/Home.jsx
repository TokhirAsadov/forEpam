import React from 'react';
import HomeViewSection from "../components/HomeViewSection";
import ThreeCards from "./ThreeCards";
import Products from "./Products";
import Contact from "./Contact";
import Computer from "./Computer";
import styled from "styled-components";

const Home = () => {
    const Wrapper = styled.div`
      margin-top: 69px;
    `;
    return (
        <Wrapper>
            <HomeViewSection />
            <ThreeCards />
            <Products marginTop={"0px"}/>
            <Computer marginTop={"0px"}/>
            <Contact marginTop={"0px"}/>
        </Wrapper>
    );
};

export default Home;