import { useRef, useState } from "react";
import "./TravelDestination_module.css";

const bestList = [
  {
    img: "https://image.goodchoice.kr/resize_360x360/exhibition/cms/Region_jeju_03_20231103163922.png",
    location: "제주도1",
  },
  {
    img: "https://image.goodchoice.kr/resize_360x360/exhibition/cms/Region_jeju_03_20231103163922.png",
    location: "제주도2",
  },
  {
    img: "https://image.goodchoice.kr/resize_360x360/exhibition/cms/Region_jeju_03_20231103163922.png",
    location: "제주도3",
  },
  {
    img: "https://image.goodchoice.kr/resize_360x360/exhibition/cms/Region_jeju_03_20231103163922.png",
    location: "제주도4",
  },
  {
    img: "https://image.goodchoice.kr/resize_360x360/exhibition/cms/Region_jeju_03_20231103163922.png",
    location: "제주도5",
  },
  {
    img: "https://image.goodchoice.kr/resize_360x360/exhibition/cms/Region_jeju_03_20231103163922.png",
    location: "제주도6",
  },
  {
    img: "https://image.goodchoice.kr/resize_360x360/exhibition/cms/Region_jeju_03_20231103163922.png",
    location: "제주도7",
  },
  {
    img: "https://image.goodchoice.kr/resize_360x360/exhibition/cms/Region_jeju_03_20231103163922.png",
    location: "제주도8",
  },
  {
    img: "https://image.goodchoice.kr/resize_360x360/exhibition/cms/Region_jeju_03_20231103163922.png",
    location: "제주도9",
  },
  {
    img: "https://image.goodchoice.kr/resize_360x360/exhibition/cms/Region_jeju_03_20231103163922.png",
    location: "제주도10",
  },
];

function TravelDestination() {
  const [bestTravel, setBestTravel] = useState(bestList);
  const [currentIndex, setCurrentIndex] = useState(0);

  const listRef = useRef(null);

  const scrollToIndex = (pageIndex) => {
    const CARD_WIDTH = 156;
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
    <div className="travel-wrap">
      <button className="scroll-btn left" onClick={scrollLeft}>
        ◄
      </button>
      <ul ref={listRef}>
        {bestTravel.map((data, idx) => {
          return (
            <li key={idx} className="travel-container">
              <img src={data.img} alt="여행지사진" />
              <p>{data.location}</p>
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

export default TravelDestination;
