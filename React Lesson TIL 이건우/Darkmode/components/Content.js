import React, {useState} from 'react'
import styled from 'styled-components'


export const ModalContainer = styled.div`
height: 15rem;
text-align: center;
margin: 120px auto;
`;

export const ModalBackdrop = styled.div`
 position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

export const ModalBtn = styled.button`
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
    width: 500px;
    height: 200px;
   
 > div.close_btn{
   margin-top: 5px;
   cursor: pointer;
   color: #FF4C2E;
}

> div.abc{
  margin-top: 25px;
  color: #121212;
  font-family:'Roboto', sans-serif ;
}
`;



export const Content = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => { 
    setIsOpen(!isOpen)
  };


    return (
        <div>
            <h1>Hi there I'm ganna making dark mode to use Styled Components</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru</p>
            <ModalContainer onClick = {openModalHandler} >
              <ModalBtn onClick = {openModalHandler}
              className = 'btn-primary'>
              {isOpen === false ? 'Read more' : 'Closed'}
             </ModalBtn>
             {isOpen === true ? <ModalBackdrop>
                <ModalView>
                 <div className = 'close_btn' onClick = {openModalHandler}>X</div>
                 <div className = 'abc'>
                 <h2> Hi there ! Wellcome to mysite </h2>
                 <div>
                 do consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                 </div>
                 </div>
               </ModalView>
          </ModalBackdrop> : null}
    
      </ModalContainer>
        </div>
    )
}
