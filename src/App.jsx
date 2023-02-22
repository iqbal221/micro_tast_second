import "./App.css";
import AboutCamp from "./Home/AboutCamp/AboutCamp";
import Gallery from "./Home/Gallery/Gallery";
import Header from "./Home/Header/Header";
import MenuBar from "./Home/Navbar/Navbar";

function App() {
  return (
    <div>
      <MenuBar></MenuBar>
      <Header></Header>
      <AboutCamp></AboutCamp>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
