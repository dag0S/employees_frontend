import { FC, useState } from "react";
import { Card, Form, Row, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomPasswordInput from "../../components/CustomPasswordInput/CustomPasswordInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Paths } from "../../paths";
import { UserData, useLoginMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Login: FC = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState("");

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();
      navigate("/");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Вход" style={{ width: "30rem" }}>
          <Form onFinish={login}>
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
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
