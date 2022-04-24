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
    `;

    const Card = styled.div`
      width: 350px;
      min-height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      border: 5px solid #98d5c4;
      border-radius: 10px;
    `;

    const Image = styled.img`
      width: 200px;
      height: 200px;
    `;

    const Title = styled.p`
      margin-top: 30px!important;
      letter-spacing: 0.7px;
    `;

    return (
        <Container>
            <Card>
                <Image src={img1} title={"computer"} style={{width:"250px"}}/>
                <Title>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur, culpa, natus! Blanditiis commodi eveniet facilis
                    impedit magnam omnis, praesentium vero?
                </Title>
            </Card>
            <Card>
                <Image src={img2} title={"laptop"}/>
                <Title>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur, culpa, natus! Blanditiis commodi eveniet facilis
                    impedit magnam omnis, praesentium vero?
                </Title>
            </Card>
            <Card style={{}}>
                <Image src={img3} title={"phone"}/>
                <Title>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur, culpa, natus! Blanditiis commodi eveniet facilis
                    impedit magnam omnis, praesentium vero?
                </Title>
            </Card>
        </Container>
    );
};

export default ThreeCards;