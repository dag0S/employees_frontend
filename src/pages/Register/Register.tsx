import { FC, useState } from "react";
import { Card, Form, Row, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { User } from "@prisma/client";
import Layout from "../../components/Layout/Layout";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomPasswordInput from "../../components/CustomPasswordInput/CustomPasswordInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Paths } from "../../paths";
import { useRegisterMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

type RegisterData = Omit<User, "id"> & { confirmPassword: string };

const Register: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [registerUser] = useRegisterMutation();

  const register = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap();
      navigate(Paths.home);
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
        <Card title="Регистрация" style={{ width: "30rem" }}>
          <Form onFinish={register}>
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
          <ErrorMessage message={error} />
        </Card>
      </Row>
    </Layout>
  );
};

export default Register;
