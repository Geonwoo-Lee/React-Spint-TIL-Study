import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import myImg from './image/myImg.jpeg'

export const CardItem = memo(() => {
  return (
    <Card>
      
      <Front>
        <BankName>Frontend Developer</BankName>
        <img src= {myImg} className = 'img' alt="profile"/>
        <CardName>이 건우</CardName>
        <CardNumber>안녕하세요 저는 프론트엔드 개발자를 꿈꾸고 있는 이건우라고 합니다.<br/> 제 포트폴리오의 시작은 제 명함을 전해드리며 시작하겠습니다 감사합니다</CardNumber>
        <CardHolder>010-3994-1884</CardHolder>
      </Front>
    </Card>
  );
});

const leftAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80%{
        transform: translateX(1rem);
    }

    100%{
        opacity: 1;
        transform: translateX(0);
    }
`


const commonFrontAndBackStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  background: linear-gradient(45deg, #fff 30%, #A0EAF2 150%);
  transition: 0.5s;
  opacity: 70%;
  cursor: pointer;
  animation: ${leftAnimation} 2s ;
`;

const Front = styled.div`
  ${commonFrontAndBackStyle};
  > .img{
  position: absolute;
  top: 50px;
  left: 30px;
  height: 90px;
  }
`;

const Card = styled.div`
  position: relative;
  width: 500px;
  height: 314px;
  margin:0;
  top: 200px;
  left: 300px;
  & :hover{
    opacity: 100%;
  }

`;

const CardName = styled.h3`
  position: absolute;
  margin-top: 150px;
  margin-left: 30px;
  color: black;
  font-weight: 500;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

const BankName = styled.h3`
  margin: 0;
  position: absolute;
  right: 40px;
  top: 24px;
  color: black;
  font-weight: 500;
  font-style: italic;
  font-size: 24px;
`;


const CardNumber = styled.h3`
  position: absolute;
  margin-left: 20px;
  margin-top: 180px;
  font-weight: 500;
  color: black;
  font-size: 15px;
`;

const CardHolder = styled.h5`
  margin: 0;
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: black;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
