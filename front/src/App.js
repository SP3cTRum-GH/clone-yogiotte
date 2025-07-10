import { Route, Routes } from "react-router-dom";

//각페이지 import
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Admin from "./pages/Admin";

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
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {/*푸터*/}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
