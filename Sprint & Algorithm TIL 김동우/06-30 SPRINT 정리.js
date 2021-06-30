/*
CORS 정리!

Cross-Origin Resource Sharing(CORS) 추가적인 HTTP header를 사용해서 어플리케이션이
다른 origin의 리소스에 접근 할 수 있도록 하는 메커니즘 입니다.
하지만 다른 origin에서 내 리소스에 함부로 접근하지 못하게 하기 위해 사용됩니다.


잠깐 여기서 Origin(출처)란?
서버의 위치를 의미하는 https://google.com 과 같은 URL들은 마치 하나의 문자열 같아 보여도
사실 여러개의 구성 요소로 이루어져 있다.

  프로토콜      HOST        Path     Query String   Fragment
  https://  www.naver.com  /users ?sort=asc&page=1  #foo

이때 출처는 프로토콜과 호스트 , 위 에서는 나와있지 않지만 :80, :8080 과 같은 포트번호까지 
모두 합친것을 의미한다. 한마디로 서버의 위치를 찾아가기 위해 필요한 기본적인 것들을 합쳐놓은 것.

CORS의 요청 헤더 목록 
 - Origin
 - Access-Control-Request-Method
 - preflight요청을 할 때 실제 요청에서 어떤 메서드를 사용할 것인지 서버에게 알리기 위해 사용됩니다.
 - Access-Control-Request-Headers
 - preflight요청을 할 때 실제 요청에서 어떤 header를 사용할 것인지 서버에게 알리기 위해 사용됩니다.
응답 헤더들은 다음과 같이 있습니다.

 - Access-Control-Allow-Origin
 - 브라우저가 해당 origin이 자원에 접근할 수 있도록 허용합니다. 혹은 *은 credentials이 없는 요청에 한해서 모든 origin에서 접근이 가능하도록 허용합니다.
 - Access-Control-Expose-Headers
 - 브라우저가 액세스할 수있는 서버 화이트리스트 헤더를 허용합니다.
 - Access-Control-Max-Age
 - 얼마나 오랫동안 preflight요청이 캐싱 될 수 있는지를 나타낸다.
 - Access-Control-Allow-Credentials
 - Credentials가 true 일 때 요청에 대한 응답이 노출될 수 있는지를 나타냅니다.
 - preflight요청에 대한 응답의 일부로 사용되는 경우 실제 자격 증명을 사용하여 실제 요청을 수행 할 수 있는지를 나타냅니다.
 - 간단한 GET 요청은 preflight되지 않으므로 자격 증명이 있는 리소스를 요청하면 헤더가 리소스와 함께 반환되지 않으면 브라우저에서 응답을 무시하고 웹 콘텐츠로 반환하지 않습니다.
 - Access-Control-Allow-Methods
 - preflight`요청에 대한 대한 응답으로 허용되는 메서드들을 나타냅니다.
 - Access-Control-Allow-Headers
 - preflight요청에 대한 대한 응답으로 실제 요청 시 사용할 수 있는 HTTP 헤더를 나타냅니다.


 CORS가 필요한 이유

 내가 서비스하고 있지 않은 사이트에서 섹션을 요청해서 섹션을 획득할 수 있다면
 해당 사이트는 악의적으로 내 세션을 탈취하거나 다른 행동을 할 수 있습니다. 그래서 브라우저에서는 이러한 요청을 막습니다.
 
 즉, 쉽게 설명 하자면 구글로그인을 한 상태(서버로부터 요청받은 쿠키가 생성이 됨)
 이 쿠키에서 서버는 사용자가 로그인을 한 상태인지 판단이 가능하지만 실질적으로는 내가 접속했는지 다른사람이 접속을 했는지
 판단을 못한다.그러므로 다른 악의적인 사이트에서 내 정보를 가져오고 싶으면 그 쿠키를 통해서 사용자 정보를 피싱할 수 있지만
 CORS규칙에 의해서 새로운 섹션에서는 이 서비스를 이용하고 싶으면 로그인을 다시 하라는 창이 뜨는 것이다.
 

 CORS의 동작 방식!

브라우저가 리소스를 요청할 때 추가적인 헤더에 정보를 담습니다. 
내 origin은 무엇이고 어떤 메소드를 사용해서 요청을 할 것이고 어떤 헤더들을 포함할 것인지를 담아서 서버에 전송합니다.
서버는 서버가 응답할 수 있는 origin들을 헤더에 담아서 브라우저에게 보냅니다. 
브라우저가 이 헤더를 보고 해당 origin에서 요청할 수 있다면 리소스 전송을 허용하고 만약 불가능하다면 에러를 발생시킵니다.



*/




const http = require('http');
const PORT = 5000;
const ip = 'localhost';
const server = http.createServer((request, response) => {
/*
  preflight는 우리말로 하면 말 그대로 미리 보내는 것 , 사전 전달
  기본적으로 브라우저는 cross-origin 요청을 전송하기 전에 OPTIONS 메소드로 preflight를 전송한다.

    이때 Response로 Access-Control-Allow-Origin과 Access-Control-Allow-Methods가 넘어오는데 이는 서버에서 
    어떤 origin과 어떤 method를 허용하는지 브라우저에게 알려주는 역할을 한다.
    브라우저가 결과를 성공적으로 확인하고 나면 cross-origin 요청을 보내서 그 이후 과정을 진행한다.

 CORS응답 처리 
    Client
   클라이언트가 서버에게 원하는 사항을 요청하고 서버는 이에 대한 응답을 한다.
   이때 요청이 발생하기 전 Client는 preflight로 서버가 나의 요청을
   들어줄 수 있는지 여부를 확인한다. 서버가 요청에 응한다면 Client가 요구한 정보들을 받을 수 있다.

   Server
   서버는 클라이언트에 메소드에서 OPTIONS 메소드가 있는지 없는지 확인을 한ㄷ가
   OPTIONS 메소드가 있다면 자료요청에 응하고 요청한 자료를 보내준다.
   없을 경우에는 거부의사를 표현한다(Error)
   이때 CORS는 외부적으로는 한번의 요청이지만 내부적으로는 2번 반응을 한다.



*/

//메소드가 OPTIONS 이면 cors설정을 돌려줘야 한다.
if(request.method === 'OPTIONS'){
  response.writeHead(200, defaultCorsHeader)
  //클라이언트의 메소드에 OPTIONS가 있다면 사용을 승인 해준다
  //사용을 승인 을 해줘야 하므로 요청 성공 코드인 200을 써주고 
  // defaultCorsHeader객체 안에 OPTIONS라는 메소드가 있으니 
  // 요청승인과 동시에 응답헤더(OPTIONS)를 가진 객체 defaultCorsHeader로응답을 해준다.
  response.end();
  //응답이 끝났으니 end를 사용해서 끝냄.
  }

  //메소드가 POST이고 URL이 /upper면 대문자로 응답을 돌려줘야한다.
 if(request.method === 'POST' && request.url === '/upper'){
   //클라이언트의 요구사항이 POST방식의 URL의 upper이면 그것을 들어준다
   //[2차 실행]
   let body = [];

   request.on('data' , (chunk) =>{
     body.push(chunk)
     //요구사항을 들어주기 위해 클라이언트가 보내준 input을 받는다 
     //자료를 수신
     //ex --> 소문자 aa가 있으면 빈배열에 aa을 push
   })
   .on('end' ,() =>{
     body = Buffer.concat(body).toString().toUpperCase();
     //클라이언트가 대문자로 요구한 대문자 결과값을 body에
     //재할당을 해준다 
     //ex ---> [AA]
     
     response.writeHead(200, defaultCorsHeader);
     
     response.end(body);
     //대문자로 변경된 body값으로 응답을 하는 동시에 끝냄.
   })
     //메소드가 POST이고 URL이 /lower 대문자로 응답을 돌려줘야한다.
 }else if(request.method === 'POST' && request.url === '/lower'){
  let body = [];

  request.on('data' , (chunk) =>{
    body.push(chunk)
  })
  .on('end' ,() =>{
    body = Buffer.concat(body).toString().toUpperCase();
    
    response.writeHead(200, defaultCorsHeader);
    response.end(body);
  })
  //에러로 처리합니다
}else{
  response.on('error' , (err) =>{
    response.writeHead(400, defaultCorsHeader)
    console.log(err);
  })
}
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});
//Cors설정
const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};
