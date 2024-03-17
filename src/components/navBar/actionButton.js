export default function actionButton(props) {
  return (
    <>
      <a
        className="actionButton"
        href="#index"
      >
        {props.title}
        {props.icon}
      </a>
    </>
  );
}
