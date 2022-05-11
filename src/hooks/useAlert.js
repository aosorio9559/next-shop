import { useState } from "react";

export const useAlert = (options) => {
  const defaultAlertOptions = {
    active: false,
    message: "",
    type: "",
    autoClose: true,
  };

  const [alert, setAlert] = useState({
    ...defaultAlertOptions,
    ...options,
  });

  const toggleAlert = () => {
    setAlert(!alert.active);
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
};
