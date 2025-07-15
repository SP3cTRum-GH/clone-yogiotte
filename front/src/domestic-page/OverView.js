import React from 'react'
import "./OverView.css";

const OverView = () => {
    return (
        <>
            <div>
                <ul className='img-container'>
                    <li>
                        <img src="http://image.goodchoice.kr/affiliate/2025/04/09/67f620fe253b7.png" alt="숙소이미지" />
                    </li>
                    <li>
                        <img src="http://image.goodchoice.kr/affiliate/2025/06/04/683ff7186edaf.jpg" alt="숙소이미지" />
                    </li>
                    <li>
                        <img src="http://image.goodchoice.kr/affiliate/2025/06/04/683ff6e43aa63.jpg" alt="숙소이미지" />
                    </li>
                    <li>
                        <img src="http://image.goodchoice.kr/affiliate/2025/06/04/683ff71ad7edf.jpg" alt="숙소이미지" />
                    </li>
                    <li>
                        <img src="http://image.goodchoice.kr/affiliate/2025/06/04/683ff7186edaf.jpg" alt="숙소이미지" />
                    </li>
                </ul>
            </div>
            <div className='title-container'>
                <div className='title'>
                    <p>호텔 특급</p>
                    <h1>세인트존스 호텔</h1>
                </div>
                <div className="like-price">
                    <p>❤️</p>
                    <h2><span>183,903</span>원~</h2>
                </div>
            </div>

            <div className='info-container'>
                <div className='review-card card'>
                    <div className='rating'>
                        <p>★9.1</p>
                        <h2>18,515명 평가 {">"} </h2>
                    </div>
                    <p>체크인부터 체크아웃까지 전반적으로 정말 만족스러운 숙박 경험이었습니다. 객실은 생각보다 훨씬 넓고 쾌적했으며, ...</p>
                </div>

                <div>
                    <div className='card'>
                        <h2>서비스 및 부대시설 {">"} </h2>
                    </div>
                    <p>공항 이동 교통수단</p>
                    <p>무료 Wi-Fi</p>
                </div>

                <div className='info-location'>
                    <div className='card'>
                        <h2>위치 정보 {">"} </h2>
                    </div>
                    <p>강원 강를시 강문동 1-1</p>
                    <p>강릉 강문해변 앞</p>
                </div>
            </div>
        </>
    )
}

export default OverView