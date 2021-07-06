import ReactDOM from "react-dom";

export default function MyModal(props) {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById("modal")
  );
}
