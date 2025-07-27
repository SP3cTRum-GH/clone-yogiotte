import React, { useEffect } from "react";
import "./DomesticMap.css";

const DomesticMap = () => {
  useEffect(() => {
    // 주소 → 좌표 변환
    window.naver.maps.Service.geocode(
      { query: "강원 강릉시 강문동 1-1" },
      (status, response) => {
        if (status !== window.naver.maps.Service.Status.OK) {
          return alert("주소 변환 실패");
        }

        const { x, y } = response.v2.addresses[0]; // x: 경도, y: 위도
        const location = new window.naver.maps.LatLng(y, x);

        const map = new window.naver.maps.Map("map", {
          center: location,
          zoom: 14,
          scrollWheel: false, // 마우스 휠 줌 비활성화
          draggable: true,
          disableDoubleClickZoom: true,
        });

        new window.naver.maps.Marker({
          position: location,
          map: map,
        });
      }
    );
  }, []);

  return (
    <div className="domestic-map-container">
      <h3 id="position">위치</h3>
      <div id="map" className="domestic-map"></div>
      <h2>강원 강릉시 강문동 1-1</h2>
      <ul>
        <li>강릉 강문해변 앞</li>
        <li>경포대 차량 7분</li>
        <li>오죽헌 차량 11분</li>
      </ul>
    </div>
  );
};

export default DomesticMap;
