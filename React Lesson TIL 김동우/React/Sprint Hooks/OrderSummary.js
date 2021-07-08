import React from 'react'

// 사이트 오른쪽에 주문합계를 표현해주는 컴포넌트입니다.
export default function OrderSummary({ totalQty, total }) {
  return (
    <div id="order-summary-container">
      <h4>주문 합계</h4>
      <div id="order-summary">
        총 아이템 개수 : <span className="order-summary-text">{totalQty} 개</span>
        <hr></hr>
        <div id="order-summary-total">
          합계 : <span className="order-summary-text">{total} 원</span>
        </div>
      </div>
    </div >
  )
}
