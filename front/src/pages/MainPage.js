import SearchBar from "../main-page/SearchBar";
import EventCard from "../main-page/EventCard";
import LodgingCard from "../main-page/LodgingCard";
import PickCard from "../main-page/PickCard";
import TravelDestination from "../main-page/TravelDestination";

function MainPage() {
  return (
    <div>
      <h1>메인페이지</h1>
      <SearchBar />
      <br />
      <EventCard />
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
