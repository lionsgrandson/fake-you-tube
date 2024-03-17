import InfoText from "./infoText";
import "../../css/sideCardCss/sideCardMain.css";
import placeHolderImg from "../../img/placeHolderImg.jpg";
export default function sideCardMain() {
  return (
    <section className="sectionCard">
      <img
        alt="placeholder img"
        src={placeHolderImg}
        className="preiviewIMG"
      ></img>
      <InfoText></InfoText>
    </section>
  );
}
