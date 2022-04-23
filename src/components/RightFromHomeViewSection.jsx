import React from 'react';
import styled from "styled-components";
import img1 from "../utill/images/home/1.png"
import img2 from "../utill/images/home/2.png"
import img3 from "../utill/images/home/3.png"
import img4 from "../utill/images/home/4.png"
import img5 from "../utill/images/home/5.png"
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

const RightFromHomeViewSection = () => {

    const images = [img1,img2,img3,img4,img5];

    const Container = styled.div`
      flex: 1;
      padding: 20px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const Wrapper = styled.span`
      width: 500px;
      height: 500px;
      overflow: hidden;
      margin-top: 50px;
    `;

    const Card = styled.div` 
      min-height: 25rem;
      border-radius: 2rem;
      overflow: hidden;
      
      img{
        width: 500px;
        height: 400px;
      }
    `;

    return (
        <Container>
            <Wrapper>
                <Splide options={{
                    perPage: 1,
                    // arrows: false,
                    drag: 'free',

                }}>
                    {
                        images.map((recipe) => {
                            return (
                                <SplideSlide style={{}}>
                                    <Card>
                                        <img src={recipe} title={"picture"}/>
                                    </Card>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </Wrapper>
        </Container>
    );
};

export default RightFromHomeViewSection;