import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/Home/HomePage";
import CoursePage from "./components/CourseList/CoursePage";
import CourseDetail from "./components/CourseList/CourseDetail";
import Navigation from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/courses" element={<CoursePage />}></Route>
            <Route path="/courses/:id" element={<CourseDetail />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/categories" element={<Category />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
