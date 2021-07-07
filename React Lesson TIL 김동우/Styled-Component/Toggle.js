import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
    position: relative;
    margin-top: 8rem;
    left: 47%;
    cursor: pointer;

    > .toggle-container {
        width: 50px;
        height: 24px;
        border-radius: 30px;
        background-color: #8b8b8b;
        transition: all .2s ease;

        &.toggle--checked {
            background-color: #4000c7;
        }
    }

    > .toggle-circle {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #fafafa;
        transition: all .25s ease;

        &.toggle--checked {
            left: 27px;
        }
    }
`;

const Desc = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        {/* 
        toggle-container true 일 때 toggle--checked 클래스가 추가가 되고 false면 빈 문자열로 클래스가 없는 형태로 변환이 된다.

        즉, true 일때 claassName = toggle-container toggle--checked 로 주어지게 된다.
        
        */}
        <div className={`toggle-container ${isOn ? 'toggle--checked' : ''}`} />
        <div className={`toggle-circle ${isOn ? 'toggle--checked' : ''}`} />
      </ToggleContainer>
      {isOn ? <Desc>Toggle Switch ON</Desc> : <Desc>Toggle Switch OFF</Desc>}
    </>
  );
};