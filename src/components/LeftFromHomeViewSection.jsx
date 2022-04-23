import React from 'react';
import styled from "styled-components";

const LeftFromHomeViewSection = () => {

    const Container = styled.div`
      flex: 1;
    `;

    const Wrapper = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
    `;

    const Title = styled.h3`
      font-size: 64px;
      letter-spacing: 1.2px;
      font-weight: 300;
    `;

    const Section = styled.h4`
      font-size: 50px;
      letter-spacing: 1.2px;
      font-weight: 500;
    `;

    const BtnsWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px!important;
    `;

    const Button = styled.button`
      width: 200px;
      height: 50px;
      background-color: transparent;
      border: 2px solid #fff;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1.1px;
      color: #fff;
      cursor: pointer;
      transition: all ease 0.5s;
      
      &:hover{
        background-color: rgba(0,0,0,0.2);
      }
      
      &:focus{
        transform: scale(0.9);
      }
    `;

    return (
        <Container>
            <Wrapper>
                <Title>
                    Tohir Asadov
                </Title>
                <Section>
                    This project for EPAM
                </Section>
                <BtnsWrapper>
                    <Button>Buy Now</Button>
                    <Button style={{marginLeft:"10px"}}>Connect</Button>
                </BtnsWrapper>
            </Wrapper>
        </Container>
    );
};

export default LeftFromHomeViewSection;