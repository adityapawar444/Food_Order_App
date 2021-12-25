import { Fragment } from "react/cjs/react.production.min";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";

function BackDrop(props) {

    const backdropClickHamdler = () =>{
        props.onClick();
    }

  return <div className={classes.backdrop} onClick={backdropClickHamdler}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <BackDrop onClick={props.onCloseModal} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
