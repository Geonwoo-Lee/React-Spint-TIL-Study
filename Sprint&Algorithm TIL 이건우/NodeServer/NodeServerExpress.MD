* Express
이번에는 노드 서버를 빠르고 간결하게 사용하기 위해 만들어진 웹 프레임워크 Express 를 사용해 보랴고 합니다 

- express를 사용하기 위해서는 먼저 터미널에서 express를 설치해야 합니다 
``` $ npm install express```

설치를 했다면 express가 어떻게 구성이 되어있고 어떻게 사용이 가능한지 알아보겠습니다 .

- express 의 기본 구성

```js 
const express = require('express') // http를 불러온것 처럼 require를 통해 express를 불러옵니다.
const app = express() // require를 통해 불러온 express를 app이라는 변수에 담아 사용합니다
const PORT = 3000 //사용하고자 하는 포트를 선언 해줍니다 


app.listen(port, () => {  
  console.log(`Example app listening at http://localhost:${port}`)
})
//listen 서버의 요청 처리를 대기하는 중입니다 
```

- 다음으로 express의 예제를 통해 express를 어떻게 사용하고 작동되는지 알아보겠습니다 

```js
const express = require('express')
const app = express()
const port = 3000
 
app.get('/', (req, res) => {
  res.send('Hi')
})
 
app.listen(port, () => {
  console.log('Bye')
})

```

이렇게 get요청 메서드를 사용하고 '/' 경로로 인자로 req, res를 받습니다(req 는 request 요청 res 는 response 응답 의 약자 )
res.send로 요청에 응답할 내용을 입력해 주었습니다 
그럼 이 코드를 실행하면 터미널에서는 Bye 가 찍히고 브라우저에서는 Hi가 출력되게 됩니다 

- express에서의 라우팅 
```app.메서드(PAHT,HANDLER) // 기본적인 라우터 형식```
PATH에서는 경로가 들어가고 HANDLER부분에서는 라우터가 일치 할 때 실행되는 콜백 함수입니다 .
사용 예제
```js
// get요청이 '/'의 경로로 들어왔을 경우 
// 홈 페이지에서 Hello World!로 응답:
app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
// post 요청이 '/'의 경로로 들어온 경우
// 애플리케이션의 홈 페이지인 루트 라우트(/)에서 POST 요청에 응답:
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
 
// put요청이 '/user'의 경로로 들어온 경우
// /user 라우트에 대한 PUT 요청에 응답:
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
 
// delete요창이 '/user'로 들어온 경우 
// /user 라우트에 대한 DELETE 요청에 응답:
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```

- express로 /upper 와 /lower 구현했던것 구현해보기 

```js 

// 외부 모듈
const express = require('express')  //express모듈 불러오기 
const cors = require('cors') // cors 미들웨어를 불러오기

//전역 변수
const app = express(); // 모듈을 app이라는 변수에 담아 서버 만들기 
const port = 5000; //포트 5000 사용
const ip = 'localhost'; //아이피 localhost사용 
 
//실행 로직
app.use(express.static('client')) //사용할 파일을 폴더에서 불러와 주는 것입니다 
app.use(express.json({strict: false})); //json형태가 아닌 string파일로 주고받을 거기 때문에 이렇게 해주어야 json이 아닌 원시자료형 을 받아올 수 있습니다 
app.use(cors()); // 모든 요청에 대해 CORS 를 허용한다.
 
 //use는 등록해주다라는 개념으로 이해하기!!! express에 ~를 사용할것을 알려줄꺼야~
 
//POST 
//upper 구현하기
app.post('/upper', function(req,res){
    console.log(req.body) // 터미널 콘솔 확인해보기 
    let buffer = req.body 
    buffer = buffer.toUpperCase()
    console.log(buffer) // 대문자로 변환되었는지 확인
    res.json(buffer) // 바디데이터 Json parsing해서 내보내기
})

//loewr 구현하기
app.post('/lower', function(req,res){
    res.json(req.body.toLowerCase())
})
 
app.listen(port, ()=>{
  console.log(`http server listen on ${ip}:${port}`);
})
```
이렇게 express로 구현을 해주면 nodeserver로 전부 구현하고 헤더를 넣어 주는 것 보다 훨씬 더 간단하게 만들어 줄 수 있습니다 .