import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import estilos from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={estilos.backdrop} onClick={props.onConfirm} />;
  };
  
  const ModalOverlay = (props) => (
    <Card className={estilos.modal}>
      <header className={estilos.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={estilos.content}>
        <p>{props.message}</p>
      </div>
      <footer className={estilos.actions}>
        <Button onClick={props.onConfirm}>Aceptar</Button>
      </footer>
    </Card>
  );
  
  function Modal(props) {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <Backdrop onConfirm={props.onConfirm} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}
          />,
          document.getElementById("modal-root")
        )}
      </React.Fragment>
    );
  }

export default Modal;