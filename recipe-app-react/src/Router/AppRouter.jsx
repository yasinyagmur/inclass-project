import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../components/GlobalStyles/Global.Styles";
import Navbar from "../components/Nav/Navbar";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Detail from "../pages/Detail/Detail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<PrivateRouter/>}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="detail" element={<PrivateRouter/>}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
