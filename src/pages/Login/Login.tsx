import { FC } from "react";
import { Card, Form, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomPasswordInput from "../../components/CustomPasswordInput/CustomPasswordInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Paths } from "../../paths";

const Login: FC = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Вход" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput
              type="email"
              name="email"
              placeholder="Введите почту"
            />
            <CustomPasswordInput name="password" placeholder="Введите пароль" />
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link></Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
