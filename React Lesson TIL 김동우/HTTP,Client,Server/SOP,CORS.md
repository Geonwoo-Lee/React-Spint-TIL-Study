### Same Origin Policy(동일 출처 정책) 
서로 다른 출처의 리소스간 상호작용을 방지하기 위해 클라이언트 측 웹 애플리케이션에서 적용되는 보안 정책입니다. 이 보안 정책은 악의적인 행동을 방지하는데 유용하지만 출처간의 상호작용을 방지 합니다.

동일 출처 정책이란 같은 Origin 출처의 서버로만 요청을 주고 받을 수 있습니다.

http:// www.domian1.com --> http:// www.domian1.com = Same-Origin
#### 즉, 동일 출처 정책은 웹 브라우저 보안을 위해 프로토콜, 호스트, 포트가 '동일한' 서버로만 ajax 요청을 주고 받을 수 있는 정책입니다.
<br/>


#### 교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)
교차 출처 리소스 공유(CORS)는 이 제한을 해결하기 위해 W3C(World Wide Web Consortium)에서 개발한 사양입니다.

CORS는 추가 추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다. 웹 애플리케이션은 리소스가 자신의 출처(도메인, 프로토콜, 포트)와 다를 때 cross-origin HTTP 요청을 실행합니다.

http:// www.domian1.com --> http:// www.domian2.com = cross-origin

### Origin(출처)
URL 구조에서 살펴본 Protocal, Host, Port를 합친것을 말합니다. 

### 같은 출처 VS 다른 출처

URL | 결과 | 이유
|---|---|---|
https://off-dngw.github.io/about |	같은 출처 |	Protocal, Host, Port 동일
https://off-dngw.github.io/about?q=work |	같은 출처	| Protocal, Host, Port 동일
https://off-dngw.github.io/about#work |	같은 출처 |	Protocal, Host, Port 동일
http://off-dngw.github.io |	다른 출처 |	 Protocal 다름
https://off-dngw.github.io:3000/about |	다른 출처	| Port 다름
https://off-dngw.gihub.com |	다른 출처	 | Host 다름





#### HTTP 응답 헤더

서버에서 CORS 요청을 처리 할 때 지정하는 헤더

Access-Control-Allow-Origin : 헤더의 값으로 지정된 도메인의 요청만 서버의 리소스에 접근 할 수 있게 한다.

## 예시
Access-Control-Allow-Origin : https://www.naver.com
https://www.naver.com 페이지에서 브라우저는 서버 응답으로 온리소스를 접근할 수 있습니다.
Access-Control-Allow-Origin: *
*를 사용하게 되면 출처에 상관없이 모든 리소스에 접근할 수 있습니다.

Access-Control-Max-Age : Preflight Request의 결과가 캐쉬에 얼마나 오래동안 남아있는지를 나타낸다.
```
Access-Control-Max-Age : <delta-seconds>
아래와 같이 초단위로 캐시 시간을 설정 합니다.
Access-Control-Max-Age : 60 
```

Access-Control-Allow-Method : 브라우저에서 보내는 요청 헤더에 포함된 Access-Control-Request-Method 헤더에 대한 응답 결과입니다. 리소스 접근을 허용하는 HTTP 메서드를 지정해 주는 헤더입니다.
헤더에 GET, PUT, POST, DELETE 등의 HTTP 메서드를 ,로 구분하여 넘겨줍니다.
```

Access-Control-Allow-Method : 'GET','PUT','POST','DELETE'
```