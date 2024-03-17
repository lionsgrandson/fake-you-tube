import "../../css/sideCardCss/infoText.css";
export default function infoText(props) {
  return (
    <section className="infoTextSection">
      <p>{props.videoTitle}</p>
      <p>{props.YouTuberName}</p>
      <p>{props.ViewCount}</p>
    </section>
  );
}
