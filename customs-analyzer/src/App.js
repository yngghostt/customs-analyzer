import './App.css';
import Auth from "./components/auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBox from "./components/search-box/SearchBox";



function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Auth />}></Route>
              <Route path="/home" element={<SearchBox />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
