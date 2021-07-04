# Express 모듈


|함수명|설명|
|---|---|
set(name, value) |	서버 설정을 위한 함수. 
get(name) |	설정된 서버 속성을 꺼내올 수 있다.
use([path], function, [function…]) |미들웨어 함수 사용
get([path], function) |	특정 경로로 요청 정보 처리


<div>Express 모듈 예제</div>

```
let express = require('express');
let http = require('http');

// express의 app객체 생성
let app = express();

// app객체에 서버 속성 등록
app.set('port', process.env.PORT || 8080);

// 서버 시작
http.createServer(app).listen(app.get('port'), function() {
    console.log('서버 시작 : ' + app.get('port'));

```