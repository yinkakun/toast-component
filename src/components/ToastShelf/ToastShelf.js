import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToast } from "../ToastContext";

function ToastShelf() {
  const { toasts, removeAllToasts } = useToast();

  React.useEffect(() => {
    const onEscapePress = (e) => {
      if (e.key !== "Escape") return;
      removeAllToasts();
    };

    window.addEventListener("keydown", onEscapePress);

    return () => {
      window.removeEventListener("keydown", onEscapePress);
    };
  }, [removeAllToasts]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
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
