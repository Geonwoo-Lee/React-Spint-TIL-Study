### 상태 끌어올리기
단방향 데이터 흐름이라는 원칙에 따라서 하위 컴포넌트는 
상위 컴포넌트로 전달 받은 데이터의 형태, 타입이 무엇인지만 알 수 있고 데이터가 state, 하드코딩으로 입력된 내용인지도 알지 못합니다.

그러므로 하위 컴포넌트에서의 어떤 이벤트로 인해 상위 컴포넌트의 상태가 바뀌는 것은 마치 역방향 데이터 흐름으로 들릴 수 있습니다. 

#### 상태 끌어올리기 라는 것은 상위 컴포넌트의 상태를 변경 하는 함수 그 자체를 하위 컴포넌트로 전달하고, 이 함수를 하위 컴포넌트가 실행한다. 라는 뜻입니다.

#### 예시 

```
import React, { useState } from "react";

//부모 컴포넌트
export default function ParentComponent() {
  const [value, setValue] = useState("날 바꿔줘!");

  const handleChangeValue = () => {
    setValue("보여줄게 완전히 달라진 값");
  };

  return (
    <div>
      <div>값은 {value} 입니다</div>
      <ChildComponent handleChangeValue1={handleChangeValue} />
    </div>
  );
}

//자식 컴포넌트
function ChildComponent({ handleChangeValue1 }) {
  const handleClick = () => {
    // 이 버튼을 눌러서 부모의 상태를 바꿀 순 없을까?
    handleChangeValue1();
  };

  return <button onClick={handleClick}>값 변경</button>;
}

```
부모컴포넌트(ParentComponent) ,자식컴포넌트(ChildComponent)가 있습니다.
부모 컴포넌트에서는 상태를 변경할 수 있는 함수
handleChangeValue가 있다. 리턴하는 부분에서
자식 컴포넌트로 handleChangeValue(상태변경함수)를 props로 전달 합니다.
자식컴포넌트안에 handleClick 이라는 이벤트 핸들러에 추가해서 부모컴포넌트에 있는 state를 변경하는 것 입니다.

이런식으로 구현을 하게 되면 단방향 데이터 흐름 원칙에 어긋나지도 않으며 문제를 해결 할 수 있는데 이것이
상태 끌어 올리기 입니다.