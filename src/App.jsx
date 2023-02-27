import "./App.css";
import AboutCamp from "./Home/AboutCamp/AboutCamp";
import Blog from "./Home/Blog/Blog";
import ClientReview from "./Home/ClientReview/ClientReview";
import Footer from "./Home/Footer/Footer";
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
      <Footer></Footer>
    </div>
  );
}

export default App;
