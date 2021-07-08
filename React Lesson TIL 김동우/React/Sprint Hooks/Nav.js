import React from 'react';
import { Link } from 'react-router-dom';

//말그래도 네이게이션 바입니다.
function Nav( { cartItems}) {
  return (
    <div id="nav-body">
      <span id="title">
        <img id="logo" src="../logo.png" alt="logo" />
        <span id="name">CMarket</span>
      </span>
      <div id="menu">
        {/* link로 연결이 되어있어 상품리스트, 또는 장바구니 페이지로 이동할수 있습니다. */}
        <Link to="/">상품리스트</Link>
        <Link to="/shoppingcart">
          {/* 카트아이템에 길이를 입력받아 장바구니의 종류의 개수를 알려줍니다. */}
          장바구니<span id="nav-item-counter">{cartItems.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
