import { FC } from "react";
import { Employee } from "@prisma/client";
import { Card, Form, Space } from "antd";
import { EmployeeFormProps } from "./EmployeeFormProps";
import CustomInput from "../CustomInput/CustomInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CustomButton from "../CustomButton/CustomButton";

const EmployeeForm: FC<EmployeeFormProps<Employee>> = ({
  onFinish,
  title,
  error,
  btnText,
  employee,
}) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="employee-form" onFinish={onFinish} initialValues={employee}>
        <CustomInput type="text" name="firstName" placeholder="Имя" />
        <CustomInput type="text" name="lastName" placeholder="Фамилия" />
        <CustomInput type="number" name="age" placeholder="Возраст" />
        <CustomInput type="text" name="address" placeholder="Адрес" />
        <Space>
          <ErrorMessage message={error} />
          <CustomButton htmlType="submit">{btnText}</CustomButton>
        </Space>
      </Form>
    </Card>
  );
};

export default EmployeeForm;
