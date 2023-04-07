import ReactDOM from "react-dom";
import { Fragment } from "react";
import { useEffect, useState } from "react";

import styles from './SideNavigationModal.module.scss';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const SideNavigationModal = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <Fragment>
      {mounted &&
        ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} />,
          document.getElementById("portal")
        )}
      {mounted &&
        ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById("portal")
        )}
    </Fragment>
  );
};

export default SideNavigationModal;
