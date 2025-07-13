import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useRef, useState } from "react";

function Header() {
  //메뉴바 기능
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const handleMenuButton = () => {
    setIsMenuVisible((value) => !value);
  };

  //로그인페이지 네비게이션
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
    setIsMenuVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuVisible(false);
  }, [location]);

  return (
    <header className="header">
      <div className="logo">여기어때</div>
      <div className="right-section">
        <button className="login-btn" onClick={goToLogin}>
          로그인/회원가입
        </button>
        <div className="menu-container" ref={menuRef}>
          <div className="menu-icon" onClick={handleMenuButton}>
            ≡
          </div>
          {/**메뉴 클릭시 나오는 메뉴바 */}
          {isMenuVisible && (
            <div className="side-menu">
              <div className="top-section">
                <img
                  src="https://placehold.co/218x100?text=Banner"
                  alt="엘리트 혜택 배너"
                  className="banner"
                />
                <button className="login-side-btn" onClick={goToLogin}>
                  로그인/회원가입
                </button>
              </div>
              <div className="menu-section">
                <p className="menu-header">모든 여행</p>
                <ul className="menu-list">
                  <li>국내숙소</li>
                  <li>해외숙소</li>
                  <li>
                    패키지 여행 <span className="new-badge">new</span>
                  </li>
                  <li>항공</li>
                  <li>항공+숙소</li>
                  <li>레저·티켓</li>
                  <li>렌터카</li>
                  <li>공간대여</li>
                </ul>
                <ul className="menu-list secondary">
                  <li>비회원 예약조회</li>
                  <li>이벤트</li>
                  <li>고객센터</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
