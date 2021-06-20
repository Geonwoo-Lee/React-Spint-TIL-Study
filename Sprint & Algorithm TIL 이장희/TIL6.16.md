# 문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
<br />
 
# 제한사항
arr은 길이 1 이상, 100 이하인 배열입니다. <br />
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다. <br />
<br />
 
# 입출력 예
arr	|return
:-:|:-:
[1,2,3,4]|2.5
[5,5]|5

# 문제 풀이
첫번째는 reduce를 사용해서 누적값과 현재값을 더해 배열의 길이만큼 나눠 평균을 구했습니다
두번째는 반복문 for/of 를 활용해서 배열안에 있는 요소값을 추출하여 더해주고 배열의 길이만큼 나눠 평균을 구했습니다.

```js
//#1 reduce로 풀기
function solution(arr){
    let averg = arr.reduce((a, c) => {
        return a + c;
    });
    return averg / arr.length;
}
```

```js
//#2 반복문으로로 풀기
function solution(arr){
  let arrSum = 0;
  for(let el of arr){
      arrSum += el;
  }
  return arrSum / arr.length
}
```
 
###비고 
- 프로그래머스 1단계 문제 완료
- 애플코딩 강의 시청
- 금일 스프린트 복습
