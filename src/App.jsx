import "./App.css";
import AboutCamp from "./Home/AboutCamp/AboutCamp";
import Blog from "./Home/Blog/Blog";
import ClientReview from "./Home/ClientReview/ClientReview";
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
      <ClientReview></ClientReview>
      <Blog></Blog>
    </div>
  );
}

export default App;
