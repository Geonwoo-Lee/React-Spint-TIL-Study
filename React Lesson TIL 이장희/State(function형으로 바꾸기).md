## State (function형식)
전에 클레스 형으로 로직을 짠 코드를 이번엔 함수형으로 변경해 보았습니다! 확실히 클래스보다 함수형 프로그래밍이 좀 더 간결하고 편하다는 것을 알수 있습니다!!! 함수형 프로그래밍 많이 애용합시다!

```js
import React, { useState } from 'react'

function Count(){

  let [count, setCount] = useState(0)


  let handleIncrement = () => {
    setCount(count+1)
  }

  let handleDecrement = () => {
    setCount(count < 1? 0:count-1)
  }

  return (
    <li>
    <span>count</span>
    <span>{count}</span>
    <button onClick={handleIncrement}>
        <i className="fas fa-plus-square">증가</i>
    </button>
    <button onClick={handleDecrement}>
        <i className="fas fa-minus-square">감소</i>
    </button>
    </li>
     )
}

export default Count
```