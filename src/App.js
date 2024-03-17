import "./App.css";
import SideCard from "../src/components/sideCard/sideCardMain";
import "./components/actions";
import "./components/icons";
import placeHolderImg from "../src/img/placeHolderImg.jpg";
import placeHolderImgtwo from "../src/img/secondImg.jpg";
import placeHolderImgthree from "../src/img/thirdimg.jpg";
import TopIcons from "./components/navBar/topIcons";
import MenuImg from "../src/img/menuImg.png";
import ReactPlayer from "react-player";
function App() {
  return (
    <section className="section">
      <TopIcons imgPath={MenuImg}></TopIcons>

      <div className="video-section">
        <div className="sideGrid">
          <SideCard
            videoTitle="Epic Music"
            YouTuberName="Pure Gold"
            ViewCount="6M"
            TimePosted="3 Years Ago"
            imgPath={placeHolderImg}
          ></SideCard>
          <SideCard
            videoTitle="Creazy Jumps Made By Old Cows"
            YouTuberName="Old Fashioned Videos"
            ViewCount="17K"
            TimePosted="2 weeks Ago"
            imgPath={placeHolderImgtwo}
          ></SideCard>
          <SideCard
            videoTitle="This is how the world will end!"
            YouTuberName="Ha! videos inc"
            ViewCount="19M"
            TimePosted="1 Year Ago"
            imgPath={placeHolderImgthree}
          ></SideCard>
        </div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=V-_O7nl0Ii0"
          className="gridStyle"
          width="100%"
          height="100%"
        />
        <h1>PlaceHolder</h1>
        
      </div>
    </section>
  );
}

export default App;
