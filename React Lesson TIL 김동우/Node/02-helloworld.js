//정적 자원 전송 Static
//라우팅에 성공했으니 실제 HTML과 로고 이미지를 전송 합니다
//이런 파일을 정적(Static)이라고 부르는 이유는 일반적으로 바뀌지 않기 때문입니다.

const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

function serveStaticFile(res, path, contentType, responseCode = 200) {
  /*
  __dirname 은 현재 실행중인 스크립트가 존재하는 디렉토리 입니다.
  스크립트가 /home/sites/app.js안에 존재 한다면
  __dirname 은 /home/sites 입니다. 이런 변수는 자주 사용하는게 좋은편 입니다.
  */
  fs.readFile(__dirname + path, (err, data) => {


    //public폴더 안에 파일이 없거나 불러올 폴더가 없을 때 
    // 500 에러를 사용해서 '500 - Internal Error' 문구를 출력해준다.
    if(err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      return res.end('500 - Internal Error')
    }
    res.writeHead(responseCode, { 'Content-Type': contentType })
    res.end(data)
  })
}

const server = http.createServer((req,res) => {
   /* 
  쿼리스트링, 옵션인 마지막 슬래시를 없애고,
  소문자로 바꿔서 URL을 정규화 합니다.
  */
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch(path) {
    case ''://http://localhost:3000/ --> home.html 파일과 안에 있는 img를 출력
      serveStaticFile(res, '/public/home.html', 'text/html')
      break
    case '/about': //http://localhost:3000/about --> about.html 파일과 안에 있는 img를 출력
      serveStaticFile(res, '/public/about.html', 'text/html')
      break
    case '/img/logo.png'://http://localhost:3000/img/logo.png 로고를 보여준다.
      serveStaticFile(res, '/public/img/logo.png', 'image/png')
      break
    default:// URL주소가 잘못 되어있는 경우 404.html파일과 이미지를 보여준다.
      serveStaticFile(res, '/public/404.html', 'text/html', 404)
      break
  }
})

server.listen(port, () => 
console.log(`Server Started on port ${port}; ` + 'Press Ctrl+C to terminate'))
