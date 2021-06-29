import flightList from '../resource/flightList'
import fetch from 'node-fetch'

if (typeof window !== "undefined") {
  localStorage.setItem('flight', JSON.stringify(flightList));
}

export function getFlight(filterBy = {}) {
  //fetch 를 이용하여 API를 받아와야 합니다
  //API를 받아 올 때에는 json이 담겨있는 url을 가져와야 합니다
  //코드를 편하게 쓰기위해 json이 담겨있는 API url을 변수로 지정해 둡니다
  //값이 변경이 되니 상태 업데이트가 가능한 let 으로 url 을 선언해준다
  let response = "http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?";
  if(filterBy.departure && filterBy.destination){
    response = response + `departure=${filterBy.departure}&destination=${filterBy.destination}`
  }
  //API url을 변수로 지정을 해 주고 
  //API URL 에서는 GET요청을 보낼 수 있는데 GET요청을 flight으로 전체의 요청도 보낼 수 있지만 추가적인 파라미터 요청도 가능하여
  //파라미터의 값을 검색 해볼 수도 있습니다. EX.
  // 'http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?departure=ICN&destination=CJU'
  // 'http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?'이 부분까지는 response라는 변수로 할당을 해주었기 때문에 추가적인 파라미터를 요청하는 부분만 값이 들어올때마다 만들어서 할당을 해준 URL의 상태를 업데이트 해줄 수 있습니다 
  //따라서 뒤에있는 파라미터 요청부분만 만들어주면 됩니다.
  // 위와같은 식으로 새로운 파라미터를 검색 해볼 수 있는 URL로 filterBy에 departure값과 destination 값이 입력되면 
  // 새로운 파라미터를 요청하여 검색 할 수 있는 URL을 만들어 볼 수 있고 상태를 업데이트 해줄 수 있습니다

  return fetch(response)
  .then((res) => {return res.json()})
  .then((data) => {return data})
  .catch((err) => {return err})
  //fetch라는 메소드를 사용하여 업데이트 된 response(API URL)을 다시 data로써 받아 올 수 있게 가공을해주는 작업을 합니다.
  //fetch를 통해 들어온 데이터를 json의 형식으로 바꾸어야 데이터를 사용 가능하기 때문에 fetch의 response의 값을 then으로 받아 
  //res라는 변수에 담아준 다음에 json형식으로 바꾸어주는 json()메소드를 사용하여 json형식으로 바꾸어서 리턴을 해줍니다.
  //그 뒤에 json형식으로 바뀐 데이터를 다시 then으로 이어받아 data라는 변수에 할당해주어 리턴을 해주었습니다 . 
  //fetch로 받아온 데이터는 promise객체를 리턴하기 때문에 예기치못한 에러를 잡기위해 .catch메소드를 사용하여 에러를 미리 방지해줍니다.

}

