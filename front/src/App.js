import { Route, Routes } from "react-router-dom";

//각페이지 import
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import SearchpageOverSeas from "./pages/SearchPageOverSeas"
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Admin from "./pages/Admin";
import DomesticPage from "./pages/DomesticPage";
import OverseasPage from "./pages/OverseasPage"

//푸터 헤더 import
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/*헤더*/}
      <header>
        <Header />
      </header>

      {/*각페이지 라우터*/}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search-overseas" element={<SearchpageOverSeas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/domestic/:id" element={<DomesticPage />} />
        <Route path="/overseas/:id" element={<OverseasPage />} />
      </Routes>

      {/*푸터*/}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
