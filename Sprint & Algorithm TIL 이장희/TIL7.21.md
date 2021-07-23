# 순열/조합

---

## 순열

순열은 서로 다른 n개의 물건 중에서 r개를 택하여 한 줄로 배열하는 것을 n개의 물건에서 r개 택하는 것을 순열이라고 합니다. 공식은 nPr = (공식은 n!/(n-r)!)로 표현합니다. 조합은 순서와 상관이 없다면 순열은 순서가 중요합니다.  

만약 배열 [1,2,3]이 있고 2개를 택한다하면 아래와 같이 출력이 됩니다.  
[1,2],[1,3]  
[2,1],[2,3]  
[3,1],[3,2]  

여기서 규칙은 1,2,3을 순서대로 고정 시키고 나머지 요소만으로 이뤄진 배열에서 r-1만큼 선택하여 또 순열을 구하면 됩니다(재귀)  

### 추가적으로 중복순열은

만약 배열 [1,2,3]이 있고 2개를 택한다하면 아래와 같이 출력이 됩니다.  
[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]

```js
//순열 코드

const 순열 = function(n,r){
    const result = [];
    // 탈출 조건 (nP1) 은 무조건 1개 선택이여서 순서 의미가 없음
    if(r === 1) return n.map((el)=>[el]);

    n.forEach((fix, idx, origin)=>{
        // 해당하는 fix를 제외한 나머지 배열
        const rest = [...origin.slice(0,idx), ...origin.slice(idx+1)]

        // 나머지에 대해 재귀로 순열을 구한다
        const 재귀순열 = 순열(rest,r-1);

        // 돌아온 순열에 떼 놓은 값 붙이기(fix 값)
        const attached = 재귀순열.map((el)=>[fixed,...el])

        // 배열 다 붙이기
        result.push(...attached)
    })
    return result
}
```

<br />

## 조합

조합은 서로 다른 n개의 물건에서 순서를 생각하지 않고 r개를 택할 때, n개에서 r개를 택하는 조합이라고 하며 공식은 nCr = n!/(n-r)!r! 로 표현합니다. 

만약 [1,2,3,4]에서 3개의 조합을 갖춘다고 할때    
[1,2,3],[1,2,4],[1,3,4],[2,3,4] 나옵니다  

여기서 규칙은 순열과 비슷합니다. 다만 순서가 상관없습니다. [1,2,3] = [3,2,1]로 같은 취급을 합니다.

```js
//조합 코드
const 조합 = function(n,r){
    const result = [];
    // 탈출 조건 (nP1) 은 무조건 1개 선택이여서 순서 의미가 없음
    if(r === 1) return n.map((el)=>[el]);

    n.forEach((fix, idx, origin)=>{
        // 해당하는 fix를 제외한 나머지
        const rest = origin.slice(idx+1)

        // 나머지에 대해 재귀로 조합을 구한다
        const 재귀조합 = 순열(rest,r-1);

        // 돌아온 조합에 떼 놓은 값 붙이기(fix 값)
        const attached = 재귀조합.map((el)=>[fixed,...el])

        // 배열 다 붙이기
        result.push(...attached)
    })
    return result
}
```

순열은 순서가 중요하고 조합은 순서가 상관없습니다. 코드도 거의 똑같습니다. 다만 fix를 제외한 나머지 값을 처리하는 코드를 유심히 보면 되겠습니다.

---

## 최대 공약수와 최소 공배수(GCD/LCM)

(유클리드 호제법: Euclidean algorithm)  
두 수 a ,b(a > b)가 존재하고 최대 공약수를 구하는 함수가 GCD(a,b)이고 최소 공배수를 구하는 함수가LCN(a,b)일 때

### 최대공약수(GCD)
a % b === 0이면 a, b의 최대공약수는 b가 된다.  
a % b !== 0이면 GCD(b, a % b) 함수를 반복하여 실행하고 b % (a % b) === 0이 되는 순간 a % b가 최대공약수가 된다.  

### 최소공배수(LCM)
a, b의 곱에 a, b의 최대공약수로 나누어 나온 값이 a, b 두 수의 최소공배수가 된다.  
LCM(a, b) = (a * b) / GCD(a, b)  


이 두가지 조건을 참고하여 아래와 같이 코드로 작성하였습니다.

```js
//최대 공약수와 최소 공배수(GCD/LCM) 코드

function solution(n, m) {
    //최대 공약수
  const gcd = function(n, m){
      if(n%m===0){
          return m
      }else{
          return gcd(m, n%m)
      }
  }
    //최소 공배수
  const lcm = function(n, m){
      return (m*n) / gcd(n,m)
  }
    //배열안에 최대 공약수와 최대 공배수 넣어서 리턴하기 
  return [gcd(n, m), lcm(n, m)];
}
```

---

## 멱집합

멱집합은 주어진 집합의 모든 부분집합들로 구성된 집합을 의미합니다. n개의 값으로 구성된 집합의 모든 부분집합의 개수는 2의 n승개 입니다.  

예를들어 {1,2,3} 있을 경우 2의3승은 8입니다.  
출력값 {1},{1,2},{1,3},{1,2,3},{2},{2,3},{3},{}  

```js
// 멱집합 코드 구조

function powerSet(arr) {
  const result = [];
  
      // 재귀함수가 한루프를 돌때 마다 부분집합을 구성하는 값들이 있습니다.
  function findPowerSet(currentArr, currentIndex) {

      // 탈출조건
    if (currentIndex === arr.length) {
      return result.push(currentArr);
    }
    // idx번째 요소가 포함되는 경우
    findPowerSet(currentArr.concat(arr[currentIndex]), currentIndex + 1);

     // idx번째 요소가 포함되지 않는 경우
    findPowerSet(currentArr, currentIndex + 1);
  }
  // 0 번째 인덱스와 빈 배열을 인자로 받는 재귀 함수를 실행합니다.
  findPowerSet([], 0);
  return result;
}
```

위에 있는 코드 구조를 활용해서 코플릿 집밥이 그리워 문제를 풀수있습니다.

<br />

### (멱집합)집밥이 그리워 풀이

```js
function missHouseMeal(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.
  // 2의 n승이 멱집합
  const result = []
  sideDishes.sort() // 사전식 나열

  function 멱집합(sideDishe, idx){

    // 재귀 함수이기 때문에 탈출 조건을 만듭니다.
    if(idx === sideDishes.length){
      // 만약, idx와 sideDishes의 길이가 같다면(마지막까지 검토한 경우) result에 sideDish를 삽입하고 push합니다.
      return result.push(sideDishe);
    }

    // idx번째 요소가 포함되는 경우
    멱집합(sideDishe.concat(sideDishes[idx]), idx+1)
      // [...sideDishe, sideDishes[idx]] 구조분해로 해도 상관없음

    // idx번째 요소가 포함되지 않는 경우
    멱집합(sideDishe, idx+1);
  }
    // 0 번째 인덱스와 빈 배열을 인자로 받는 재귀 함수를 실행합니다.
  멱집합([],0)
  return result.sort()
}
```