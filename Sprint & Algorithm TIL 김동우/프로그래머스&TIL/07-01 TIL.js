const express = require('express');

//Express모듈을 실행해 app 변수에 할당합니다.
//익스프레스 내부에 http 모듈이 내장되어 있으므로 서버의 역할을 할 수 있습니다.
const app = express();

/*
app.set('port', 포트)로 서버가 실행될 포트를 설정합니다.
process.env객체에 port속성이 있으면 그 값을 사용하고 없다면 
기본값으로 3000번 포트를 이용하도록 되어있습니다.
이렇게 app.set(키,값)을 사용해서 데이터를 저장 할 수 있습니다. 
나중에 데어티럴 app.get(키)로 가져올 수 있습니다.
*/
app.set('port', process.env.PORT || 3000);
/*
app.get(주소, 라우터)는 주소에 대한 GET 요청이 올 때 어떤 동작을 할지 적는 부분입니다. 
매개변수 req는 요청에 관한 정보가 들어 있는 객체이고, 
res는 응답에 관한 정보가 들어 있는 객체입니다. 
현재 GET / 요청 시 응답으로 Hello, Express를 전송합니다. 
익스프레스에서는 res.write나 res.end 대신 res.send를 사용하면 됩니다.
GET 요청 외에도 POST, PUT, PATCH, DELETE, OPTIONS에 대한 라우터를 
위한 app.post, app.put, app.patch. app.delete, app.options 메서드가 존재합니다.
*/
app.get('/', (req, res) => {
  res.send('Hello, Express');
});
/*
app.listen
포트를 연결하고 서버를 실행하는 작업입니다.
*/
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

//미들웨어 정리


/*
app.use() 매개변수가 req,res,next인 함수를 넣으면 된다.
미들웨어는 위에서 아래로 순서대로 실행 되면서 요청과 응답 사이에 
기능을 추가 할 수 있습니다. next 매개변수를 사용을 하게 되면
다음 미들웨어 함수로 넘어갈 수 있습니다.

주소를 첫 번째 인수로 넣어주지 않는다면 모든 요청에서 실행되고
주소를 넣는다면 해당 요청에서만 실행됩니다.

app.use(미들웨어) : 모든 요청에서 미들웨어 실행

app.use('/abc', 미들웨어) : abc로 시작하는 요청에서 미들웨어 실행

app.post('/abc', 미들웨어) : abc로 시작하는 POST 요청에서 미들웨어 실행
*/
app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log('모든 요청에 다 실행됩니다.');
  next();
});
app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});