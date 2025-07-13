import { useState, useRef, useEffect } from "react";
import "./EventCard_module.css";

const cardList = [
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e5026_dnpqqosj_1200x480_20250702112642.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e4224_dnpqqosj_1200x480_20241031170303.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e4935_dnpqqosj_1200x480_2_20250627151214.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e4224_dnpqqosj_1200x480_20241031170303.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e5026_dnpqqosj_1200x480_20250702112642.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e4224_dnpqqosj_1200x480_20241031170303.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e5026_dnpqqosj_1200x480_20250702112642.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e4224_dnpqqosj_1200x480_20241031170303.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e5026_dnpqqosj_1200x480_20250702112642.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e4224_dnpqqosj_1200x480_20241031170303.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e4224_dnpqqosj_1200x480_20241031170303.png",
  },
  {
    imgSrc:
      "https://image.goodchoice.kr/resize_768x308/exhibition/cms/e4224_dnpqqosj_1200x480_20241031170303.png",
  },
];

function EventCard() {
  const [list, setList] = useState(cardList); // 이미지 리스트
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 페이지 인덱스

  const listRef = useRef(null); //  <ul> 태그 직접 조작

  const scrollToIndex = (pageIndex) => {
    const CARD_WIDTH = 324;
    const GAP = 30;
    const CARDS_PER_PAGE = 3;

    const scrollX = pageIndex * (CARD_WIDTH + GAP) * CARDS_PER_PAGE;
    listRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
    setCurrentIndex(pageIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight(); // 5초마다 오른쪽으로 이동
    }, 5000);
    return () => clearInterval(interval); // 언마운트 시 제거
  }, [currentIndex]);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    } else {
      scrollToIndex(currentIndex + 3);
    }
  };

  const scrollRight = () => {
    const maxIndex = Math.ceil(list.length / 3) - 1;
    if (currentIndex < maxIndex) {
      scrollToIndex(currentIndex + 1);
    } else {
      scrollToIndex(0);
    }
  };

  return (
    <div className="carousel-container">
      <button className="scroll-btn left" onClick={scrollLeft}>
        ◄
      </button>
      <ul className="carousel-list" ref={listRef}>
        {list.map((card, idx) => (
          <li key={idx} className="event-container">
            <img src={card.imgSrc} alt="이미지" />
          </li>
        ))}
      </ul>
      <button className="scroll-btn right" onClick={scrollRight}>
        ►
      </button>
      <div className="indicator-wrapper">
        {Array.from({ length: Math.ceil(list.length / 3) }).map((_, idx) => (
          <span
            key={idx}
            className={`indicator-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default EventCard;
