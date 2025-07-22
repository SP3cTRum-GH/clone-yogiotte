import React, { useState } from "react";
import "./OverseasCard.css";

const OverseasCard = () => {
  const [showAll, setShowAll] = useState(false);
  const items = [...Array(7)];

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className={showAll ? "show-card" : "OverseasCard"}>
        <h2 id="parlor-select">객실 선택</h2>
        {items.map((_, i) => {
          return (
            <div className="overseas-card">
              <p>스탠다드 룸, 더블베드[금연]</p>
              <div className="overseas-wrap">
                <div>
                  <img
                    src="https://image.withstatic.com/39/336/57/d59adfec6ccb4564838e527cd53e69f1.jpg?ext=webp"
                    alt="숙소이미지"
                  />
                  <p>성인 2명</p>
                </div>
                <div className="overseas-container">
                  <div className="overseas-info">
                    <h4>
                      스탠다드 더블(금연) [얼리버드 30일전] 스탠다드 플로어
                      (룸온리)
                    </h4>

                    <div className="overseas-guide">
                      <div className="free-cancel">
                        <span>무료취소 - 기간까지</span>
                        <p>조식 불포함</p>
                        <p>더블 베드 1개</p>
                      </div>

                      <div className="overseas-price">
                        <h4>
                          144,153<span>원</span>
                        </h4>
                        <p>총 1박</p>
                        <p>세금 및 봉사료 포함</p>
                        <p>남은 객실 2개</p>
                        <button>예약하기</button>
                      </div>
                    </div>
                  </div>

                  <div className="overseas-info">
                    <h4>
                      스탠다드 더블(금연) [얼리버드 30일전] 스탠다드 플로어
                      (룸온리)
                    </h4>

                    <div className="overseas-guide">
                      <div className="free-cancel">
                        <span>무료취소 - 기간까지</span>
                        <p>조식 불포함</p>
                        <p>더블 베드 1개</p>
                      </div>

                      <div className="overseas-price">
                        <h4>
                          144,153<span>원</span>
                        </h4>
                        <p>총 1박</p>
                        <p>세금 및 봉사료 포함</p>
                        <p>남은 객실 2개</p>
                        <button>예약하기</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {items.length > 5 && (
        <div className="button-box">
          <button
            className={showAll ? "hiden-btn" : "show-btn"}
            onClick={handleShowAll}
          >
            전체보기
          </button>
        </div>
      )}
    </>
  );
};

export default OverseasCard;
