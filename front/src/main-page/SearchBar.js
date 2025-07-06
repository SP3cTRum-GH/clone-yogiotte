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
        <div className={Styles.dropdownWrapper}>
          <button onClick={toggleCalanderControl}>달력버튼</button>
          {isCalanderVisible && (
            <div className={Styles.dropdownContent}>
              <h1>달력</h1>
            </div>
          )}
        </div>

        {activeButton === "국내 숙소" ? (
          <div className={Styles.dropdownWrapper}>
            <button onClick={toggleCountControl}>인원 {count}</button>
            {isCountVisible && (
              <div className={Styles.dropdownContent}>
                <div className={Styles.dropdownRow}>
                  <div className={Styles.textBox}>
                    <h3>인원</h3>
                    <h6>유아 및 아동도 인원수에 포함해주세요</h6>
                  </div>
                  <div className={Styles.buttonBox}>
                    <button onClick={countDownClick} disabled={count === 1}>
                      -
                    </button>
                    {count === 10 ? (
                      <span>{count}+</span>
                    ) : (
                      <span>{count}</span>
                    )}
                    <button onClick={countUpClick} disabled={count === 10}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={Styles.dropdownWrapper}>
            <button onClick={toggleAboardCountControl}>
              성인 {adultCount} {childCount > 0 && `아동 ${childCount}`} 객실{" "}
              {roomCount}
            </button>
            {isAboardCountVisible && (
              <div className={Styles.dropdownContent}>
                <div className={Styles.dropdownRow}>
                  <div className={Styles.textBox}>
                    <h3>성인</h3>
                    <h6>총 성인 수</h6>
                  </div>
                  <div className={Styles.buttonBox}>
                    <button
                      onClick={adultCountDownClick}
                      disabled={adultCount === 1}
                    >
                      -
                    </button>
                    <span>{adultCount}</span>
                    <button
                      onClick={adultCountUpClick}
                      disabled={adultCount === 36}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={Styles.dropdownRow}>
                  <div className={Styles.textBox}>
                    <h3>아동</h3>
                    <h6>총 아동 수(만 0세 ~ 17세)</h6>
                  </div>
                  <div className={Styles.buttonBox}>
                    <button
                      onClick={childCountDownClick}
                      disabled={childCount === 0}
                    >
                      -
                    </button>
                    <span>{childCount}</span>
                    <button
                      onClick={childCountUpClick}
                      disabled={childCount === 9}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={Styles.dropdownRow}>
                  <div className={Styles.textBox}>
                    <h3>객실</h3>
                    <h6>총 인원이 이용할 객실 수</h6>
                  </div>
                  <div className={Styles.buttonBox}>
                    <button
                      onClick={roomCountDownClick}
                      disabled={roomCount === 1}
                    >
                      -
                    </button>
                    <span>{roomCount}</span>
                    <button
                      onClick={roomCountUpClick}
                      disabled={roomCount === 9}
                    >
                      +
                    </button>
                  </div>
                </div>
                {childCount > 0 && (
                  <div
                    className={Styles.textBox}
                    style={{
                      background: "#e7e8e7",
                    }}
                  >
                    <ul>
                      <li>
                        <h6>
                          숙소별로 아동으로 간주하는 나이가 다르므로 체크인
                          일자 기준의 정확한 만나이를 입력해주세요. (해외숙소는
                          일반적으로 만 17세 이하의 개인을 어린이로 간주합니다.)
                        </h6>
                      </li>
                      <li>
                        <h6>
                          인원(성인, 아동)을 선택하실 때 객실별로 이용할
                          인원이 아닌 ‘총 인원 수’를 선택해주세요.
                        </h6>
                      </li>
                    </ul>
                  </div>
                )}
                {Array.from({ length: childCount }).map((_, index) => (
                  <div className={Styles.dropdownRow} key={index}>
                    <div className={Styles.textBox}>
                      <h3>{`아동 ${index + 1}`}</h3>
                    </div>
                    <div className={Styles.selectBox}>
                      <select>
                        <option value={2}>만 3세 미만</option>
                        <option value={4}>만 4세</option>
                        <option value={5}>만 5세</option>
                        <option value={6}>만 6세</option>
                        <option value={7}>만 7세</option>
                        <option value={8}>만 8세</option>
                        <option value={9}>만 9세</option>
                        <option value={10}>만 10세</option>
                        <option value={11}>만 11세</option>
                        <option value={12} selected>
                          만 12세
                        </option>
                        <option value={13}>만 13세</option>
                        <option value={14}>만 14세</option>
                        <option value={15}>만 15세</option>
                        <option value={16}>만 16세</option>
                        <option value={17}>만 17세</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <button onClick={goToSearch}>검색</button>
      </div>
    </div>
  );
}

export default SearchBar;
