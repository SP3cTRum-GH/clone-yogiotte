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
        </>
    )
}

export default OverView