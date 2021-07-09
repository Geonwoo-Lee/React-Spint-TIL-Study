# 문제 설명

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

<br />

# 제한 조건

n은 10,000,000,000이하인 자연수입니다.

<br />

# 입출력 예

|   n   |   return    |
| :---: | :---------: |
| 12345 | [5,4,3,2,1] |

<br />

# 문제 풀이
난이도가 어렵지 않은 문제였습니다! 이문제를 해결하기 위한 단계를 생각해 보면!!!<br />
1단계 - 숫자를 스트링형식으로 바꿔주기! (배열을 만들기 위해서)<br />
2단계 - 스플릿 메서드를 활용해서 배열을 만들어 줍니다!!<br />
3단계 - reverse() 메서드를 활용해서 전환해 줍니다.<br />
4단계 - 배열안에 있는 문자열을 숫자형태로 바꿔줍니다!!!<br />


이렇게 4가지 단계로 생각하면 아래와 같이 풀수 있습니다!!!<br />
<br />

## Javascript

```js
//풀이 1
function solution(n) {
    
    let newArr = String(n).split('').reverse()
    let result = []
    for(let el in newArr){
        let numArr = newArr[el] = Number(newArr[el])
        result.push(numArr)
    }
    
    return result
}
```
<br >

```js
//풀이 2
 
function solution(n) {
   return  String(n).split('').reverse().map((el=>Number(el)))
}
```

---

# 문제 설명

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 <br/>
함수, solution을 작성해주세요. <br />
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

<br />

# 제한사항

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

<br />

# 입출력 예

|      arr      | divisor |    return     |
| :-----------: | :-----: | :-----------: |
| [5, 9, 7, 10] |    5    |    [5, 10]    |
| [2, 36, 1, 3] |    1    | [1, 2, 3, 36] |
|    [3,2,6]    |   10    |     [-1]      |

<br />

# 입출력 예 설명

입출력 예#1 <br />
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.
입출력 예#2 <br />
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.
입출력 예#3 <br />
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

<br />

# 문제 풀이

이문제의 핵심은 sort입니다. 결과 값을 보면 모두 오름차순으로 정렬해서 출력되기 때문입니다. 그래서 기존에 있는 배열을 sort를 활용해서 오름차순으로 만들어주고 오름차순을 만들어준 배열을 바탕으로 반복문을 돌리면 쉽게 해결 하수 있는 문제입니다. 추가적으로 나누어 떨이지는 원소가 없을 경우의 조건은 삼항 연산자를 통해서 해결할수 있습니다.

## Javascript
```js
//풀이 1
function solution(arr, divisor) {
     
    let newArr = []
    let sort = arr.sort((a,b)=>a-b)
    
    for(let el of sort){
        if(el % divisor === 0){
            newArr.push(el)
        }
    }
    return newArr.length > 0? newArr : [-1]
}
```

```js
//풀이2
function solution(arr, divisor) {
     
   let newArr = []
    
   arr.map((el)=> el%divisor===0 && newArr.push(el))
   let sortArr = newArr.sort((a,b)=>a-b)
    
   return newArr.length > 0? sortArr : [-1]
}
```

---

# 개요
이번 3일동안 서버를 공부하면서 알게된 잡지식을 정리해보고자 합니다!!!
<br />

---

## 1. 디버거 하는 방법!!!
아래와 같이 터미널에 `$node --inspect-brl 폴더명/파일명` 실행하면 브라우저 네트워크에서 디버깅을 할 수 있습니다!
<br />

```js
$node --inspect-brl 폴더명/파일명
```

---

## 2. 서버 응답요청하기 
서버에 응답을 할때 `res.end` `res.send()` `res.json()` 이것을 썼습니다! 결론부터 말하자면 셋다 응답을 나타내는 같은 의미 입니다.

<br />

```js
res.send() // 기본적인 사용
res.end()  // 데이터 없이 신속하게 응답을 종료 할때
res.json() // application/json // 제이슨 응답을 할때 이거 많이 씁니다
// 우리가 서버 언어를 주고 받을때 통상적으로 제이슨으로 주고 받습니다! 이거 많이 씁시당
```
<br />
이외 공식문서를 확인하면 응답하는 메서드가 참 많습니다!

---

## 3. 라우터 사용
라우터는 객체 미들웨어 및 경로의 고립 된 인스턴스입니다. 한파일에서 써도 상관 없지만 분류해서 정리하는게 유지보수하기 더 효율 적입니다! 그래서 app.js에서 use()를 사용해서 경로를 등록하고 해당 경로 라우터파일에서 라우터 모듈을 받아서 합시다!

<br />

```js
//app.js
//...생략
app.use('/hello', 라우터관리파일)  // use() 미들웨어로 라우터 경로를 등록 해줍니다.
//라우터관리파일
//...생략
const router = express.Router() // 라우터 파일에서 라우터 모듈 가져와서 쓰면 됩니다 다이어져 있습니다.
router.get('/' ,(req, res, next)=>{
    //로직 작성하기
})
```
<br />
라우터를 사용할때는 분리해서 쓰는 습관을 기릅시다!

---

## 4. req.query와 req.params 비교하기
그냥 쉽게 생각해서 req.query는 빈객체라고 생각하면 너무나 편하고 이 빈객체를 활용해서 데이터를 어떻게 요청하고 응답할지 생각하면서 로직을 작성하면 됩니다!

<br />

```js
//GET /search?q=joycoding
console.log(req.query.q) // 'joycoding'
// 정말 쉽게 자바스크립트로 표현하자면
obj = {} //여기서 obj를 req.query 로 생각하기!
obj.p = 'joycoding'
obj // {p:"joycoding"}
```
<br />
그러면 req.params는 무엇일까요 ? req.query와 완전 다른 개념입니다! req.params는 쉽게 말해 /:id , /:name 처럼 이런 모양이면 req.params을 활용해서 쓸수 있다 라고 쉽게 생각하면 좋습니다. req.query와 req.params 비교해보겠습니다.
<br />

```js
//경로가 /user/:name 일경우
//GEt /user/joycoding
consolo.dir(req.params.name) // joycoding
// req.query와 req.params 비교
// req.query
// localhsot:3000/joycoding?page=hello
app.get('/joycoding',(req, res)=>{
    req.send(req.query.page); //req.query.page=hello
});
// req.params
// localhsot:3000/joycoding/hello
app.get('/joycoding/:page',(req, res)=>{
    req.send(req.params.page); //req.params.page=hello
});
```