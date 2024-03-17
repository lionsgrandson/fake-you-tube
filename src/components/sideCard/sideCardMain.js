import InfoText from "./infoText";
import "../../css/sideCardCss/sideCardMain.css";

export default function sideCardMain(props) {
  return (
    <section className="sectionCard">
      <img
        alt="placeholder img"
        src={props.imgPath}
        className="preiviewIMG"
      ></img>
      <InfoText
        videoTitle={props.videoTitle}
        YouTuberName={props.YouTuberName}
        ViewCount={props.ViewCount}
        TimePosted={props.TimePosted}
      ></InfoText>
    </section>
  );
}
