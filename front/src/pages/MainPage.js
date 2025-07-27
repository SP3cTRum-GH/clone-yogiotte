import SearchBar from "../main-page/SearchBar";
import EventCard from "../main-page/EventCard";
import LodgingCard from "../main-page/LodgingCard";
import PickCard from "../main-page/PickCard";
import TravelDestination from "../main-page/TravelDestination";

function MainPage() {
  return (
    <div>
      {/*서치바 뒤의 배경화면*/}
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundImage: `url("https://static.yeogi.com/_next/static/media/06_Kv_PC_Light_B.3f439e27.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div style={{ width: "100%", maxWidth: "900px" }}>
          <h1 style={{ color: "white", textAlign: "left" }}>
            오사카 료칸부터 경주 캡슐 호텔까지,
            <br /> 여행할때 여기어때
          </h1>
          <SearchBar />
        </div>
      </div>
      <br />
      <EventCard cardWidth={324} page={3} hidenBtn={true} />
      <br />
      <TravelDestination />
      <br />
      <LodgingCard />
      <br />
      <PickCard />
    </div>
  );
}

export default MainPage;
