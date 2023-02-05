import React from "react";

import Button from "../Button";
import Toast from "../Toast/Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [toastIsVisible, setToastIsVisible] = React.useState(false);
  const [selectedVariant, setSelectedVariant] = React.useState("");

  const hideToast = () => {
    setToastIsVisible(false);
  };

  const showToast = () => {
    setToastIsVisible(true);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastIsVisible && (
        <Toast
          message={message}
          hideToast={hideToast}
          variant={selectedVariant}
        />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              return (
                <ToastVariant
                  key={variant}
                  variant={variant}
                  setVariant={setSelectedVariant}
                  isChecked={selectedVariant === variant}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={showToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;

const ToastVariant = ({ variant, setVariant, isChecked }) => {
  const id = React.useId();

  return (
    <label htmlFor={`variant-notice-${id}`}>
      <input
        type="radio"
        name="variant"
        value={variant}
        checked={isChecked}
        id={`variant-notice-${id}`}
        onChange={(e) => setVariant(e.target.value)}
      />
      {variant}
    </label>
  );
};
