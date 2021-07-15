# 반복문 정리

---

## for문

for문은 초기값, 조건문, 증감문 구조를 가진 기본적인 반복문 입니다.

```js
//for문
let arr = [5,2,1,3]

for(let i =0; i < arr.length; i++){
    console.log(arr[i])
}
// 5,2,1,3
```

## forEach문

foreach구문의 인자로 callback함수를 등록할수 있고, 배열의 각 요소들이 반복될 떄 이 callback 함수가 호출됩니다. callback 함수에서 배열요소의 인덱스와 값에 접근할수 있습니다

```js
// #1 forEach문
let arr1 = ['가','나','다','라']
arr1.forEach((el)=>console.log(el))
// 가, 나, 다, 라

// #2 forEach문 
copy = []
arr = [4,2,1,3]
arr.forEach((el)=>copy.push(el))
// 4, 2, 1, 3
```

## for in

for in은 통상 오브잭트 자료형에 저장된 자료들을 하나씩 꺼낼때 사용합니다. 또한 열거형 속성이라면 어떤 자료든 추출이 가능합니다. 열거형 속성이랑 키와 키값으로 이뤄진 자료형을 말합니다. 배열도 인덱스와 요소값으로 이뤄진 열거형 속성입니다! 그래서 배열도 for in을 사용할수 있습니다. 다만 열거형이 확실한 오브잭트에 통상적으로 for in을 활용합니다.

```js
// for in
let obj = {name:'joycoding', age:30, hobby:'coding'}

for(let key in obj){
    console.log(obj[key])
}
// "joycoding", 30, "coding"
// 추가적으로 obj.hasOwnProperty(key)를 활용해서
// 오브잭트의 키값이 있는지 없는지 확인 해주는 함수가 있습니다.
```

## for of

for of는 for in 반복문과 매우 유사합니다. 다만 iterable인 자료형만 적용가능한 반복문입니다. 배열이나 문자열 처럼 index의 연속성이 있는 경우 for of를 사용합니다.

```js
// #1. for of 배열
let arr = [4,3,2,1]

for(let el of arr){
    console.log(el)
}
// 4, 3, 2, 1

// #2. for of 문자열
let str = 'hello'

for(let el of str){
    console.log(el)
}
// h, e, l, l, o
```

## for in과 for of 차이점

for in 반복문 : 객체의 모든 열거 가능한 속성(property)에 대한 반복  
for of 반복문 : [Symbol.iterator] 속성을 가지는 컬렉션 전용  

```js
//for in,of 차이
let obj = {
    a:1,
    b:2,
    c:3
}

for(let key in obj){
    console.log(key)
}
//a, b, c

for(let key of obj){
    console.log(key)
}
//Uncaught TypeError: obj is not iterable
```

---

## Spread Operator

---

Spread Operator는 자바스크립트에서 추가된 ES6 신문법입니다. 사용법은 ... 점 3개 찍으면 그게 Spread Operator문법입니다. 정말 쉽게 설명하자면 이문법은 **괄호를 제거하는 연산자**입니다.

```js
let arr = ['안뇽',"띠모",123]
console.log(arr)    //['안뇽',"띠모",123]
console.log(...arr) // '안뇽',"띠모",123
```

Spread Operator는 문자열에서도 활용 가능합니다. 출력하면 글자마다 띄어쓰기가 적용되는데 ['띠','띠','모'] 이런식으로 대괄호를 제거해준다 라고 이해하면 됩니다.

```js
let str = '띠띠모'
console.log(str)    // 띠띠모
console.log(...str) // 띠 띠 모
```

## Spread Operator 활용
Spread Operator문법은 배열이나 객체를 합치거나 복사에 자주 쓰이는 문법입니다! 너무 유용하고 꼭 알아야 할 필수 개념중 하나입니다.

```js
//배열합치기
let a = ['코딩은']
let b = ['즐겁당']
let c = [...a,...b] // ['코딩은','즐겁당']

//객체합치기
let a = {a:1,b:2};
let b = {c:3,...a}
console.log(b) // {c: 3, a: 1, b: 2}
```

만약 객체에서 키값이 중복되면 어떻게 될까요? 무조건!!! 뒤에 오는 스프레드 문법이 이깁니다.

```js
let a = {a:1,b:2};
let b = {a:3,...a}
consoloe.log(b) // {a:1,b:2}
```

## Spread Operator 주의 사항!!!
예를 들어 어떤 a에 있는 배열을 b배열에 복사하고 싶을때 b = a 이런식으로 할 경우가 있습니다. 이것은 아주 위험합니다!!! 눈으로 보기에는 값이 복사된것 처럼 보이지만 a변수와 b변수는 **값을 공유**하게 됩니다. 그래서 a의 값을 바꾸면 b의 값도 바뀌는 현상이 나타납니다.

```js
let a = ["띠모","코코"]
let b = a

a[1] = "뚜뚜"
console.log(a) // ["띠모","뚜뚜"]
console.log(b) // ["띠모","뚜뚜"]
```

Spread Operator문법을 활용하면 이러한 문제를 쉽게 해결 할 수 있습니다! 또한 리엑트에서 상태 관리할때 많이 사용하는 이유중 하나입니다.

```js
let a = ["띠모","코코"]
let b = [...a]

a[1] = "뚜뚜"
console.log(a) // ["띠모","뚜뚜"]
console.log(b) // ["띠모","코코"]
```

이렇게 하면 아까 처럼 a변수와 b변수의 값 공유가 일어나지 않습니다!