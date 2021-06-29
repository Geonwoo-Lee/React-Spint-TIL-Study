import { useState } from 'react'

function Search({onSearch}) { // props로 전달된 객체 onSearch함수를 받아온다
  const [textDestination, setTextDestination] = useState('')

  const handleChange = (e) => {
    setTextDestination(e.target.value.toUpperCase())
  }

  const handleKeyPress = (e) => {
    if (e.type === 'keypress' && e.code === 'Enter') {
      handleSearchClick()
    }
  }

  const handleSearchClick = () => {
    console.log('검색 버튼을 누르거나, 엔터를 치면 search 함수가 실행됩니다')
    onSearch({
      departure: "ICN",
      destination: textDestination
    })// handleSearchClick이라는 함수가 실행될 때 onSearch 함수를 실행하는데
    // onSearch 함수는 바뀐값으로 상태변화로 시켜주는 함수이다 따라서 
    // onChange함수로 들어온 값은 textDestination으로 인해 값이 바뀌니까 
    //그 값을 onSearch 함수를 이용하여 새로운 값으로 바꾸어준다
    // TODO:
  }

  return <fieldset>
    <legend>공항 코드를 입력하고, 검색하세요</legend>
    <span>출발지</span>
    <input id="input-departure" type="text" disabled value="ICN"></input>
    <span>도착지</span>
    <input id="input-destination" type="text" value={textDestination} onChange={handleChange} placeholder="CJU, BKK, PUS 중 하나를 입력하세요" onKeyPress={handleKeyPress} />
    <button id="search-btn" onClick={handleSearchClick}>검색</button>
  </fieldset>
}

export default Search