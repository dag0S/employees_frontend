import { FC } from "react";
import { Alert } from "antd";
import { ErrorMessageProps } from "./ErrorMessageProps";

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  if (!message) {
    return null;
  }
  return <Alert message={message} type="error" />;
};

export default ErrorMessage;
