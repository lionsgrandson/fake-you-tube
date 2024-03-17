import "./App.css";
import SideCard from "../src/components/sideCard/sideCardMain";
import "./components/actions";
import "./components/icons";
import placeHolderImg from "../src/img/placeHolderImg.jpg";
import placeHolderImgtwo from "../src/img/secondImg.jpg";
import placeHolderImgthree from "../src/img/thirdimg.jpg";
import TopIcons from "./components/navBar/topIcons";
import MenuImg from "../src/img/menuImg.png";

function App() {
  return (
    <section className="section">
      <TopIcons imgPath={MenuImg}></TopIcons>
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
    </section>
  );
}

export default App;
