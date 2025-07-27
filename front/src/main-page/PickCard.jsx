import { useState, useRef } from "react";
import "./PickCard_module.css";

const list = [
  {
    type: "신규입점",
    img: "https://i.namu.wiki/i/SJU_Jxqyocs1qbSa9Eh6N7Rlpi1luHi0yLmU19GbcUXa27Q-6snYSoHW0cxteDh-egtRiTkc_SgtJEE_bJcFxA.webp",
    title: "청주 도심을 한눈에",
    name: "엔도프 호텔1",
    content: "중부권 도심 속 새로운 휴양지",
  },
  {
    type: "신규입점",
    img: "https://i.namu.wiki/i/SJU_Jxqyocs1qbSa9Eh6N7Rlpi1luHi0yLmU19GbcUXa27Q-6snYSoHW0cxteDh-egtRiTkc_SgtJEE_bJcFxA.webp",
    title: "청주 도심을 한눈에",
    name: "엔도프 호텔2",
    content: "중부권 도심 속 새로운 휴양지",
  },
  {
    type: "신규입점",
    img: "https://i.namu.wiki/i/SJU_Jxqyocs1qbSa9Eh6N7Rlpi1luHi0yLmU19GbcUXa27Q-6snYSoHW0cxteDh-egtRiTkc_SgtJEE_bJcFxA.webp",
    title: "청주 도심을 한눈에",
    name: "엔도프 호텔3",
    content: "중부권 도심 속 새로운 휴양지",
  },
  {
    type: "신규입점",
    img: "https://i.namu.wiki/i/SJU_Jxqyocs1qbSa9Eh6N7Rlpi1luHi0yLmU19GbcUXa27Q-6snYSoHW0cxteDh-egtRiTkc_SgtJEE_bJcFxA.webp",
    title: "청주 도심을 한눈에",
    name: "엔도프 호텔4",
    content: "중부권 도심 속 새로운 휴양지",
  },
  {
    type: "신규입점",
    img: "https://i.namu.wiki/i/SJU_Jxqyocs1qbSa9Eh6N7Rlpi1luHi0yLmU19GbcUXa27Q-6snYSoHW0cxteDh-egtRiTkc_SgtJEE_bJcFxA.webp",
    title: "청주 도심을 한눈에",
    name: "엔도프 호텔5",
    content: "중부권 도심 속 새로운 휴양지",
  },
];

function PickCard() {
  const [card, setCard] = useState(list);
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 페이지 인덱스

  const listRef = useRef(null); //  <ul> 태그 직접 조작

  const scrollToIndex = (pageIndex) => {
    const CARD_WIDTH = 240;
    const GAP = 20;
    const CARDS_PER_PAGE = 2;

    const scrollX = pageIndex * (CARD_WIDTH * GAP) * CARDS_PER_PAGE;
    listRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
    setCurrentIndex(pageIndex);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    } else {
      scrollToIndex(0);
    }
  };

  const scrollRight = () => {
    if (currentIndex < 1) {
      scrollToIndex(currentIndex + 1);
    } else {
      scrollToIndex(1);
    }
  };

  return (
    <div className="pick-wrap">
      <button className="scroll-btn left" onClick={scrollLeft}>
        ◄
      </button>
      <ul ref={listRef}>
        {card.map((data, idx) => {
          return (
            <li key={idx} className="pick-container">
              <img src={data.img} alt="숙소이미지" />
              <div className="pick-info">
                <a href="#">{data.type}</a>
                <h2>
                  {data.title}
                  <br />
                  <span>{data.name}</span>
                </h2>
                <p>{data.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="scroll-btn right" onClick={scrollRight}>
        ►
      </button>
    </div>
  );
}

export default PickCard;
