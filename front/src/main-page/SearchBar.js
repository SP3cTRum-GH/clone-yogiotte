import { useState } from "react";
import Styles from "./HighlightButton.module.css";

function SearchBar() {
  {/**서치바 State 및 Effect Memo등 영역 */}
  const [activeButton, setActiveButton] = useState("국내 숙소");

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  const [count, countUp,countDown] = useState(2);
  
  const countUpClick = () => {

  }

  const countDownClick = () => {
    
  }

  return (
    <div>
      {/*상단 버튼 부분*/}
      <div>
        <button
          onClick={() => handleButtonClick("국내 숙소")}
          className={
            activeButton === "국내 숙소"
              ? Styles.HighlightTrue
              : Styles.HighlightFalse
          }
        >
          국내 숙소
        </button>
        <button
          onClick={() => handleButtonClick("해외 숙소")}
          className={
            activeButton === "해외 숙소"
              ? Styles.HighlightTrue
              : Styles.HighlightFalse
          }
        >
          해외 숙소
        </button>
      </div>
      {/* 하단 검색창 및 검색 선택 부분  */}
      <div>
        <input type="text" placeholder="여행지나 숙소를 검색해보세요."></input>
        <button>달력버튼</button>
        <button>인원 {count}</button>
      </div>
    </div>
  );
}

export default SearchBar;
