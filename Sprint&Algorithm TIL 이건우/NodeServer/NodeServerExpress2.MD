* Express의 사용법에 대해서 정리를 해보려고 합니다 

- express의 기본적인틀을 먼저 보게되면 
```js
// 외부에서 가져온 모듈
// 예를 들면 express와 cors 가 있습니다 

// 내부 모듈
// 이미 있는 모듈들을 사용 할때에 

// 전역 변수
//예를 들면 
const app = express 와 같이 기본적인 틀을 정해줄때 쓰는 변수 

// 라우트 모듈
app.get('/',fuction(req, res){ 

})
이것과 같이 라우팅 해주는 모듈

// 실행로직
app.use(cors()) 와 같이 실행할때 필요한 모듈 


// listen 꼭 정의
app.listen(port, ()=>{
    console.log("Start Server!!")
})
}
```

- 다음으로 알아볼 건 use 메서드를 사용해서 내가 이 서버를 실행하기 전에 미리 설정해놓는 설정값이라고 생각 하면 됩니다 

```js
// 외부 모듈
const express = require('express')
const cors = require('cors')

//전역 변수
const app = express();
const port = 5000;
const ip = 'localhost';
 
//실행 로직
app.use(express.json()); //espress는 json형식으로 할거라고 설정
app.use(cors()); // 이 서버의 cors는 이렇게 설정할거라고 설정 
```
위와같이 외부 모듈과 전역변수를 적용해주고 실행로직을 작성 해놓습니다 


* express의 장점 

- express에서는 http 메서드들이이미 구현이 되어 있어서 app.메서드 를 통해서 요청을 받아 올 수 있고 cors를 설치하면 따로 corsHeader를 작성 할 필요가 없어서 저 cors 한줄로 cors요청을 다 해결 할 수 있습니다 . 

- 상태 처리를 따로 해주지 않아도 서버의 상태에 따라서 상태처리를 해줍니다 ! 

- express 에서는 data 값을 req.body 로 받아와서 훨씬 더 간편하게 사용 할 수 있습니다 ! 

* 정리 
- express의 기본적인 구조를 분류해서 작성하기
- 서버를 실행할 때에 미리 설정 해놓고 싶은 설정 값이  use메서드를 사용하여 설정해놓기 
- POST요청에서 req.body를 활용해서 응답 로직을 더 깔끔하게 보낼 수 있다 
- cors를 사용해서 불필요한 CorsHeader 작성을 하지 않아도 된다 
