const flights = require('../repository/flightList');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 데이터 혹은 요청 된 flight_uuid, phone 값과 동일한 예약 데이터를 조회합니다.
  findById: async (req, res) => {
    /* req.query는 파라미터를 key값으로 조건값을 value로 갖는 객체를 반환한다.
    (example)
    req.query = { flight_uuid: 'af6fa55c-da65-47dd-af23-578fdba50bed' }
    */
    // GET  /book?flight_uuid=uuid값 같이 쿼리파라미터를 이용하여 조회시 필터링
    if(req.query.flight_uuid !== undefined) {
      const bList = booking.filter((data)=>{
        return data.flight_uuid === req.query.flight_uuid;
      })
      return res.status(200).json(bList);
    }
    // GET  /book?phone=phone값 같이 쿼리파라미터를 이용하여 조회시 필터링
    // 쿼리파라미터로 조회시 phone은 unique해서 1개만 조회가 되기 때문에
    // (서버 리소스내 여러 값들중 phone(key)의 value값이 중복되지 않음)
    // filter로 필터링한 배열에서 0번째 인덱스값을 반환해주면 된다.(response 반환값이 객체)
    else if(req.query.phone !== undefined) {
      const bList = booking.filter((data)=>{
        return data.phone === req.query.phone;
      })
      return res.status(200).json(bList[0]);
    }
    // GET  /book 같이 전체 조회시 예약된 전체 반환
    else return res.status(200).json(booking);
    
  },


  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: async (req, res) => {
    
    if(req.body !== undefined){
      booking.push(req.body)
    }
    
    return res.status(201).json({ message: 'Create success!' });
  },

  // [DELETE] /book?phone={phone} 요청을 수행합니다.
  // 요청 된 phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteById: async (req, res) => {
  
    if(req.query !== undefined) {
      // 우선 현재 리소스중 해당 쿼리파라미터에 해당하지 않는 나머지 값들을 필터링함 
      // --> 제거하려는 데이터만 제외한 나머지 값들로 구성된 리스트가 반환
      const deleteList = booking.filter((data)=>{
        return data.phone !== req.query.phone;
      })
      // 데이터를 제거한 리스트를 다시 서버가 관리하는 리소스에 재할당(원하는 데이터만 제거)
      booking = deleteList;
    }
    
    return res.status(200).json(booking);
  }
};