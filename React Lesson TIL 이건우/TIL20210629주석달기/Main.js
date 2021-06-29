import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getFlight } from '../api/FlightDataApi'
import FlightList from './component/FlightList'
import LoadingIndicator from './component/LoadingIndicator'
import Search from './component/Search'
import Debug from './component/Debug'

import json from '../resource/flightList'

export default function Main() {
  const [condition, setCondition] = useState({
    departure: 'ICN'
  })
  const [flightList, setFlightList] = useState(json)
  
  const search = ({ departure, destination }) => {
    if (condition.departure !== departure || condition.destination !== destination) {
      console.log('condition 상태를 변경시킵니다')
      setCondition({departure, destination}) //search함수는 condition의 상태를 setCondition으로 변경해주는 함수이다 .
      // TODO:
    }
  }

  useEffect(() => {
    getFlight(condition)
    .then(data => {setFlightList(data)})
  }, [condition])

  //useEffect는 처음 실행이 되거나 상태가 업데이트 될 때 마다 실행이 되는데 
  //useEffect가 처음 실행 될때 getFlight(condition) 초기값으로 지정해준 [condition]이 실행이 되고
  // 상태가 업데이트 되게 되면
  // data의 값이 바뀌면 다시 useEffect가 실행되어 바뀐 값으로 setFlightList에 값을 전달 해줍니다

 

  global.search = search // 실행에는 전혀 지장이 없지만, 테스트를 위해 필요한 코드입니다. 이 코드는 지우지 마세요!

  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          여행가고 싶을 땐, States Airline
        </h1>
        <Search onSearch = {search} /> 
        {/* Search 컴포넌트에 search라는 함수를 onSearch 라는 이름으로 props로 전달 해준다   */}
        <div className="table">
          <div className="row-header">
            <div className="col">출발</div>
            <div className="col">도착</div>
            <div className="col">출발 시각</div>
            <div className="col">도착 시각</div>
            <div className="col"></div>
          </div>
          <FlightList list={flightList} />
        </div>

        <div className="debug-area">
          <Debug condition={condition} />
        </div>
      </main>
    </div>
  )
}
