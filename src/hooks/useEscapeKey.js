import React from "react";

export const useEscapeKey = (callback) => {
  const onEscapeKey = React.useCallback(
    (e) => {
      if (e.key !== "Escape") return;
      callback();
    },
    [callback]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", onEscapeKey);

    return () => {
      window.removeEventListener("keydown", onEscapeKey);
    };
  }, [onEscapeKey]);
};
