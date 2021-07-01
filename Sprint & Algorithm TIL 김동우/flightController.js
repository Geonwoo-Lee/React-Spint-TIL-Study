const flights = require('../repository/flightList');
module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 
  // 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {
    
    // req.query === {
    //   departure_times: '2021-12-03T12:00:00',
    //   arrival_times: '2021-12-03T12:00:00'
    // }
    // req.query = { departure: 'CJU', destination: 'ICN' }
    
    // 만약 파라미터에 ?departure_times=2021-12-02T12:00:00&arrival_times=2021-12-03T12:00:00
    // 작성한 경우를 필터링
    if(req.query.departure_times !== undefined && req.query.arrival_times !== undefined) {
      const tList = flights.filter((data)=> {
        return data.departure_times === req.query.departure_times && 
              data.arrival_times === req.query.arrival_times;
      });
      return res.status(200).json(tList);
    }
    // 만약 파라미터에 ?departure=ICN&destination=CJU 로 작성한 경우 필터링
    else if(req.query.destination !== undefined && req.query.departure !== undefined) {
      const dList = flights.filter((data)=> {
        return data.destination === req.query.destination && 
               data.departure === req.query.departure;
      });
      return res.status(200).json(dList);
    }
    
    //쿼리 파라미터가 없을 경우 모든 리스트를 출력
    return res.json(flights);
  },
  // [GET] /flight/{:id}
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => {
    //TODO: 
    if(req.url !== undefined){
      const iList = flights.filter((data) =>{
        return `/${data.uuid}` === req.url
      })
      return res.status(200).json(iList)
    }


  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요청 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    let data;

    if(req.body !== undefined) {
      const pList = flights.map((el)=>{
        // url과 일치하는 id 값을 가진 요소만 변경
        if(`/${el.uuid}` === req.url) {
          // departure(출발지)가 있는 경우 request의 body값으로 변경
          if(req.body.departure !== undefined) {
            el.departure = req.body.departure;
          }
          // destination가 있는 경우 request의 body값으로 변경
          if(req.body.destination !== undefined) {
            el.destination = req.body.destination;
          }
          // departure_times가 있는 경우 request의 body값으로 변경	
          if(req.body.departure_times !== undefined) {
            el.departure_times = req.body.departure_times;
          } 
          // arrival_times가 있는 경우 request의 body값으로 변경
          if(req.body.arrival_times !== undefined) {
            el.arrival_times = req.body.arrival_times;
          }
          // 만약 body에 해당 키값이 없으면 값을 변경하지 않고 그대로 유지
          // response가 변경된 요소를 값으로 주기 때문에 response의 body에 들어갈 값에 변경된 요소를 할당
          data = el;
          return el;
        }
        // 그외는 변경하지 않음
        else return el;
      })
    
    }

    

    
    return res.status(200).json(data);
  }
};