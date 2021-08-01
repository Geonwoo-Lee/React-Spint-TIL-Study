### Async-Await 
async와 await는 자바스크립트의 비동기 처리 패턴 중 최근에 나온 문법이다.
비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하며 
읽기 편한 코드로 작성할 수 있게 한다.

#### async 함수
- async는 function 앞에 위치 합니다.
- 함수 앞에 async를 붙이면 해당 함수는 항상 Promise로 반환합니다.
- Promise가 아닌 값을 반환 하더라도 이행 상태의 Promise로 감싸 이행된 Promise가 반환되도록 합니다.

#### await 
- await은 async 함수 안에서만 동작 합니다.
- awiat 키워드를 만나면 Promiserk 처리 될 때 까지 기다리고 결과는 그 이후에 반환 합니다.
- function 앞에 async가 없을 경우 syntax에러가 발생 합니다.


#### 문법 예시 
```
const readAllUsersAsyncAwait = async () => {
  let a = await getDataFromFilePromise(user1Path);
  let b = await getDataFromFilePromise(user2Path);
  return [JSON.parse(a) , JSON.parse(b)];
}

```