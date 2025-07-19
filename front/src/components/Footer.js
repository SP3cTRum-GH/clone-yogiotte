import "./Footer.css"

function Footer() {
  return (
    <footer >
      <div className="cs">
        <div>
          <h1>고객센터</h1>
          <h4>고객행복센터(전화): 오전 9시 ~ 새벽 3시 운영</h4>
          <h4>카카오톡 문의: 24시간 운영</h4>
          <div>
            <button>1234-1234</button>
            <button>카카오 문의</button>
          </div>
        </div>

        <div>
          <div>
            <h2>회사</h2>
            <h4>회사소개</h4>
          </div>
        </div>

        <div>
          <div>
            <h2>서비스</h2>
            <h4>공지사항</h4>
            <h4>자주 묻는 질문</h4>
            <h4>기업 출장/복지 서비스 문의</h4>
          </div>
        </div>

        <div>
          <div>
            <h2>혜택</h2>
            <h4>엘리트 멤버십</h4>
            <h4>트립홀릭 혜택 안내</h4>
            <h4>여기어때 상품권 조회</h4>
          </div>
        </div>

        <div>
          <div>
            <h2>모든 여행</h2>
            <h4>국내숙소</h4>
            <h4>해외숙소</h4>
            <h4>항공</h4>
            <h4>항공+숙소</h4>
            <h4>레저・티켓</h4>
            <h4>렌터카</h4>
            <h4>공간대여</h4>
          </div>
        </div>
      </div>

      <div className="company-info">
        <div>
          <p>회사이름</p>
          <p>주소 : 서울특별시 강남구 | 대표이사 : 홍길동 | 사업자등록번호 : 123-12-12345 사업자정보확인</p>
          <p>전자우편주소 : abc@abcd.com | 통신판매번호 : 2025-서울강남-0000 | 관광사업자 등록번호 : 제0000-00호 | 전화번호 : 1234-1234 | 호스팅서비스제공자의 상호 표시 : 회사</p>
          <p>본 사이트는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.</p>
        </div>

        <div className="service">
          <div className="service-info">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">소비자 분쟁해결 기준</a>
            <a href="#">콘텐츠산업진흥법에 의한 표시</a>
          </div>

          <div>
            <button>유투브</button>
            <button>인스타그램</button>
          </div>
        </div>

        <div>
          <p>Copyright GC COMPANY Corp. All rights reserved.</p>
        </div>
      </div>



    </footer>
  );
}

export default Footer;