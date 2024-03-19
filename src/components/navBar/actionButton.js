import '../../css/navBar/actionButton.css'
export default function actionButton(props) {
  return (
    <>
      <button
        className="actionButton"
        href="#index"
      >
        {props.icon}
        {props.title}
      </button>
    </>
  );
}
