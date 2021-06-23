# 문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
<br />
 
# 제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
<br />
 
# 입출력 예
arr1	|arr2|	return
:-:|:-:|:-:
[[1,2],[2,3]]|	[[3,4],[5,6]]	|[[4,6],[7,9]]
[[1],[2]]	|[[3],[4]]|[[4],[6]]

<br />


# 문제 풀이
이런문제를 손코딩으로 푸는 방법도 나쁘지 않다고 생각한다. <br />
이중 반복을 써서 푼다고 가정하면 아래의 형태처럼 식을 적을 수 있다. <br />
(arr1=[[1,2],[2,3]], arr2 =[[3,4],[5,6]]) <br />

arr1[0][0] + arr2[0][0] = 1 + 3  = 4<br />
arr1[0][1] + arr2[0][1] = 2 + 4  = 6<br />

arr1[1][0] + arr2[1][0] = 2 + 5 = 7<br />
arr1[1][1] + arr2[1][1] = 3 + 6 = 9<br />

그래서 arr1의 길이만큼 전체적으로 반복문을 돌려주고 arr1[i][j] 값도 순회 하기위해 <br />
이중으로 돌려주면서 위의 규칙에 맞게 식을 적어주고 결과값을 담아준 변수를 답을 반환할 변수에 담아 주면 끝!!! <br />


## Javascript
```js
function solution(arr1, arr2) {
  const answer = [];

  for(let i=0; i<arr1.length; i++){
      let temp = [];
      for(let j=0; j<arr1[i].length; j++){
          temp.push(arr1[i][j]+arr2[i][j])
      }
      answer.push(temp)
  }
  return answer;
}
```

# 프로미스 정리
프로미스에 대해 알기전 Promise의 특징을 간단하게 보고 넘어 갑시다!  

1. 일단 new Promise()로 생성된 변수를 콘솔창에 출력해보시면 현재 상태를 알 수 있습니다. 
성공/실패 판정 전에는 `<pending>` 이라고 나오며 </br>
성공 후엔  `<resolved>` </br>
실패 후엔 `<rejected>` 이런 식으로 나옵니다. </br>
이렇게 프로미스 오브젝트들은 3개 상태가 있습니다. 그리고 성공을 실패나 대기상태로 다시 되돌릴 순 없습니다.

2. Promise는 동기를 비동기로 만들어주는 코드가 아닙니다. 
Promise는 비동기적 실행과 전혀 상관이 없습니다.</br>
그냥 코딩을 예쁘게 할 수 있는 일종의 디자인 패턴입니다.</br>
예를 들면.. Promise 안에 10초 걸리는 어려운 연산을 시키면 10초동안 브라우저가 멈춥니다.</br>
10초 걸리는 연산을 해결될 때 까지 대기실에 제껴두고 그런거 아닙니다.</br> 


## 1. 프로미스
프로미스는 콜백대신 가독성 좋은 코드를 작성할수 있으며 성공, 실패의 경우에 맞춰 각각 다른 코드 실행이 가능합니다. </br>
아래 예제 코드는 프로미스를 만드는 가장 기본적인 틀입니다.
```jsx
const promiseTest = new Promise((resolve, reject)=>{
    resolve() // 성공하면
    reject()  // 실패하면
});  
// 프로미스는 성공했을때와 실패했을 때를 판단하는 함수라고 생각하기

promiseTest.then(()=>{
  // 성공했을때
}).then(()=>{
 // 성공했을때 (연달아서 사용 가능)
}).catch(()=>{
 // 실패했을때
})
```

## 2. 프로미스 예제1_조건문 사용하기
사실 프로미스는 예제 1번 틀을 확실히 이해한다면 다양한 예제를 만들어 사용할 수 있습니다.  
조건문을 사용해서 사용하는 법

```jsx
const promiseTest = new Promise((resolve, reject)=>{
  let isTrue = true
  if(isTrue){
    resolve()
  }else{
    reject()
  }
});

promiseTest.then(()=>{
  console.log('성공했습니다')
}).catch(()=>{
  console.log('실패했습니다.')
})
```
만약에 실패했습니다 출력하고 싶으면 조건문에 ! 낫연산자 붙여주기 (!isTrue) 혹은 resolve()랑 reject()위치 바꾸기

## 3. 프로미스 예제2_setTimeout 활용하기
별다를게 없습니다 프로미스의 기본적인 틀안에 `setTimeout()`를 사용한것 뿐입니다!

```jsx
const promiseTest = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let sum = 5+5
    if(sum === 9){
      resolve()
    }else{
      reject()
    }
  },1000);
});

promiseTest.then(()=>{
  console.log('성공했습니다')
}).catch(()=>{
  console.log('실패했습니다.')
})
```

## 4. 프로미스 예제3_인자로 데이터 전달하기
resolve나 reject에 인자에 데이터를 전달하여 출력 할수 있습니다. 호출할 인자의 작명은 자유롭게 해도 됩니다.  
주목해야 할 부분은 resolve와 reject의 인자에 데이터를 어떻게 전달했는지 콘솔창을 통해 확인합시다!!
```jsx
const promiseTest = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let sum = 5+5
    if(sum){
      resolve(sum)
    }else{
      reject(sum)
    }
  },1000);
});

promiseTest.then((dataSum)=>{
  console.log('성공했습니다',dataSum)
}).catch((dataSum)=>{
  console.log('실패했습니다.',dataSum)
})
```


# 프로미스 추가정리 및 간략 정리
1. Promise chaining 은 여러개의 프로미스를 연결해서 쓸수 있습니다!
2. Promise all 은 모든 프로미스를 한꺼번에 쓸수 있습니다!
3. async / await 은 좀더 간결하고 동기적으로 표현 할수 있습니다!

## 1. Promse chaining
Promise의 특징중 하나인 Chaining은 여러 개의 프로미스를 연결하여 사용할 수 있습니다!  
후속 메서드 then()을 호출하고 나면 새로운 프로미스 객체가 반환됩니다.  
여기서 중요한 포인트는 Chaining을 할때 then() 메서드를 통해서 값을 바로 전달 하여   
연결할수가 있고 혹은, return을 통해 Promise를 전달해서 사용 할 수 있습니다.

```jsx
const testPromise = new Promise(function(resolve, reject){
  setTimeout(()=>{
    resolve(1);
  }, 1000);
})
.then((data1) => {
  console.log(data1); // 1
  return data1 + 10;
})
.then((data2) => {
  console.log(data2); // 11
  return data2 + 20;
})
.then((data3) => {
  console.log(data3); // 31
});
```

## 2. Promise all
Promise.all은 순회 가능한 객체에 주어진 모든 프로미스를 반환하는 메서드입니다!사용법은 엄청 간답합니다.
Promise.all()에서 괄호안에 배열[ ] 을 넣고 그안에 프로미스를 넣고 후속메서드 .then()을 써서 실행 해주면 됩니다!

```jsx
const promise1 = Promise.resolve(5);
const promise2 = "데이터";
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, '2초뒤 결과출력');
});
 
Promise.all([promise1, promise2, promise3]).then((data) => {
  console.log(data);
});
```

## 3. async / await
이문법을 쓰는 이유는 프로미스도 골백지옥처럼 체이닝을 계속 하다보면 코드의 가독성이 떨어집니다.   
그래서 async와 await는 Promise를 좀더 간결하고 동기적으로 실행되는것 처럼 보이게 만들어 줍니다!

```jsx
//async 사용법

// 1. 함수 선언식
async function fetchUser() {
  return 'joycoding';
}
 
// 2. 함수 표현식
const fetchUser = async function() {
  return 'joycoding';
};
 
// 3. 화살표 함수
const fetchUser = async () => {
  return 'joycoding';
};
 
fetchUser().then(data => console.log(data)); // 함수로 바로 호출
const user = fetchUser(); // 변수에 할당해서 호출
user.then(data => console.log(data));
console.log(user);  // 'joycoding'
```
async는 무조건 함수명 앞에 위치해야 사용 할수 있습니다


```jsx
//일반적인 방법
function joycoding() {
  return new Promise((resolve, reject) => {
    let data = [3,6,9];
    resolve(data)
  });
}
 
joycoding().then((numData)=>{
  console.log(numData)
})
```

```jsx
// async & await 사용
function joycoding() {
  return new Promise((resolve, reject) => {
    let data = [3,6,9];
    resolve(data)
  });
}
async function result() {
  let numData = await joycoding();
  console.log(numData); 
}
result()  // [3,6,9]
```