import React from "react";

const ToastContext = React.createContext(null);

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;

export const useToast = () => {
  const context = React.useContext(ToastContext);

  if (context === undefined || context === null) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { toasts, setToasts } = context;

  const addNewToast = (message, variant) => {
    const newToasts = [
      ...toasts,
      {
        message,
        variant,
        id: crypto.randomUUID(),
      },
    ];

    setToasts(newToasts);
  };

  const removeToast = (id) => {
    const newToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(newToasts);
  };

  return { addNewToast, removeToast, toasts };
};
