function SearchPageRight({ keyword, count }) {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>'{keyword}' 검색 결과 {count}개</span>
        <select>
          <option>추천순</option>
          <option>평점순</option>
          <option>가격높은순</option>
          <option>가격낮은순</option>
        </select>
      </header>
      
    </div>
  );
}

export default SearchPageRight;
