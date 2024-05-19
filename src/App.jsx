import "./App.css";
import Banners from "./Components/Banners";
import BlogSection from "./Components/BlogSection";
import Categories from "./Components/Categories";
import Contact from "./Components/Contact";
import FeatureSectionOne from "./Components/FeatureSectionOne";
import FeatureSectionTwo from "./Components/FeatureSectionTwo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Categories />
      <FeatureSectionOne />
      <FeatureSectionTwo />
      <Banners />
      <BlogSection />
      <Contact />
      <Footer></Footer>
    </>
  );
}

export default App;
