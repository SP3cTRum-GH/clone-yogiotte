import { useEffect, useRef, useState } from "react";
import "./LodgingCard_module.css";

const hotelList = [
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/04/09/67f620fe253b7.png",
    type: "블랙 특급 호텔",
    name: "당일특가 세인트존스 호텔",
    location: "강릉시",
    desciption: "강릉 강문해변 앞",
    like: true,
    rating: "9.1",
    ratingCount: "9,000",
    price: "57,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/05/21/682d9e4611b96.jpg",
    type: "프리미엄 호텔",
    name: "라마다 서울 호텔",
    location: "서울 강남구",
    desciption: "비즈니스 중심지에 위치",
    like: false,
    rating: "8.5",
    ratingCount: "5,200",
    price: "84,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/06/02/683c768b436bc.jpg",
    type: "리조트",
    name: "해운대 씨클라우드",
    location: "부산 해운대구",
    desciption: "해운대 바닷가 바로 앞",
    like: true,
    rating: "9.0",
    ratingCount: "7,300",
    price: "98,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/01/31/679c8f04ecb79.jpg",
    type: "모텔",
    name: "호텔더디자이너스",
    location: "대전 중구",
    desciption: "현대적인 인테리어 감각",
    like: false,
    rating: "8.1",
    ratingCount: "1,400",
    price: "45,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/05/01/hotel4.png",
    type: "부티크 호텔",
    name: "호텔 아비뉴 7",
    location: "인천 연수구",
    desciption: "송도 중심 상권 위치",
    like: true,
    rating: "8.9",
    ratingCount: "3,800",
    price: "67,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/05/01/hotel5.png",
    type: "펜션",
    name: "제주 해담은 펜션",
    location: "제주 서귀포시",
    desciption: "오션뷰 감성 숙소",
    like: true,
    rating: "9.3",
    ratingCount: "2,600",
    price: "74,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/05/01/hotel6.png",
    type: "비즈니스 호텔",
    name: "익스프레스 명동 호텔",
    location: "서울 중구",
    desciption: "명동역 도보 3분",
    like: false,
    rating: "8.7",
    ratingCount: "4,900",
    price: "88,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/05/01/hotel7.png",
    type: "풀빌라",
    name: "거제 라움풀빌라",
    location: "경남 거제시",
    desciption: "개별 수영장 완비",
    like: true,
    rating: "9.6",
    ratingCount: "1,100",
    price: "150,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/04/09/67f620fe253b7.png",
    type: "블랙 특급 호텔",
    name: "당일특가 세인트존스 호텔",
    location: "강릉시",
    desciption: "강릉 강문해변 앞",
    like: true,
    rating: "9.1",
    ratingCount: "9,000",
    price: "57,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/05/21/682d9e4611b96.jpg",
    type: "프리미엄 호텔",
    name: "라마다 서울 호텔",
    location: "서울 강남구",
    desciption: "비즈니스 중심지에 위치",
    like: false,
    rating: "8.5",
    ratingCount: "5,200",
    price: "84,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/06/02/683c768b436bc.jpg",
    type: "리조트",
    name: "해운대 씨클라우드",
    location: "부산 해운대구",
    desciption: "해운대 바닷가 바로 앞",
    like: true,
    rating: "9.0",
    ratingCount: "7,300",
    price: "98,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/01/31/679c8f04ecb79.jpg",
    type: "모텔",
    name: "호텔더디자이너스",
    location: "대전 중구",
    desciption: "현대적인 인테리어 감각",
    like: false,
    rating: "8.1",
    ratingCount: "1,400",
    price: "45,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/04/09/67f620fe253b7.png",
    type: "블랙 특급 호텔",
    name: "당일특가 세인트존스 호텔",
    location: "강릉시",
    desciption: "강릉 강문해변 앞",
    like: true,
    rating: "9.1",
    ratingCount: "9,000",
    price: "57,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/05/21/682d9e4611b96.jpg",
    type: "프리미엄 호텔",
    name: "라마다 서울 호텔",
    location: "서울 강남구",
    desciption: "비즈니스 중심지에 위치",
    like: false,
    rating: "8.5",
    ratingCount: "5,200",
    price: "84,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/06/02/683c768b436bc.jpg",
    type: "리조트",
    name: "해운대 씨클라우드",
    location: "부산 해운대구",
    desciption: "해운대 바닷가 바로 앞",
    like: true,
    rating: "9.0",
    ratingCount: "7,300",
    price: "98,000",
  },
  {
    img: "http://image.goodchoice.kr/resize_564x338/affiliate/2025/01/31/679c8f04ecb79.jpg",
    type: "모텔",
    name: "호텔더디자이너스",
    location: "대전 중구",
    desciption: "현대적인 인테리어 감각",
    like: false,
    rating: "8.1",
    ratingCount: "1,400",
    price: "45,000",
  },
];

function LodgingCard() {
  const [cardList, setCardList] = useState(hotelList);
  const [currentIndex, setCurrentIndex] = useState(0);

  const listRef = useRef(null);

  const scrollToIndex = (pageIndex) => {
    const CARD_WIDTH = 240;
    const GAP = 40;
    const CARDS_PER_PAGE = 4;

    const scrollX = pageIndex * (CARD_WIDTH + GAP) * CARDS_PER_PAGE;
    listRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
    setCurrentIndex(pageIndex);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    const maxIndex = Math.ceil(cardList.length / 4) - 1;
    if (currentIndex < maxIndex) {
      scrollToIndex(currentIndex + 1);
    }
  };

  return (
    <div className="wrap">
      <button className="left-btn" onClick={scrollLeft}>
        ◄
      </button>
      <ul ref={listRef}>
        {cardList.map((data, idx) => {
          return (
            <li key={idx} className="container">
              <div className="img-box">
                <img src={data.img} alt="숙소이미지" />
              </div>

              <div className="info">
                <div className="info-box">
                  {/* <h4>{console.log(data.type.split(" "))}</h4> */}
                  <h3>{data.name}</h3>
                  <p className="location">
                    <span>{data.location}</span> ・ {data.desciption}
                  </p>
                </div>
                <a href="">{data.like ? "♥" : "♡"}</a>
              </div>

              <div className="rating">
                <p className="star">★ {data.rating}</p>
                <span>{data.ratingCount}명 평가</span>
              </div>

              <div className="price">
                <p>
                  {data.price}
                  <span>원</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="right-btn" onClick={scrollRight}>
        ►
      </button>
    </div>
  );
}

export default LodgingCard;
