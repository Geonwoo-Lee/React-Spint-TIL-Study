import React, { useState } from 'react';
import styled from 'styled-components';

//const 스타일컴포넌트이름 = styled.태그명`여기에스타일지정'

export const ModalBackdrop = styled.div`
  position: fixed;
  /* z-index를 사용해서 레이아웃을 최상위로 올린다. */
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  /* display : grid를 사용해서 수평으로 맞춘다음
    place-items : center 로 가운데 정렬로 만드는방법
   */
  display : grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 300px;
    height: 100px;
    /* 
    ClassName이 일치하는 태그들의 스타일링을 바꿔준다.
     */
    >div.close-btn{
      margin : 10px;
      cursor : grab;
    }
    >div.str{
      margin : 20px;
    }
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ModalContainer onClick={openModalHandler}>
        <ModalBtn onClick={openModalHandler}>
        // JSX문법을 사용해야 하므로 삼항연산자를 사용함
          {isOpen === false ? 'Open Modal' : 'Opened!'}
        </ModalBtn>
        
        {isOpen === true ? <ModalBackdrop onClick={openModalHandler}>
          <ModalView>
          
            <div className='close-btn' onClick={openModalHandler}>X</div>
            <div className='str'>HELLO CODESTATES!</div>
          </ModalView>
        </ModalBackdrop> : null}
      </ModalContainer>
    </>
  );
};