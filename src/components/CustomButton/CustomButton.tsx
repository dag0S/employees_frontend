import { FC } from "react";
import { Button, Form } from "antd";
import { CustomButtonProps } from "./CustomButtonProps";

const CustomButton: FC<CustomButtonProps> = ({
  children,
  htmlType = "button",
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
  ghost,
}) => {
  return (
    <Form.Item>
      <Button
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
        ghost={ghost}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

export default CustomButton;
