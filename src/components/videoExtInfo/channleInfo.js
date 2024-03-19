// the logo the name the subscribe and sub count
import "../../css/videoExtInfo/channleInfo.css";
import ActionButton from "../navBar/actionButton";
import chanImg from "../../img/chanLogo.jpg";
export default function channleInfo() {
  return (
    <div className="channleInfoSection">
      <img className="chanIMG" src={chanImg} alt="placeholder"></img>
      <div>
        <h2>Moving Soundcloud</h2>
        <p>102K subscribers</p>
      </div>
      <ActionButton title="Subscribe"></ActionButton>
    </div>
  );
}
