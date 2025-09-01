import React from "react";
import DynamicForm from "../components/dynamicForm";

const EmployeeForm = () => {
  const employeeFormSections = [
    {
      heading: "Employee Information",
      fields: [
        {
          name: "empId",
          label: "Employee ID",
          type: "text",
        },
        {
          name: "empName",
          label: "Employee Name",
          type: "text",
        },
        {
          name: "department",
          label: "Department",
          type: "text",
        },

        {
          name: "gender",
          label: "Gender",
          type: "radio",
          required: true,
        },
        {
          name: "Phone",
          label: "Phone",
          type: "tel",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
        },
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <DynamicForm
        title="Employee Registration Form"
        sections={employeeFormSections}
      />
    </div>
  );
};

export default EmployeeForm;
