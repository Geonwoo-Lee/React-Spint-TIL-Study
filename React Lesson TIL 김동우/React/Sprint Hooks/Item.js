import React from 'react'

export default function Item({ item, handleClick }) {

  //상품리스트에서 각각의 div태그들로 영역을 나누어 렌더링 해주는부분
  return (
    <div key={item.id} className="item">
      <img className="item-img" src={item.img} alt={item.name}></img>
      <span className="item-name">{item.name}</span>
      <span className="item-price">{item.price}</span>
      <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button>
    </div>
  )
}
