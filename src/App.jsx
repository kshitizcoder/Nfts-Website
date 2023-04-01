import "../src/css/App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Brands from "./Components/Brands";
import NftsCollection from "./Components/NftsCollection";
import TopCreator from "./Components/TopCreator";
import Subscribe from "./Components/Subscribe";
import CollectionNfts from "./Components/CollectionNfts";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <NftsCollection />
      <TopCreator />
      <Subscribe />
      <CollectionNfts />
      <Footer />
    </>
  );
}

export default App;
