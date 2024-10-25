import { useContext } from "react";
import AlertContext from "../Contexts/alert.context";

const alertStyles = "font-normal text-base rounded-md p-2 m-2";

const severityStyles = {
  success: "bg-green-200 text-green-500",
  info: "bg-blue-200 text-blue-500",
  warning: "bg-yellow-200 text-yellow-500",
  error: "bg-red-200 text-red-500",
};

const Alert = () => {
  const [alert] = useContext(AlertContext);
  if (!alert) {
    return null;
  }

  const fullStyles = `${alertStyles} ${severityStyles[alert.type]}`;

  return <div className={fullStyles}>{alert.text}</div>;
};

export default Alert;
