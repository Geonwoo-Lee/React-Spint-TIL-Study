NodeServer를 하면서 디버깅을 했던 방법에서는 

- ``` $ npm install nodemon ``` 으로 노드몬을 install 한 다음에

- package.json 파일에서  스크립트를 
```js
 "scripts": {
    "test": "jest --forceExit --runInBand",
    "start": "nodemon --inspect statesairline/app.js",
    "report": "jest --forceExit --runInBand --json --outputFile=report.jest.json",
    "submit": "codestates-submission"
  },
  ```
  start 부분을 이렇게 바꿔주고 실행한다음 개발자 콘솔을 열어서 노드 아이콘을 클릭 한뒤에 console을 찍고 
  post맨으로 요청을 보내면 console이 찍힌다 ! nodemon을 사용한 이유는 내가 서버에서 무언가를 지속적으로 수정하고 그 안에 있는 값을 console로 계속 찍어보고 싶은데 nodemon을 사용하지 않으면 서버를 다시 실행시키고 열여있는 포트도 새로고침을 해야하는 번거로움을 줄이기 위해 해주었습니다 

  아니면 다른 방법으로는 
  ```$node --inspect-brl 폴더명/파일명```
  이렇게도 디버깅을 할 수 있습니다 

  스프린트를 진행하면서 중요하지만 어렵다고 생각 했던 부분 Routing ! 


  러우터란 ?
URI(경로) 및 특정한 HTTP(Hyper Text Transfet Protocol) 요청 메소드(GET,POST)의 클라이언트 요청에 응답하는 방법을 결정하고  각 라우트는 하나 이상의 핸들러 함수를 가질 수 있고, 라우트가 일치할 때 실행됩니다.
```js
//GET 방식의 METHOD
app.get('/', function (req, res) {
	res.send("hello getMethod")
})

//POST 방식의 MEHTOD
app.post('/', function (req, res) {
	res.send("Hello postMethod")
})
```
라우터의 사용 예시 

다음은 req.query와 req.params

query의 공식문서 

This property is an object containing a property for each query string parameter in the route. When query parser is set to disabled, it is an empty object {}, otherwise it is the result of the configured query parser.
쉽게 말해 쿼리의 값에 아무 값도 없으면 빈객체라고 생각하면 된다 

예제
```js
// GET /search?q=tobi+ferret
console.dir(req.query.q)
// => "tobi ferret"
```
?뒤에 있는 값을 쿼리라고 보면되는데 지금 쿼리 값에는 q = tobi + ferret 이라는 값이 있다 
따라서 req,query.q 객체를 조회하는 방식으로 조회를 해보면 tobi farret 이라는 값이나온다 

다음으로는 req.params에 대해 알아 보자 
req.params는 query와는 다른 개념으로 query 는 ? 뒤에 있는 값을 빈객체라고 생각하고 받아왔다 
하지만 params에서는 /:id 나 /:name과 같은 형태로 되어있고 이 값을 params로 조회 할 수 있다 
경로가있는 경우 /user/:name"이름"속성은로 사용할 수 있습니다 req.params.name. 이 개체의 기본값은 {}입니다.
```js
// GET /user/tj
console.dir(req.params.name)
// => "tj"
```
이런식으로 params를 사용하여 name 이라는 값을 조회할 수 있다 

query와 params를 비교해 보자면 
```js

// localhsot:3000/geonwoo?page=hello
app.get('/geonwoo',(req, res)=>{
    req.send(req.query.page); //req.query.page=hello
});

// req.params
// localhsot:3000/geonwoo/hello
app.get('/geonwoo/:page',(req, res)=>{
    req.send(req.params.page); //req.params.page=hello
});
```
로 나타낼 수 있다
