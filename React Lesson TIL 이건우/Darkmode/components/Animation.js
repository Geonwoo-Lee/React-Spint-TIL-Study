import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import { lightTheme } from '../styles/globalStyles'

export const TextTyping = memo(() => {
  const text = 'This is My website';

  return (
    <TypingAnimation data-text={text} textLength={text.length}>
      {text}
    </TypingAnimation>
  );
});

const animation = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

const TypingAnimation = styled.h2`
  margin-right: 90%;
  position: absolute;
  top: 40%;
  text-transform: uppercase;
  text-align: center;
  font-family: consolas;
  letter-spacing: 5px;
  color: transparent;
  white-space: nowrap;
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme === lightTheme ? '#121212' : '#fff'};
    overflow: hidden;
    border-right: 1px solid white;
    animation: ${animation} 8s steps(${(props) => props.textLength}) infinite;
    text-align: center;
  }
`;