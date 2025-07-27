import React, { useEffect, useRef } from "react";
import "./OverseasMap.css";

/* global google */

const OverseasMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 16,
      center: { lat: 37.5652129, lng: 126.9773517 }, // 임시 중심
    });

    const geocoder = new window.google.maps.Geocoder();

    const address = "Osaka-fu, Osaka, Ebisu-nishi 1-2-10, Naniwa-ku"; // <- 원하는 장소 이름

    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location);

        new window.google.maps.Marker({
          map,
          position: location,
        });
      } else {
        console.error(
          "Geocode was not successful for the following reason: " + status
        );
      }
    });
  }, []);

  return (
    <div className="domestic-map-container">
      <h3 id="position">위치</h3>
      <div ref={mapRef} className="domestic-map"></div>
      <h2>강원 강릉시 강문동 1-1</h2>
      <ul>
        <li>강릉 강문해변 앞</li>
        <li>경포대 차량 7분</li>
        <li>오죽헌 차량 11분</li>
      </ul>
    </div>
  );
};

export default OverseasMap;
