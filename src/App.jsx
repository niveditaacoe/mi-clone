// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import data from "./data/data.json";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import ProductReviews from './components/ProductReviews'
import HotAccessories from "./components/HotAccessories";
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptions from './components/NavOptions';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <PreNavbar />
      <Navbar />

      <NavOptions miPhones={data.miPhones} redmiPhones ={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle = {data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS"></Heading>
      <StarProduct starProduct={data.starProduct} />
      <Heading text="Hot Accessories"></Heading>
      <HotAccessoriesMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/smartDevices"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/mobile"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>

      <Heading text="Product Reviews"/>
      <ProductReviews productReviews={data.productReviews}/>

      <Heading text="VIDEOS"/>
      <Videos videos = {data.videos}/>

      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>

    </div>
  );
}

export default App;
