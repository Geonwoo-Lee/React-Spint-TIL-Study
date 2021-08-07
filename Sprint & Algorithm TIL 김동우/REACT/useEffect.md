### useEffect
컴포넌트 내에서 Side Effect를 실행 할 수 있게 하는 Hook 입니다.

### 예시
```
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  const handleCountUp = () => setCount(count + 1);
  const handleCountDown = () => setCount(count - 1)
  useEffect(() => {
    console.log("렌더링이 되었습니다!");
    console.log({ count });
  },[]);

  return (
    <div className="background">
      <p> 카운트 : {count}</p>
      <button onClick={handleCountUp}>카운트업</button>
      <button onClick={handleCountDown}>카운트다운</button>
      
    </div>
  );
}


```
### 예시 설명
useEffect에 두 번째 인자의 빈 배열일 경우에 맨 처음 실행이 될 때만 렌더링이 되는 경우라
콘솔로그 에서는 딱 한번 렌더링이 되었습니다 와 count 수만 찍힙니다.
하지만 아무것도 넣지 않았을 때에는 카운트업,카운트다운 버튼을 누를 때마다 콘솔로그에서 계속 찍히는 것을 볼 수가 있습니다.


### 언제 실행 되나요??
![useEffect](./img/useEffect.png)
- 컴포넌트 생성 후 처음 화면에 렌더링
- 컴포넌트에 새로운 props가 전달되며 렌더링
- 컴포넌트에 상태(state)가 바뀌며 렌더링
이와 같이 매 번 새롭게 컴포넌트가 렌더링될 때 Effect Hook이 실행됩니다.

#### Hook을 쓸 때 주의할 점
- 최상위에서만 Hook을 호출합니다.
- React 함수 내에서 Hook을 호출합니다.

#### 조건부 effect 발생 (dependency array)

useEffect의 두 번째 인자는 배열 입니다.
이 배열은 조건을 담고 있습니다. 여기서 조건이라는 것은 boolean 타입이 아닌 어떤 값의 변경이 일어 날 때 를 의미 합니다. 해당 배열에는 어떤 값의 목록이 들어갑니다.
이 배열은 종속성 배열이라고 합니다.

#### 단 한번만 실행되는 Effect 함수
만일 종속성 목록에 아무런 종속성도 없다면 무슨일이 발생 할까요?
즉, 두번 째 배열을 빈배열로 둘 경우입니다.

#### 1. 빈 배열 넣기
useEffect(함수, [])
빈 배열을 useEffect의 두 번째 인자로 사용하면, 이 때에는 컴포넌트가 처음 생성될 때만 effect 함수가 실행 됩니다.
대표적으로 처음 단 한번, 외부 API를 통해 리소스를 받아오고
더이상 API호출이 필요 하지 않을 때에 사용할 수 있습니다.

#### 2. 아무것도 넣지 않기(기본 형태)
useEffect(함수)
기본 형태의 useEffect는 컴포넌트가 처음 생성되거나, props가 업데이트 되거나 상태(state)가 업데이트 될 때 effect 함수가 실행 됩니다. 
