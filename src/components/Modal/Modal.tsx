import { ReactNode } from "react";
import classes from "./Modal.module.scss";

interface ModalProps {
  children?: ReactNode;
  modalVisibility: boolean;
  setModalVisibility?: (receivedIndex: boolean) => void;
}

const Modal = ({
  children = <></>,
  modalVisibility = false,
  setModalVisibility,
}: ModalProps) => {
  const layerClickHandler = () => {
    setModalVisibility?.(false);
  };

  const modalContainerClickedHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return modalVisibility ? (
    <div className={classes["modal-wrapper"]} onClick={layerClickHandler}>
      <div
        className={classes["modal-container"]}
        onClick={modalContainerClickedHandler}
      >
        {children}
        <div className={classes["close-container"]} onClick={layerClickHandler}>
          X
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;

// Define position: relation in the parent container where you are using Modal
