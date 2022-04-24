import React from 'react';
import styled from "styled-components";
import img1 from "./../utill/images/products/claviatura1.png"
import img2 from "./../utill/images/products/mouse.png"
import img3 from "./../utill/images/products/camera.png"
import img4 from "./../utill/images/products/speakers.png"
import img5 from "./../utill/images/products/modem.png"
import img6 from "./../utill/images/products/harddisk.png"
import img7 from "./../utill/images/products/ram.png"
import img8 from "./../utill/images/products/bettery.png"
import img9 from "./../utill/images/products/drive.png"

const Products = (props) => {
    const Container = styled.div`
      width: 100vw;
      padding: 40px 60px;
      box-sizing: border-box;
      margin-top: ${props.marginTop}!important;
      background-color: #f7f7f7;
    `;
    const Wrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `;
    const Title = styled.h2`
      display: block;
      border-bottom: 2px solid #61dafb;
      margin: 30px auto 30px!important;
      font-weight: 700;
      font-size: 44px;
      text-transform: uppercase;
      letter-spacing: 1.2px;
    `;

    const WrapperProducts = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 40px 60px;
      background-color: #fff;
    `;

    const Row = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;

    const Card = styled.div`
      flex: 1;
      width: 300px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: #f8f8f8;
    `;

    const Image = styled.img`
      width: 150px;
      height: 150px;
      display: block;
    `;

    const Button = styled.button`
      width: 150px;
      height: 30px;
      margin-top: 20px!important;
      background-color: #000;
      border: none;
      font-size: 12px;
      text-transform: capitalize;
      letter-spacing: 0.8px;
      color: #fff;
      cursor: pointer;
      transition: all ease 0.4s; 


      &:focus{
        transform: scale(0.9);
      }
    `;

    const ButtonSeeMore = styled.button`
      width: 120px;
      height: 50px;
      margin-top: 20px !important;
      background-color: #fff;
      border: 2px solid #91d5b8;
      font-size: 12px;
      text-transform: capitalize;
      letter-spacing: 0.8px;
      color: #91d5b8;
      cursor: pointer;
      transition: all ease 0.4s;


      &:focus {
        transform: scale(0.9);
      }
    `;

    return (
        <Container>
            <Wrapper>
                <Title>our products</Title>
                <WrapperProducts>
                    <Row>
                        <Card>
                            <Image src={img1} title={"klaviatura"}/>
                            <Button>Klaviatura</Button>
                        </Card>
                        <Card>
                            <Image src={img2} title={"mouse"}/>
                            <Button>mouse</Button>
                        </Card>
                        <Card>
                            <Image src={img3} title={"camera"}/>
                            <Button>camera</Button>
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <Image src={img4} title={"speakers"}/>
                            <Button>speakers</Button>
                        </Card>
                        <Card>
                            <Image src={img5} title={"modem"}/>
                            <Button>modem</Button>
                        </Card>
                        <Card>
                            <Image src={img6} title={"hardisk"}/>
                            <Button>harddisk</Button>
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <Image src={img7} title={"ram"}/>
                            <Button>rams</Button>
                        </Card>
                        <Card>
                            <Image src={img8} title={"bettery"}/>
                            <Button>bettery</Button>
                        </Card>
                        <Card>
                            <Image src={img9} title={"drive"}/>
                            <Button>drive</Button>
                        </Card>
                    </Row>
                    <ButtonSeeMore>See More</ButtonSeeMore>
                </WrapperProducts>
            </Wrapper>
            
        </Container>
    );
};

export default Products;