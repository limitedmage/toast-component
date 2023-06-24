import React from "react";

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    const escapeDismissesAllToasts = (event) => {
      if (event.key === "Escape") {
        callback(event);
      }
    };

    document.addEventListener("keydown", escapeDismissesAllToasts);

    return () => {
      document.removeEventListener("keydown", escapeDismissesAllToasts);
    };
  }, [callback]);
}
