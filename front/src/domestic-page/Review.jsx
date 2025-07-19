import React, { useState } from "react";
import "./Review.css";
import Star from "../components/Star";
import StarRating from "../components/StarRating";

const Review = () => {
  const [tempRate1, setTempRate1] = useState(3);
  const [tempRate2, setTempRate2] = useState(2);

  return (
    <div className="review-container">
      <h2 id="real-review">
        ⭐️ 리얼 리뷰 9.2 <span>3,596명 평가 3,596개 리뷰</span>
      </h2>

      <hr />
      <div className="review-box">
        <div className="review-profile">
          <img
            src="https://i.pinimg.com/474x/27/6f/46/276f46d26122f515a4362993e0bfd141.jpg"
            alt="프로필"
          />

          <div>
            {/* <p>베스트리뷰</p> */}
            <p className="nick-name">닉네임</p>
            <p className="review-count">리뷰 48 사진 100 장소 30</p>
          </div>
        </div>

        <div className="review-content">
          <div>
            {tempRate1}
            <br></br>
            {tempRate2}
            <StarRating
              onSetRate={setTempRate1}
              defaultRate={tempRate1}
              read={true}
            />
            <StarRating
              onSetRate={setTempRate2}
              defaultRate={tempRate2}
              read={false}
            />
            <p>1개월 전</p>
          </div>

          <div className="review-img">
            <img
              src="https://image.withstatic.com/94/151/166/5dd331e6097a42e39b2f2ef4afcb9ca0.jpg?ext=webp"
              alt="리뷰 사진"
            />
            <img
              src="https://image.withstatic.com/94/151/166/5dd331e6097a42e39b2f2ef4afcb9ca0.jpg?ext=webp"
              alt="리뷰 사진"
            />
          </div>

          <div>
            <p className="content">
              8시 정도 도착했는데 2,3,4층 주차장은 거의 주차공간이 없을 정도로
              차가 많았습니다. 체크인시 직원분들 모두 친절하게 맞아주셨고,
              카페에서 월컴 드링크도 제공해 주셨습니다. 이용하지는 않았지만
              객실내에 세탁기와 인덕션이 있어서 가족 여행으로 좋겠다 싶은 생각이
              들었습니다. 욕실 크기는 적절했지만 샤워기는 자주 손을 볼 필요가
              있어보였습니다. 객실내 조명도 밝고 만족스러웠는데 독서등 두 개 중
              하나가 들어오지 않아서 저녁에 책 읽을 때 불편했습니다. 티브이에
              문제가 있어서 손 봐주셨는데 체크인 하기 전에 미리 점검하면 좋을 것
              같습니다. 1층에 편의점 오락실이 있고, 300미터 거리에 마트가 있어서
              간식거리 사기는 좋습니다. 그리고 바닷가로 산책 나가기도 적절한
              거리여서 호텔의 장점인 것 같습니다. 1박 후 청소도 아주 깔끔히
              해주셨고, 침구류 수건 등도 세탁 상태가 좋았습니다. 샴푸 린스
              바디워시 등은 잘 구비되어 있었지만 짜서 쓰기가 좀 버거워서 통을
              바꾸면 어떨까 조심스럽게 제안해 봅니다. 전반적으로 호텔의 위치나
              객실 모두 마음에 들어서 다음 여수 여행 때도 여기로 오고 싶네요.
              고층을 배정해 주셔서 야경도 잘 보고 갑니다. 감사합니다.
            </p>

            <div className="answer-box">
              <h3>
                제휴점 답변 <span>날짜</span>
              </h3>
              <p>감사합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
