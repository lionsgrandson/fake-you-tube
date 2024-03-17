import "../../css/sideCardCss/infoText.css";
export default function infoText(props) {
  return (
    <section className="infoTextSection">
      <p className="vidTitle">{props.videoTitle}</p>
      <p className="vidData">{props.YouTuberName}</p>
      <p className="vidData">
        {props.ViewCount} * {props.TimePosted}
      </p>
    </section>
  );
}
