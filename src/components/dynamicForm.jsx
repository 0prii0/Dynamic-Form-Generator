import React from "react";


function DynamicForm({ title, sections }) {
  return (
    <>
      <div className="w-full bg-blue-100">
        <h1 className="text-3xl font-bold text-indigo-600 text-center mb-8">{title}</h1>
      </div>
      <div>
        <form className="space-y-10">
          {sections.map((section, sectionIndex) => (
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm" key={sectionIndex} >
              <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-6">{section.heading}</h2>

              <div className=" grid-cols-1 md:grid-cols-2 gap-6">
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-600 mb-2">{field.label}</label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none"
                  />
                </div>
              ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
             className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "green";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default DynamicForm;


