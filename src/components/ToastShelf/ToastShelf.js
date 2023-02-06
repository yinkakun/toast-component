import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, removeToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              id={id}
              variant={variant}
              message={message}
              removeToast={removeToast}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
