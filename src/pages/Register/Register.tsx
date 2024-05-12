import { FC } from "react";
import { Card, Form, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomPasswordInput from "../../components/CustomPasswordInput/CustomPasswordInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Paths } from "../../paths";
const Register: FC = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Регистрация" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput name="name" placeholder="Введите имя" />
            <CustomInput
              type="email"
              name="email"
              placeholder="Введите почту"
            />
            <CustomPasswordInput name="password" placeholder="Введите пароль" />
            <CustomPasswordInput
              name="confirmPassword"
              placeholder="Повторите пароль"
            />
            <CustomButton type="primary" htmlType="submit">
              Зарегистрироваться
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже есть аккаунта? <Link to={Paths.login}>Войдите</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

export default Register;
