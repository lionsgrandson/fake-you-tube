import VideoInter from "./videoInter";
import VideoTitle from "./videoTitle";
import "../../css/videoExtInfo/videoExtInfo.css";
import ChannleInfo from "./channleInfo";
export default function videoExtInfo() {
  return (
    <div className="sectionVidExt">
      <div className="vid-title">
        <VideoTitle title="Harry Potter Ambient Music | Hogwarts | Relaxing, Studying, Sleeping"></VideoTitle>
      </div>
      <div className="channle-info">
        <ChannleInfo></ChannleInfo>
      </div>
      <div className="videoInter">
        <VideoInter></VideoInter>
      </div>
    </div>
  );
}
