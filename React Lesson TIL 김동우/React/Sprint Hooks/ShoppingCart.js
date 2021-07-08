import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'

export default function ShoppingCart({ items, cartItems ,setCartItems }) {
  const [checkedItems, setCheckedItems] = useState(cartItems.map((el) => el.itemId))

  //개별 선택 버튼 핸들링
  const handleCheckChange = (checked, id) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    }
    else {
      setCheckedItems(checkedItems.filter((el) => el !== id));
    }
  };
  //전체선택 버튼 핸들링
  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckedItems(cartItems.map((el) => el.itemId))
    }
    else {
      setCheckedItems([]);
    }
  };

  //수량을 변경하는 핸들링
  const handleQuantityChange = (quantity, itemId) => {
    let findItem = cartItems.find((item) => item.itemId === itemId);
      
    findItem.quantity = quantity;
    setCartItems([...cartItems]);
}

  //삭제하는 핸들링
  const handleDelete = (itemId) => {
    setCheckedItems(checkedItems.filter((el) => el !== itemId))
    setCartItems(cartItems.filter((item) => item.itemId !== itemId));
  }

  //checkbox로 선택이 된 아이템들의 가격을 합친것(양방향)
  const getTotal = () => {
    let cartIdArr = cartItems.map((el) => el.itemId)
    let total = {
      price: 0,
      quantity: 0,
    }
    for (let i = 0; i < cartIdArr.length; i++) {
      if (checkedItems.indexOf(cartIdArr[i]) > -1) {
        let quantity = cartItems[i].quantity
        let price = items.filter((el) => el.id === cartItems[i].itemId)[0].price

        total.price = total.price + quantity * price
        total.quantity = total.quantity + quantity
      }
    }
    return total
  }

  const renderItems = items.filter((el) => cartItems.map((el) => el.itemId).indexOf(el.id) > -1)
  const total = getTotal()

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">장바구니</div>
        <span id="shopping-cart-select-all">
          <input
            type="checkbox"
            checked={
              checkedItems.length === cartItems.length ? true : false
            }
            onChange={(e) => handleAllCheck(e.target.checked)} >
          </input>
          <label >전체선택</label>
        </span>
        <div id="shopping-cart-container">
        {/* 쇼핑 카트의 길이가 있을 때와 없을 때를 구분해준다.
        없을때는 장바구니에 아이템이 없다고 표현을 해준다.
        */}
          {!cartItems.length ? (
            <div id="item-list-text">
              장바구니에 아이템이 없습니다.
            </div>
          ) : (
              <div id="cart-item-list">
                {renderItems.map((item, idx) => {
                  //카트에 아이템이 담겼을 때 각각의 핸들링을 통해 
                  //아이템이 보여지고 아이템의 각각의 이벤트들을 사용 할 수 있는것을 필터링을 통해 보여준다.
                  const quantity = cartItems.filter(el => el.itemId === item.id)[0].quantity
                  return <CartItem
                    key={idx}
                    handleCheckChange={handleCheckChange}
                    handleQuantityChange={handleQuantityChange}
                    handleDelete={handleDelete}
                    item={item}
                    checkedItems={checkedItems}
                    quantity={quantity}
                  />
                })}
              </div>
            )}
            {/* OrderSummy의 컴포넌트에 props를 통해 총가격과 총갯수를 사용하도록 렌더링하도록 만들어준다. */}
          <OrderSummary total={total.price} totalQty={total.quantity} />
        </div>
      </div >
    </div>
  )
}
