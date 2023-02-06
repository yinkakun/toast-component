import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToast } from "../ToastContext";

function ToastShelf() {
  const { toasts } = useToast();

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast id={id} variant={variant} message={message} />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
