import { useState } from "react";
import Styles from "./mainpage.module.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [activeButton, setActiveButton] = useState("국내 숙소");
  const [count, setCount] = useState(2);
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [roomCount, setRoomCount] = useState(1);
  const [isCountVisible, setIsCountVisible] = useState(false);
  const [isAboardCountVisible, setIsAboardCountVisible] = useState(false);
  const [isCalanderVisible, setISCalanderVisible] = useState(false);

  const navigate = useNavigate();

  const goToSearch = () => {
    navigate("./search");
  };

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
    setIsCountVisible(false);
    setIsAboardCountVisible(false);
    setISCalanderVisible(false);
  };

  const toggleCountControl = () => {
    setIsCountVisible(!isCountVisible);
  };

  const toggleAboardCountControl = () => {
    setIsAboardCountVisible(!isAboardCountVisible);
  };

  const toggleCalanderControl = () => {
    setISCalanderVisible(!isCalanderVisible);
  };

  const adultCountUpClick = () => {
    setAdultCount(adultCount + 1);
  };

  const adultCountDownClick = () => {
    if (adultCount > 1) {
      setAdultCount(adultCount - 1);
    }
  };

  const childCountUpClick = () => {
    setChildCount(childCount + 1);
  };

  const childCountDownClick = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };

  const roomCountUpClick = () => {
    setRoomCount(roomCount + 1);
  };

  const roomCountDownClick = () => {
    if (roomCount > 0) {
      setRoomCount(roomCount - 1);
    }
  };

  const countUpClick = () => {
    setCount(count + 1);
  };

  const countDownClick = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
        <button onClick={toggleCalanderControl}>달력버튼</button>
        {activeButton === "국내 숙소" ? (
          <button onClick={toggleCountControl}>인원 {count}</button>
        ) : (
          <button onClick={toggleAboardCountControl}>
            성인 {adultCount} {childCount > 0 && `아동 ${childCount}`} 객실{" "}
            {roomCount}
          </button>
        )}
        <button onClick={goToSearch}>검색</button>
        {/**달력 드롭다운 */}
        {isCalanderVisible && (
          <div>
            <h1>달력</h1>
          </div>
        )}
        {/**국내숙소 인원 드롭다운 */}
        {isCountVisible && (
          <div>
            <div>
              <h3>인원</h3>
              <h6>유아 및 아동도 인원수에 포함해주세요</h6>
            </div>
            <div>
              <button onClick={countDownClick} disabled={count === 1}>
                -
              </button>
              <span>{count}</span>
              <button onClick={countUpClick}>+</button>
            </div>
          </div>
        )}
        {/**해외숙소 인원 드롭다운 */}
        {isAboardCountVisible && (
          <div>
            <div>
              <h3>성인</h3>
              <h3>아동</h3>
              <h3>객실</h3>
            </div>
            <div>
              <button onClick={adultCountDownClick} disabled={adultCount === 1}>
                -
              </button>
              <span>{adultCount}</span>
              <button onClick={adultCountUpClick}>+</button>
              <button onClick={childCountDownClick} disabled={childCount === 0}>
                -
              </button>
              <span>{childCount}</span>
              <button onClick={childCountUpClick}>+</button>
              <button onClick={roomCountDownClick} disabled={roomCount === 1}>
                -
              </button>
              <span>{roomCount}</span>
              <button onClick={roomCountUpClick}>+</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
