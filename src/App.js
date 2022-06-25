import Navv from "./Components/Nav";
import "./App.css";
import Btn from "./Components/Button";
import Head from "./Components/header";
import Services from "./Components/services";
import About from "./Components/about";
import Portfolio from "./Components/portfolio";
import AboutNext from "./Components/aboutNextPage";
import Social from "./Components/socialIcons";
import Blog from "./Components/Blog";
import ContactUS from "./Components/contact";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Swiper } from "swiper/react";
function App() {
  return (
    <div className="App">
      <Navv />
      <Head />
      <Footer />
    </div>
  );
}

export default App;
