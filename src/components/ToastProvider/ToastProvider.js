import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]); // { message, variant, id }

  const addToast = React.useCallback(({ message, variant }) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      { message, variant, id: crypto.randomUUID() },
    ]);
  }, []);

  const dismissToast = React.useCallback((id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  }, []);

  useEscapeKey(React.useCallback(() => setToasts([]), []));

  return (
    <ToastContext.Provider value={{ addToast, dismissToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
