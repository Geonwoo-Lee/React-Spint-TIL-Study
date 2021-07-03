서버의 기본 구조 

http서버란?
: http protocol을 통해 통신해서 API를 제공하는 주체

routing
: 조건에 따라 분기한다

```js
//http 기본세팅과 모듈 불러오기

let http = require('http')
const PORT = 3000;
const IP = 'localhost'
//---------------------------------------------------
모듈을 불러와 주는 양식입니다 let 으로 선언된 변수명은 아무렇게나 해도 되지만 통상적으로는 알아보기 쉽게 
http라는 변수 명을 사용합니다 http는 require를 통해 불러옵니다.
PORT와 IP는 만들지 않아도 되는데 내가 어떤 PORT를 쓸 것인지 기본적으로 사용 할 IP는 무엇인지를 미리 정해주는게 좋긴 합니다 


const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type : text/html});
    response.end('hello server);
})
//-------------------------------------------------------------------
creatServer라는 메소드로 서버를 만들 수 있습니다 이 메소드의 인자 값으로는 request와 response가 있습니다
이 말을 해석해보면 응답과 요청인데 말 그대로 서버를 만들고 그곳에 들어오는 응답과 요청을 인자로 받습니다  
HTTP 요청이 서버에 오면, node가 request와 response 객체를 전달하며 요청 핸들러 함수를 호출합니다 (이 요청을 실제로 처리하기 위해서는 listen메서드가 server객체에서 호출되어야 합니다
response.writeHead 에서는 첫번째 값으로 인자의 상태 코드를 받고 두번째 값으로는 {키:값}을 받는데 헤더의 값이라 생각 하면 됩니다 





server.listen(PORT, ip, () => {
    console.log(`http server listen on ${ip}:${PORT}`);
});


const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};

listen 메서드를 써서 서버가 잘 작동하는지 확인 할 수 있고 핸들러 함수를 호출 하고 실제로 처리해 줄 수 있습니다 

헤더에서는 어떤 오리진들을 허용 할것인지와 어떤 메소드 , 어떤 타입을 받을건지 몇번이나 호출 할건지를 정해줄 수 있습니다 
```