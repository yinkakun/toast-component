import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import { useToast } from "../ToastContext";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, id }) {
  const { removeToast } = useToast();
  const Icon = ICONS_BY_VARIANT[variant] || Info;

  return (
    <div className={`${styles.toast} ${styles[variant] || styles.notice}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton} onClick={() => removeToast(id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
