import { Form, Input } from "antd";
import { FC } from "react";
import { CustomInputProps } from "./CustomInputProps";

const CustomInput: FC<CustomInputProps> = ({
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: "Обязательное поле" }]}
      shouldUpdate={true}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};

export default CustomInput;
