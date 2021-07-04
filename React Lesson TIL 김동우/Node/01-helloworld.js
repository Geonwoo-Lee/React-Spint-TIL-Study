/*
  라우팅 : 클라이언트가 요청한 콘텐츠를 전송하는 메커니즘을 말합니다.
  웹 기반 클라이언트/서버 애플리케이션에서 클라이언트는 원하는 컨텐츠를 URL
  즉, PATH(경로)와 쿼리스트링 으로 요청합니다.
*/

const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {
  /* 
  쿼리스트링, 옵션인 마지막 슬래시를 없애고,
  소문자로 바꿔서 URL을 정규화 합니다.
  */

  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch(path) {
    case '':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Homepage')
      // http://localhost:3000/ --> HomePage 출력
      break
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('About')
       // http://localhost:3000/about --> About 출력
      break
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Not Found')
      // http://localhost:3000/404 --> Not Found 출력
      break
  } })

  server.listen(port, () => 
  console.log(`Server Started on port ${port}; ` + 'Press Ctrl+C to terminate'))
  