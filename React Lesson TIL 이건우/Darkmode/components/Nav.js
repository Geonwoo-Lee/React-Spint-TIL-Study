import React, { useState } from 'react';
import styled from 'styled-components';

const TabMenu = styled.ul`
  
  color:  #A3DCEF;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 3rem;

  .submenu {
    width: 100%;
    padding: 15px 10px;
    cursor: pointer;
  }

  .focused {
    background-color: black;
    color: #fff;
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
margin-top: 0%;
margin-bottom: 70px;
  text-align: center;
  color: #C3B2AF;
`; 

export const Nav = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'Wellcome', content: 'Wellcome!' },
    { name: 'to Mysite', content: 'This is my site ! ' },
    { name: 'Imformation', content: '이건 제가 손수 제작해본 사이트입니다 이번에 배운 스타일 컴포넌트를 이용하여 이런저런 기능을 추가 하고 디자인 해보았습니다 부족하지만 잘 봐주셨으면 좋겠습니다' }
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <TabMenu className='navbar'>
          {menuArr.map((ele, index) => {
            return (
              <li
                key={index}
                className={currentTab === index ? 'navbar focused' : 'navbar'}
                onClick={() => selectMenuHandler(index)}
              >
                {ele.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};