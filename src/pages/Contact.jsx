import React from 'react';
import styled from "styled-components";

const Contact = (props) => {
    const Container = styled.div`
      width: 100vw; 
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: /*60px*/${props.marginTop}!important;
      padding: 40px 0;
      background-color: #48449A;
    `;

    const Title = styled.h2`
      display: block;
      border-bottom: 2px solid #fff;
      margin: 0px auto 20px!important;
      font-weight: 700;
      font-size: 32px;
      text-transform: uppercase;
      letter-spacing: 1.1px;
      color: #fff;
    `;

    const Form = styled.form`
      width: 50%;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 20px 60px;
      border: 1px solid #fff;
    `;

    const Input = styled.input`
      width: 95%;
      height: 30px;
      background-color: transparent;
      border: 1px solid #fff;
      margin-bottom: 20px!important;
      
      &::placeholder{
        padding: 5px 10px;
        font-size: 12px;
        letter-spacing: 0.5px;
      }
      &:focus{
        outline: none;
      }
    `;

    const TextArea = styled.textarea`
      width: 95%;
      height: 90px;
      background-color: transparent;
      border: 1px solid #fff;
      margin-bottom: 20px!important;

      &::placeholder{
        padding: 5px 10px;
        font-size: 12px;
        letter-spacing: 0.5px;
      }
      &:focus{
        outline: none;
      }
    `;

    const Button = styled.button`
      width: 130px;
      height: 50px;
      margin-top: 20px!important;
      background-color: #47CA94;
      border-radius: 30px;
      border: none;
      font-size: 18px;
      text-transform: capitalize;
      letter-spacing: 0.8px;
      color: #fff;
      cursor: pointer;
      transition: all ease 0.4s; 


      &:focus{
        transform: scale(0.9);
      }
    `;

    return (
        <Container>
            <Title>Contact Now</Title>
            <Form>
                <Input type={"text"} placeholder={"Name"}/>
                <Input type={"email"} placeholder={"Email"}/>
                <Input type={"text"} placeholder={"Phone Number"}/>
                <TextArea placeholder={"Message"}/>
                <Button>Send</Button>
            </Form>
        </Container>
    );
};

export default Contact;