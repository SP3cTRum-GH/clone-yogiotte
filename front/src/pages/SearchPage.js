import { useLocation } from "react-router-dom";

function SearchPage() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const keyword = params.get("keyword")
  const checkin = params.get("checkin")
  const checkout = params.get("checkout")
  const member = params.get("member")

  return (
    <div>
      <h1>검색 페이지</h1>
  
      <p>목적지: {keyword }</p>
      <p>체크인: {checkin }</p>
      <p>체크아웃: {checkout }</p>
      <p>인원: {member }</p>

    </div>
  );

}

export default SearchPage;