import React from 'react';
import styled from "styled-components";
import img from "../utill/images/pagesPictures/forLaptopPage.png";

const Laptop = () => {
    const Container = styled.div`
      width: 100vw;
      height: calc(100vh - 60px);
      padding: 0 20px;
      margin-top: 60px!important;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #4842A2;
    `;

    const Left = styled.div`
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const Image = styled.img`
      margin-top: 10px!important;
      margin-left: 20px!important;
      min-width: 300px;
      height: 300px;
    `;

    const Right = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const Wrapper = styled.div`
      width: 70%;
      margin-left: 50px!important;
      display: flex;
      justify-content: right;
      flex-direction: column;
    `;

    const Title = styled.h3`
      display: block;
      font-size: 60px;
      font-weight: 600;
      text-align: right;
      letter-spacing: 1.1px;
      margin-bottom: 20px!important;
      color: #fff;
    `;

    const Announce = styled.h4`
      display: block;
      font-size: 16px;
      font-weight: 400;
      text-align: right;
      letter-spacing: 1.1px;
      margin-bottom: 20px!important;
      color: #fff;
    `;

    const Button = styled.button`
      display: flex;
      align-items: center;
      justify-content: center;
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
      transform: translateX(380px);
      
      
      &:focus{
        transform: translateX(380px) scale(0.9); 
      }
    `;


    return (
        <Container>
            <Right>
                <Image  src={img} title={"picture of laptop"}/>
            </Right>
            <Left>
                <Wrapper>
                    <Title>Laptop</Title>
                    <Announce>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Amet cumque distinctio
                        excepturi fuga fugit iure labore modi optio
                        quas rem tempora, totam, unde? Atque cum
                        excepturi ipsum, molestiae odio tenetur!
                    </Announce>
                    <Button>Read More</Button>
                </Wrapper>
            </Left>
        </Container>
    );
};

export default Laptop;