import { createContext, useState, useEffect, useRef } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ msg: "", type: "" });
  const timerRef = useRef(null);

  // clear the alert after 5 seconds
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setAlert(null);
    }, 5000);
  });

  return <AlertContext.Provider value={[alert, setAlert]}>{children}</AlertContext.Provider>;
};

export default AlertContext;
