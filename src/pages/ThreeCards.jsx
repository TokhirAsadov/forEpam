import React from 'react';
import styled from "styled-components";
import img1 from "./../utill/images/CompyuterLaptopAndPhone/2.1.png"
import img2 from "./../utill/images/CompyuterLaptopAndPhone/2.2.png"
import img3 from "./../utill/images/CompyuterLaptopAndPhone/2.3.png"

const ThreeCards = () => {
    const Container = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80vw;
      height: 60vh;
      margin: 80px auto 20px!important;
      padding: 10px 40px;
      background-color: rgba(0,0,0,0.5);
    `;

    const Card = styled.div`
      width: 350px;
      min-height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      border: 2.5px solid #000;
      border-radius: 10px;
      
      img{
        width: 200px;
        height: 200px;
      }
    `;

    return (
        <Container>
            <Card>
                <img src={img1} title={"computer"} style={{width:"250px"}}/>
            </Card>
            <Card>
                <img src={img2} title={"laptop"}/>
            </Card>
            <Card style={{}}>
                <img src={img3} title={"phone"}/>
            </Card>
        </Container>
    );
};

export default ThreeCards;