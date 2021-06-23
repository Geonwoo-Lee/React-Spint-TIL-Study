# 문제 설명

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다. <br />
별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

<br />

# 제한 조건

n과 m은 각각 1000 이하인 자연수입니다.

# 예시

**입력**

```
5 3
```

**출력**

```
*****
*****
*****
```

<br />

# 문제 풀이

 a는 가로길이, b는 세로길이기 때문에 간단하게 2중 반복문을 사용해서 풀었습니다.  
 손코딩으로 식을 대입해서 풀이하자면 (a의 길이는 5, b의 길이는 3일때)

 
b = 0 일때 j는 a의 길이만 큼 순회 합니다.
a = *
a = **
a = ***
a = ****
a = *****  

b = 1일때 마찬가지로 j는 a의 길이만 큼 순회 합니다.
a = *
a = **
a = ***
a = ****
a = *****  

b = 2일때도 j는 a의 길이만 큼 순회 합니다.
a = *
a = **
a = ***
a = ****
a = *****  

최종적으로 아래와 같이 출력하게 됩니다.
b = 0일때  *****  
b = 1일때  *****  
b = 2일때  *****  

## Javascript

```js
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
 
 
    for(let i=0; i<b; i++){
        let str = "";
        for(let j=0; j<a; j++){
            str = str + "*"
        }
        console.log(str)
    }
});

```

# 동기적 처리와 비동기적 처리
이번에 배운 동기적 처리와 비동기적 처리에 대해 학습하였습니다. 나중에 서버 api를 받아올때  
프로미스를 사용하여 api를 처리하는 경우가 있기때문에 비동기적 처리가 무엇인지 알고 넘어 갑시다!!

## 1. 동기적 처리
순차적으로 작동하는 형태를 동기식 처리라고 합니다.
```jsx
console.log('동기식 처리')
console.log(1)
console.log(2)
console.log(3)
```

## 2. 비동기적 처리
오래 걸리는 작업이 있으면 잠시 제껴두고 다른거 부터 처리하는 방식을 비동기식 처리라고 합니다.  
즉 실행이 오래 걸리는 코드는 잠깐 대기실에 두고, 실행이 바로가능한 코드부터 처리합니다.

```jsx
console.log('비동기식 처리')
console.log(1)
setTimeout(()=>{console.log(2)},1000);  // 비동기 처리 함수
console.log(3)
```
추가적으로 ajax(), EventListener, setTimeout()등은 대표적인 비동기식 처리 함수입니다.

## 3. 콜백함수
함수안에 함수가 들어 간것이 콜백합수입니다.

```jsx
function firstFunc(callback){
  callback() // 내가 원하는 위치에 출력 가능
  console.log(1)
  //callback()  위치를 바꿔서 출력하면 결과값도 달라집니다.   
}

function secondFunc(){
  console.log('콜백함수')
}

function thirdFunc(){
  console.log('나도 콜백함수')
}

firstFunc(secondFunc)  // 콜백함수 , 1
firstFunc(thirdFunc)   // 나도 콜백함수, 1
```

## 4. 콜백지옥
아래 있는 코드는 소위 콜백지옥이라고 부릅니다. 콜백지옥은 순차적으로 실행하려고 콜백함수를  
여러개 사용합니다. 그래서 가독성이 안좋고 코드가 옆으로 길어져 많이 복잡해집니다.
그래서 우리는 이러한 문제를 해소하기 위해 promise를 사용하게 됩니다!

```jsx
function func1(callback){
  console.log(1)
  callback()
}

function func2(callback){
  console.log(2)
  callback()
}

function func3(callback){
  console.log(3)
  callback()
}

function func4(callback){
  console.log(4)
  callback()
}

func1(()=>{
  func2(()=>{
    func3(()=>{
      func4(()=>{
        console.log(5)
      })
    })
  })
})
```