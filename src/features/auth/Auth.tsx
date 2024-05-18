import { FC } from "react";
import { AuthProps } from "./AuthProps";
import { useCurrentQuery } from "../../app/services/auth";

const Auth: FC<AuthProps> = ({ children }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <span>Загрузка</span>;
  }

  return <>{children}</>;
};

export default Auth;
