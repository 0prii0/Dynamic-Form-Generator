import React from "react";
import DynamicForm from "../components/dynamicForm";

const DogAdoptionForm = () => {
  const dogFormFields = [
    {
      heading: "Dog Adoption Form",
      fields: [
    {
      name: "nameOfDog",
      label: "Name of the dog",
      type: "text",
    },
    {
      name: "adopterName",
      label: "Adopter's Name",
      type: "text",
    },
    {
      name: "email",
      label: "Adopter's Email",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
    },
    {
      name: "city",
      label: "City",
      type: "text",
    },
    {
      name: "state",
      label: "State",
      type: "text",
    },
    {
      name: "country",
      label: "Country",
      type: "text",
    },
    {
      name: "currentlyPets",
      label: "Do you currently have any pets",
      type: "radio",
    },
    ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <DynamicForm title="Dog Adoption Form" sections={dogFormFields} />
    </div>
  );
};

export default DogAdoptionForm;




