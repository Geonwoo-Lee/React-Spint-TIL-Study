### Side Effect(부수 효과)
함수 내에서 어떠한 구현이 함수 외부에 영향을 끼치는 경우 해당 함수는 Side Effect가 있다고 합니다.

### 예시

```
let foo = 'hello'

function bar(){
    foo = 'world'
}
bar(); <-- bar는 Side Effect를 발생 시킵니다.
```

전역 변수인 foo가 있습니다. foo는 문자열 hello가 선언되어 있는 상태입니다.
하지만 bar()함수가 실행이 되면 foo는
'hello'가 아닌 'world'로 재할당 됩니다.
이처럼 함수 내에서 재할당으로 영향을 끼치기 때문에 Side Effect가 발생이 되었다고 말 할수 있습니다.


### Pure Function(순수 함수)
순수 함수란, 오직 함수의 입력만이 함수의 결과에 영향을 주는 함수를 의미 합니다. 함수의 입력이 아닌 다른 값이 함수의 결과에 영향을 미치는 경우 순수 함수라고 부를 수 없습니다.
순수 함수는 입력으로 전달된 값을 수정하지 않습니다.


### 예시

```
function upper(str){
    return str.toUpperCase()
}
upper('hello') <-- 'HELLO'
```

upper라는 함수 안에 toUpperCase 메소드는 원본을 수정하지 않는 
Immutalble한 데이터기 때문에 순수함수라고 부를수 있습니다.
한 마디로 원본을 수정하지 않는 메소드는 순수함수라 칭할 수 있고
원본을 수정하는 Math.random()처럼
값이 랜덤으로 바뀌는 함수는 순수 함수라고 부를 수 없습니다.
