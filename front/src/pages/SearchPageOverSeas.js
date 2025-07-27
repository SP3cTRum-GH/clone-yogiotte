import { useState } from "react";
import { useLocation } from "react-router-dom";
import Styles from "../search/search.module.css";
import SearchPageLeft from "../search/SearchPageLeft";
import SearchPageRight from "../search/SearchPageRight";
import Admin from "./Admin";

function SearchPage() {
  //param값 받아오기
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const keyword = params.get("keyword");
  const adress = params.get("adress");
  const checkin = params.get("checkin");
  const checkout = params.get("checkout");
  const member = params.get("member");

  //검색결과 백에 요청하기

  const searchList = [];
  const searchListCount = searchList.length;

  //지도 버튼 클릭시 모달페이지 기능
  const [isModalOpen, setIsModalOpen] = useState(false);
  //모달 등장,퇴장 애니메이션동안 기다리는 기능
  const [isExiting, setIsExiting] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsExiting(false);
  };

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.leftContainer}>
        <SearchPageLeft mapClick={openModal} />
        기타 등등
      </div>
      <div className={Styles.rightContainer}>
        <SearchPageRight keyword={keyword} count={searchListCount} />
      </div>

      {/**모달 페이지 */}
      {isModalOpen && (
        <div className={Styles.modalOverlay} onClick={closeModal}>
          <div
            className={`${Styles.modalContent} ${
              isExiting ? Styles.exiting : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className={Styles.closeButton}>
              X
            </button>
            <Admin />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
