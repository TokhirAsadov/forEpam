import React from 'react';
import styled from "styled-components";
import img from "./../utill/images/pagesPictures/about.png";


const About = () => {
    const Container = styled.div`
      width: 100vw;
      height: calc(100vh - 125px );
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 65px!important;
    `;

    const AboutLeft = styled.div`
      flex: 1;
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `;

    const Wrapper = styled.div`
      width: 70%;
      display: flex; 
      justify-content: left;
      flex-direction: column;
    `;

    const Title = styled.h3`
      display: block;
      margin-bottom: 20px!important;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 0.7px;
      text-align: left;
    `;

    const Discreption = styled.p`
      display: block;
      text-align: left;
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
    
    const AboutRight = styled.div`
      flex: 2;
    `;

    const Image = styled.img`
      margin-top: 10px!important;
      min-width: 450px;
      height: 450px;
    `;

    return (
        <Container>
            <AboutLeft>
                <Wrapper>
                    <Title>About Us</Title>
                    <Discreption>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. A, cumque deleniti enim
                        facere molestiae non nulla quasi temporibus
                        tenetur voluptatibus.
                    </Discreption>
                    <Button>Read More</Button>
                </Wrapper>
            </AboutLeft>
            <AboutRight>
                <Image src={img} title={"picture"}/>
            </AboutRight>
        </Container>
    );
};

export default About;