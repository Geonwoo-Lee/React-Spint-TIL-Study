import React from 'react';
import Item from '../components/Item';
function ItemListContainer({ items, cartItems, setCartItems }) {
  //find() 메소드를 사용하면 filter를 사용했을 때 보다 더욱 간편하다.
  //find() [0]저절로 0번째 인덱스를 반환하지만 filter를 사용하게 되면 직접 인덱스값을 지정해줘야한다.

//장바구니에 아이템이 들어가는 핸들링
  const handleClick = (e, itemId) => {
    let found = cartItems.find((item) => item.itemId === itemId);
    if (found === undefined) {
      found = { itemId, quantity: 1 };
      cartItems.push(found);
      //장바구니에 itemId 값이 동일하면 그 값을 넣어주고
    } else {
      //그게 아니면 수량을 더해준다.
      found.quantity++;
    }
    //speard operator 연산자를 사용해서 새로운배열을 만들어준다.
    //왜냐하면 원본 배열값이 바뀌지 않아야하기 때문
    setCartItems([...cartItems]);
  }
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => <Item item={item} key={idx} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;