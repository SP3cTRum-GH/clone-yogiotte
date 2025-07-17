import React from 'react'
import "./DomesticItemCard.css"

const DomesticItemCard = () => {
    return (
        <div className='domestic-item-card'>
            <div>
                <img src="http://image.goodchoice.kr/affiliate/2021/04/29/6089ff1e313d6.jpg" alt="숙소이미지" />
            </div>

            <div className='item-container'>
                <div className='item-title'>
                    <h2>슈페리얼 헐리우드(노오션뷰)</h2>
                    <p>상세정보 {" > "}</p>
                </div>

                <div className='item-guide'>
                    <div>
                        <p>무료취소 불가</p>
                        <p>입실 16:00 퇴실 11:00</p>
                    </div>
                    <div className='price-reservation'>
                        <h2>160,000원</h2>
                        <button>객실 예약</button>
                    </div>
                </div>

                <div className='item-event'>
                    <div>
                        <p>객실정보</p>
                        <p>이벤트</p>
                        <p>패키지</p>
                    </div>

                    <div>
                        <p>기준2인 최대2인</p>
                        <p>오픈런 강문호두과자 18구 제공</p>
                        <p>월~금 체크인 시 13시 얼리 체크인 제공</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DomesticItemCard