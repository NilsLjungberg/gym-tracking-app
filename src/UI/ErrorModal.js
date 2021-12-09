import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onErrorHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <h1>{props.title}</h1>
      <h2>{props.message}</h2>
      <Button
        className={classes.button}
        type="button"
        onClick={props.onErrorHandler}
      >
        Yes, I want to keep making gains
      </Button>
    </div>
  );
};

const ErrorModal = (props) => (
  <>
    {ReactDOM.createPortal(
      <Backdrop onErrorHandler={props.onErrorHandler} />,
      document.getElementById("backdrop")
    )}
    {ReactDOM.createPortal(
      <ModalOverlay
        title={props.title}
        message={props.message}
        onErrorHandler={props.onErrorHandler}
      />,
      document.getElementById("modal-overlay")
    )}
  </>
);

export default ErrorModal;
