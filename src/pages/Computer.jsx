import React from 'react';
import styled from "styled-components";
import img from "./../utill/images/pagesPictures/computerPage.png"

const Computer = () => {
    const Container = styled.div`
      width: 100vw;
      height: calc(100vh - 65px);
      margin-top: 60px!important;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #4842A2;
    `;

    const Left = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center; 
    `;

    const Wrapper = styled.div`
      margin-left: 50px!important;
      display: flex;
      justify-content: left;
      flex-direction: column;
    `;

    const Title = styled.h3`
      display: block;
      font-size: 32px;
      font-weight: 300;
      text-align: left;
      letter-spacing: 1.1px;
      margin-bottom: 20px!important;
      color: #fff;
    `;

    const Announce = styled.h4`
      display: block;
      font-size: 64px;
      text-align: left;
      font-weight: 400;
      letter-spacing: 1.1px;
      margin-bottom: 20px!important;
      color: #fff;
    `;

    const Button = styled.button`
      width: 150px;
      height: 50px;
      margin-top: 20px !important;
      padding: 5px 10px;
      background-color: #47CA94;
      border: 2px solid #12cb37;
      font-size: 16px;
      letter-spacing: 0.8px;
      color: white;
      cursor: pointer;
      transition: all ease 0.4s;
      
      &:focus{
        transform: scale(0.9);
      }
    `;

    const Right = styled.div`
      flex: 2;
    `;

    const Image = styled.img`
      margin-top: 10px!important;
      min-width: 300px;
      height: 300px;
    `;

    return (
        <Container>
            <Left>
                <Wrapper>
                    <Title>Every Computer and laptop</Title>
                    <Announce>Up to 40% of!</Announce>
                    <Button>Shop Now</Button>
                </Wrapper>
            </Left>
            <Right>
                <Image  src={img} title={"picture of computer"}/>
            </Right>
        </Container>
    );
};

export default Computer;