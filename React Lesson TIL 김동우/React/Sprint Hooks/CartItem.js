import React from 'react'

//장바구니 페이지에 props로 전달 받은 정보들이 담겨있다
export default function CartItem({
  item,
  checkedItems,
  handleCheckChange,
  handleQuantityChange,
  handleDelete,
  quantity
}) {
  return (
    <li className="cart-item-body">
      <input
        type="checkbox"
        className="cart-item-checkbox"
        onChange={(e) => {
          handleCheckChange(e.target.checked, item.id)
        }}
        checked={checkedItems.includes(item.id) ? true : false} >
      </input>
      <div className="cart-item-thumbnail">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-title" data-testid={item.name}>{item.name}</div>
        <div className="cart-item-price">{item.price} 원</div>
      </div>
        {/* input 태그에 타입을 number로 지정을 해주면 
          버튼을 누를때 마다 value값에 저장이 되고 value 값은 수량에 지정이 되어있기
          때문에 상태관리 메소드가 필요하지 않다.
        */}
      <input
        type="number"
        min={1}
        className="cart-item-quantity"
        value={quantity}
        onChange={(e) => {
          // event.target.value 는 클릭한 tag에 value 속성이 있을 때만 undefined가 아닌 값을 가진다.
          handleQuantityChange(Number(e.target.value), item.id)
        }}>
      </input>
      <button className="cart-item-delete" onClick={() => { handleDelete(item.id) }}>삭제</button>
    </li >
  )
}
