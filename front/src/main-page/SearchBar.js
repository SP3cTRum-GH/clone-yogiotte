import { useState, useEffect, useRef } from "react";
import Styles from "./mainpage.module.css";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function SearchBar() {
  const [activeButton, setActiveButton] = useState("국내 숙소");
  const [count, setCount] = useState(2);
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [roomCount, setRoomCount] = useState(1);
  const [isCountVisible, setIsCountVisible] = useState(false);
  const [isAboardCountVisible, setIsAboardCountVisible] = useState(false);
  const [isCalanderVisible, setISCalanderVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);

  //달력기능
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [displayMonth, setDisplayMonth] = useState(new Date());
  const handlePrevMonth = () => {
    //이전 달로 이동
    setDisplayMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() - 2);
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    //다음 달로 이동
    setDisplayMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + 2);
      return newMonth;
    });
  };

  const handleDayClick = (clickedDate) => {
    const [start, end] = dateRange;

    // Case 1: A full range is already selected. Start a new selection.
    if (start && end && start.getTime() !== end.getTime()) {
      setDateRange([clickedDate, clickedDate]);
      return;
    }

    // Case 2: A start date is selected (start === end). Now select the end date.
    if (start) {
      // If the clicked date is earlier than the start date, reset the selection.
      if (clickedDate < start) {
        setDateRange([clickedDate, clickedDate]);
        return;
      }

      // Set the end date.
      setDateRange([start, clickedDate]);
      setISCalanderVisible(false);
      setIsCountVisible(true);
    }
  };

  const calculateMaxSelectableDate = () => {
    // dateRange의 첫 번째 날짜와 마지막 날짜가 다르면 (기간이 선택된 상태)
    // 30일 제한을 없앱니다.
    if (
      dateRange[0] &&
      dateRange[1] &&
      dateRange[0].getTime() !== dateRange[1].getTime()
    ) {
      return null; // 최대 날짜 제한 없음
    }

    // 그 외의 경우 (시작 날짜만 선택되었거나, 아직 아무것도 선택되지 않은 경우)
    // 기존 30일 제한 로직을 적용합니다.
    if (dateRange[0]) {
      const maxDate = new Date(dateRange[0]);
      maxDate.setDate(dateRange[0].getDate() + 30);
      return maxDate;
    }
    return null; // 시작 날짜가 아직 선택되지 않은 경우
  };

  //달력 버튼에 쓸 날짜 형식 변환기

  const maxSelectableDate = calculateMaxSelectableDate();

  const formatDate = (date) => {
    const format = (d) => {
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      const week = ["일", "월", "화", "수", "목", "금", "토"];
      const dayOfWeek = week[d.getDay()];
      return `${month}-${day}-${dayOfWeek}`;
    };

    if (Array.isArray(dateRange) && dateRange.length === 2) {
      const [start, end] = dateRange;
      const diffTime = Math.abs(end - start);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (start.toDateString() === end.toDateString()) {
        return format(start);
      }
      return `${format(start)} - ${format(end)} (${diffDays}박)`;
    }
    return "";
  };
  //버튼 외부클릭시 자동으로 숨겨진 요소 닫히는 기능
  const calanderRef = useRef(null);
  const countRef = useRef(null);
  const aboardCountRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calanderRef.current && !calanderRef.current.contains(event.target)) {
        setISCalanderVisible(false);
      }
      if (countRef.current && !countRef.current.contains(event.target)) {
        setIsCountVisible(false);
      }
      if (
        aboardCountRef.current &&
        !aboardCountRef.current.contains(event.target)
      ) {
        setIsAboardCountVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calanderRef, countRef, aboardCountRef]);

  // 달력이 닫힐 때 첫번째날만 선택된 경우 두번째날 자동선택기
  useEffect(() => {
    if (!isCalanderVisible) {
      const [start, end] = dateRange;

      // 시작 날짜와 종료 날짜가 같으면 (하루만 선택된 경우)
      if (start && end && start.getTime() === end.getTime()) {
        const newEndDate = new Date(start);
        newEndDate.setDate(start.getDate() + 1); // 시작 날짜의 다음 날로 설정
        setDateRange([start, newEndDate]);
      }

      //displayMonth의 날도 start날로 바꾸기
      setDisplayMonth(start);
    }
  }, [isCalanderVisible, dateRange]);

  //페이지 이동
  const navigate = useNavigate();

  const goToSearch = () => {
    if (!searchKeyword.trim()) {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      return;
    }

    if (activeButton === "국내 숙소") {
      //국내숙소 일경우 urlQuery
      const query = new URLSearchParams({
        keyword: searchKeyword,
        checkin: dateRange[0].toISOString().split("T")[0],
        checkout: dateRange[1].toISOString().split("T")[0],
        member: count
      })
      navigate(`/search?${query.toString()}`);
    } else {
      //해외숙소 일경우 urlQuery
      const query = new URLSearchParams({
        keyword: searchKeyword,
        checkin: dateRange[0].toISOString().split("T")[0],
        checkout: dateRange[1].toISOString().split("T")[0],
        adult: adultCount,
        child: childCount,
        room: roomCount,
      })
      navigate(`/search?${query.toString()}`);
    }

  };

  //지도 검색 기능

  const handleSearchChange = async (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);

    if (keyword.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const res = await fetch(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(
          keyword
        )}`,
        {
          headers: {
            Authorization: "KakaoAK (api코드)",
          },
        }
      );

      const data = await res.json();
      setSearchResults(data.documents);
    } catch (error) {
      console.error("검색 오류:", error);
    }
  };

  //그외 버튼 핸들러들

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
    setIsCountVisible(false);
    setIsAboardCountVisible(false);
    setISCalanderVisible(false);
  };

  const toggleCountControl = () => {
    setIsCountVisible(!isCountVisible);
    setIsAboardCountVisible(false);
    setISCalanderVisible(false);
  };

  const toggleAboardCountControl = () => {
    setIsAboardCountVisible(!isAboardCountVisible);
    setIsCountVisible(false);
    setISCalanderVisible(false);
  };

  const toggleCalanderControl = () => {
    setISCalanderVisible(!isCalanderVisible);
    setIsCountVisible(false);
    setIsAboardCountVisible(false);
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
    if (adultCount <= roomCount) {
      adultCountUpClick();
    }
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
    <div className={Styles.textAndSearchContainer}>
      <div className={Styles.searchBox}>
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
        <div className={Styles.searchInputs}>
          <div className={Styles.searchWrapper}>
            {showTooltip && (
              <div className={Styles.tooltip}>목적지를 선택해주세요.</div>
            )}
            <input
              type="text"
              value={searchKeyword}
              onChange={handleSearchChange}
              placeholder="여행지나 숙소를 검색해보세요."
              className={Styles.inputBox}
            />
          </div>
          {searchResults.length > 0 && (
            <ul className={Styles.resultList}>
              {searchResults.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setSearchKeyword(item.place_name);
                    setSearchResults([]);
                    setISCalanderVisible(true);
                  }}
                  className={Styles.resultItem}
                >
                  {item.place_name} -{" "}
                  {item.address_name.split(" ").slice(0, 2).join(" ")}
                </li>
              ))}
            </ul>
          )}
          {activeButton === "국내 숙소" ? (<div className={Styles.dropdownWrapper} ref={calanderRef}>
            <button onClick={toggleCalanderControl} className={Styles.inputBox}>
              {formatDate(dateRange)}
            </button>
            {/**달력 드롭 다운 */}
            {isCalanderVisible && (
              <div className={Styles.dropdownContent}>
                {/* Navigation buttons */}
                <div className={Styles.calendarNavigation}>
                  <button
                    onClick={handlePrevMonth}
                    disabled={
                      displayMonth.getMonth() === new Date().getMonth() &&
                      displayMonth.getFullYear() === new Date().getFullYear()
                    }
                  >
                    &lt;
                  </button>
                  <button onClick={handleNextMonth}>&gt;</button>
                </div>
                <h3>{`${displayMonth.getFullYear()}년 ${displayMonth.getMonth() + 1}월`}</h3>
                <Calendar
                  value={dateRange}
                  onClickDay={handleDayClick}
                  minDate={new Date()}
                  maxDate={maxSelectableDate || undefined}
                  activeStartDate={displayMonth}
                  formatDay={(locale, date) => date.getDate()}
                  showNeighboringMonth={false}
                  showNavigation={false}
                />
                <h3>{`${displayMonth.getFullYear()}년 ${displayMonth.getMonth() + 2}월`}</h3>
                <Calendar
                  value={dateRange}
                  onClickDay={handleDayClick}
                  minDate={new Date()}
                  maxDate={maxSelectableDate || undefined}
                  activeStartDate={
                    new Date(
                      displayMonth.getFullYear(),
                      displayMonth.getMonth() + 1,
                      1
                    )
                  }
                  formatDay={(locale, date) => date.getDate()}
                  showNeighboringMonth={false}
                  showNavigation={false}
                />
              </div>
            )}
          </div>) : (
            <div className={Styles.dropdownWrapper} ref={calanderRef}>
              <button onClick={toggleCalanderControl} className={Styles.inputBox}>
                {formatDate(dateRange)}
              </button>
              {/**달력 드롭 다운 */}
              {isCalanderVisible && (
                <div className={Styles.dropdownContent}>
                  {/* Navigation buttons */}
                  <div className={Styles.calendarNavigation}>
                    <button
                      onClick={handlePrevMonth}
                      disabled={
                        displayMonth.getMonth() === new Date().getMonth() &&
                        displayMonth.getFullYear() === new Date().getFullYear()
                      }
                    >
                      &lt;
                    </button>
                    <button onClick={handleNextMonth}>&gt;</button>
                  </div>
                  <h3>{`${displayMonth.getFullYear()}년 ${displayMonth.getMonth() + 1}월`}</h3>
                  <Calendar
                    value={dateRange}
                    onClickDay={handleDayClick}
                    minDate={new Date()}
                    maxDate={maxSelectableDate || undefined}
                    activeStartDate={displayMonth}
                    formatDay={(locale, date) => date.getDate()}
                    showNeighboringMonth={false}
                    showNavigation={false}
                  />
                  <h3>{`${displayMonth.getFullYear()}년 ${displayMonth.getMonth() + 2}월`}</h3>
                  <Calendar
                    value={dateRange}
                    onClickDay={handleDayClick}
                    minDate={new Date()}
                    maxDate={maxSelectableDate || undefined}
                    activeStartDate={
                      new Date(
                        displayMonth.getFullYear(),
                        displayMonth.getMonth() + 1,
                        1
                      )
                    }
                    formatDay={(locale, date) => date.getDate()}
                    showNeighboringMonth={false}
                    showNavigation={false}
                  />
                </div>
              )}
            </div>
          )}

          {activeButton === "국내 숙소" ? (
            <div className={Styles.dropdownWrapper} ref={countRef}>
              <button onClick={toggleCountControl} className={Styles.inputBox}>인원 {count}</button>
              {/**국내 숙소 인원 드롭다운 */}
              {isCountVisible && (
                <div className={Styles.dropdownContent}>
                  <div className={Styles.dropdownRow}>
                    <div className={Styles.textBox}>
                      <h3>인원</h3>
                      <h6>유아 및 아동도 인원수에 포함해주세요</h6>
                    </div>
                    <div className={Styles.buttonBox}>
                      <button onClick={countDownClick} disabled={count === 1}>-</button>
                      {count === 10 ? (
                        <span>{count}+</span>
                      ) : (
                        <span>{count}</span>
                      )}
                      <button onClick={countUpClick} disabled={count === 10}>+</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={Styles.dropdownWrapper} ref={aboardCountRef}>
              <button onClick={toggleAboardCountControl} className={Styles.inputBox}>
                성인 {adultCount} {childCount > 0 && `아동 ${childCount}`} 객실{" "}
                {roomCount}
              </button>
              {/**해외 숙소 인원 드롭다운 */}
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
                        disabled={adultCount === 1}>-</button>
                      <span>{adultCount}</span>
                      <button
                        onClick={adultCountUpClick}
                        disabled={adultCount === 36}>+</button>
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
                        disabled={childCount === 0}>-</button>
                      <span>{childCount}</span>
                      <button
                        onClick={childCountUpClick}
                        disabled={childCount === 9}>+</button>
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
                        disabled={roomCount === 1}>-</button>
                      <span>{roomCount}</span>
                      <button
                        onClick={roomCountUpClick}
                        disabled={roomCount === 9}>+</button>
                    </div>
                  </div>
                  {/**해외 숙소 아동이 0보다 많을경우 아동 나이 select */}
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
                            숙소별로 아동으로 간주하는 나이가 다르므로 체크인 일자
                            기준의 정확한 만나이를 입력해주세요. (해외숙소는
                            일반적으로 만 17세 이하의 개인을 어린이로 간주합니다.)
                          </h6>
                        </li>
                        <li>
                          <h6>
                            인원(성인, 아동)을 선택하실 때 객실별로 이용할 인원이
                            아닌 ‘총 인원 수’를 선택해주세요.
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
          <button className={Styles.searchButton} onClick={goToSearch}>검색</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
