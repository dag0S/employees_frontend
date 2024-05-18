import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Employee } from "@prisma/client";
import { Row } from "antd";
import { useEditEmployeeMutation, useGetEmployeeQuery } from "../../app/services/employees";
import Layout from "../../components/Layout/Layout";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";
import { Paths } from "../../paths";

const EditEmployee: FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [error, setError] = useState("");
  const { data, isLoading } = useGetEmployeeQuery(params.id || "");
  const [editEmployee] = useEditEmployeeMutation();

  if (isLoading) {
    return <span>Загрузка</span>;
  }

  const handleEditEmployee = async (employee: Employee) => {
    try {
      const editedEmployee = {
        ...data,
        ...employee,
      };

      await editEmployee(editedEmployee).unwrap();
      navigate(`${Paths.status}/updated`);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизветсная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <EmployeeForm
          title="Редактировать сотрудника"
          btnText="Редактировать"
          error={error}
          employee={data}
          onFinish={handleEditEmployee}
        />
      </Row>
    </Layout>
  );
};

export default EditEmployee;
