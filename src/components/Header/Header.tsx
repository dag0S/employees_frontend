import { FC } from "react";
import { Layout, Space, Typography } from "antd";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { Paths } from "../../paths";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <Layout.Header className={styles["header"]}>
      <Space>
        <TeamOutlined className={styles["team-icon"]} />
        <Link to={Paths.home}>
          <CustomButton type="link">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <CustomButton type="text" icon={<UserOutlined />}>
            Зарегистрироваться
          </CustomButton>
        </Link>
        <Link to={Paths.login}>
          <CustomButton type="text" icon={<LoginOutlined />}>
            Войти
          </CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};

export default Header;
