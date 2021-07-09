import React, { useState } from "react";
import styled, { css } from "styled-components";
// npm 또는 yarn을 사용하여 스타일컴포넌트를 설치를 한 후에는
// import를 작성해서 설치된 스타일컴포넌트를 불러와야 한다.

// 컴포넌트를 생성 할 때의 문법은 아래와 같습니다.
// 스타일 컴포넌트를 작성을 할 때 벡틱으로 감싸주어야 하며
// 함수 작성을 하는것처럼 꼭 닫아주고 그 안에서 css의 문법을 사용해야 한다.
// let 태그이름 = styled.태그`
    // color : black;
// `

const BlackFont = css`  color: black;
`;

const Button = styled.button`
  padding: 6px 12px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #74b9ff;
  :hover {
    background-color: #99c6f5;
  }
`;
//기존의 button컴포넌트를 상속받아 재사용 할 수 있습니다.
//위에서 만들어진 button의 css를 모두 가져와 사용을 할 수있습니다.
//다만 재사용을 위해 만들어진 컴포넌트이므로 중복된 값을 제외한 나머지값을
//적용이 가능하게끔 재활용을 한다고 생각하면 된다.
// const 컴포넌트이름 = styled(상속할 컴포넌트 이름)
const RedButton = styled(Button)`
  background-color: #f53e3e;
  :hover {
    background-color: #ff7268;
  }

//props를 사용하여 RedButton이 클릭이 될 때마다 
//버튼안에 있는 글자색을 바꿀수가 있다.
//클릭이 될 때 검은색으로 변하고 다시한번 클릭을 하면 
//초기값을 돌아오게 useState를 사용해서 변할 때 마다 값을 바꾸어 줄 수 있다.
  ${(props) => (props.clicked ? BlackFont : "")}
`;

function App() {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Button>click</Button>
      <RedButton clicked={clicked} onClick={onClick}>
        click
      </RedButton>
    </>
  );
}

export default App;
