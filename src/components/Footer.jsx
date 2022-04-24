import React from 'react';
import styled from "styled-components";
import Logo from "./Logo";
import {LinkedIn, Telegram, Instagram, Twitter, Copyright} from '@mui/icons-material';
import {Link} from "react-router-dom";

const Footer = () => {
    const Container = styled.div`
      width: 100vw;
      height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0px auto !important;
      background-color: #252527;
    `;
    const Wrapper = styled.div`
      display: flex;
      align-items: center;
      min-width: 95%;
      min-height: 80%;
      background-color: #252527;
      position: relative;
      
      &::before{
        display: block;
        clear: both;
        width: 100%;
        height: 2px;
        border: 1px solid grey;
        position: absolute;
        bottom: 20px;
      }
    `;

    const Section = styled.div`
      flex: 1;
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column; 
      background-color:#252527;
      position: relative;
    `;

    const LogoWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: left;
    `;

    const WrapperIcons = styled.span`
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 60px!important;
      cursor: pointer;
    `;
    const IconWrapper = styled.span`
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      border-radius: 50%;
      background-color: #fff;
    `;

    const SectionWrapper = styled.span`
      display: flex;
      justify-content: left;
      flex-direction: column;
    `;

    const Title = styled.a`
      display: block;
      text-align: justify;
      font-size: 28px;
      font-weight: 600;
      color: white;
      letter-spacing: 1.1px;
      margin-bottom: 10px!important;
      cursor: pointer;
    `;

    const Description = styled.p`
      display: block;
      width: ${props => props.width};
      font-size: 14px;
      text-align: justify;
      color: white;
      letter-spacing: 0.7px;
    `;

    const LetterTitle = styled.h3`
      display: block;
      margin-bottom: 10px!important;
      text-align: left;
      font-size: 28px;
      font-weight: 800;
      letter-spacing: 1.1px;
      color: #fff;
    `;

    const Input = styled.input`
      width: 200px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid #61dafb;
      
      &:focus{
        outline: none;
      }
      &::placeholder{
        padding: 5px 10px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1.1px;
        color: gray;
      }
    `;

    const Button = styled.button`
      width: 120px;
      height: 40px;
      margin-top: 10px!important;
      padding: 5px 8px;
      background-color: lime; 
      border: 1px solid green;
      border-radius: 10px;
      color: white;
      font-weight: 700;
      letter-spacing: 1.1px;
      cursor: pointer;
      transition: all ease 0.7s;
      
      &:focus{
        transform: scale(0.9);
      }
    `;

    const AnnounceMessage = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px!important;
      border-top: 2px solid white;
      color: #fff;
      width: 95%;
      height: 40px;
    `;

    return (
        <Container>
            <Wrapper>
                <Section>
                    <LogoWrapper>
                        <Logo color={"white"}/>
                    </LogoWrapper>

                    <WrapperIcons>
                        <IconWrapper>
                            <Telegram />
                        </IconWrapper>
                        <IconWrapper>
                            <LinkedIn />
                        </IconWrapper>
                        <IconWrapper>
                            <Instagram />
                        </IconWrapper>
                        <IconWrapper>
                            <Twitter />
                        </IconWrapper>
                    </WrapperIcons>
                </Section>
                <Section>
                    <SectionWrapper>
                        <Title>
                            <Link to="/about" style={{textDecoration:"none",color:"#fff"}}>
                                About Us
                            </Link>
                        </Title>
                        <Description width={"200px"}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Sed, tempora.
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Ducimus iste modi
                            mollitia, nisi rerum soluta!
                        </Description>
                    </SectionWrapper>
                </Section>
                <Section>
                    <SectionWrapper>
                        <Title>
                            <Link to="/contact" style={{textDecoration:"none",color:"#fff"}}>
                                Contact Us
                            </Link>
                        </Title>
                        <Description width={"100px"}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Ducimus iste modi
                            mollitia, nisi rerum soluta!
                        </Description>
                    </SectionWrapper>
                </Section>
                <Section>
                    <SectionWrapper>
                        <LetterTitle>NewLetter</LetterTitle>
                        <Input type={"email"} placeholder={"Enter your email"}/>
                        <Button>Submit</Button>
                    </SectionWrapper>
                </Section>
            </Wrapper>
            <AnnounceMessage>
                <Copyright />  {new Date().getFullYear()}. This Project belongs to Tokhir Asadov
            </AnnounceMessage>
        </Container>
    );
};

export default Footer;