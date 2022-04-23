import React from 'react';
import styled from "styled-components";



const Logo = (props) => {

    const Container = styled.div`
      flex: 1;
    `;

    const Wrapper = styled.div`
      width: 40px;
      height: 40px;
      border: 4px solid ${props.color};
      padding: 3px;
      border-radius: 50%;
      margin-left: 100px!important;
      cursor: pointer;
    `;

    const Logo = styled.a`
      min-width: 100%;
      letter-spacing: 1.1px;
      font-weight: bold;
      color: #fff;
    `

    return (
        <Container>
            <Wrapper>
                <Logo>
                    CLA
                </Logo>
            </Wrapper>
        </Container>
    );
};

export default Logo;