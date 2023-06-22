import { Field } from "formik";

const FormNaming = () => {
  return (
    <div className="formNamingContainer">
      <div className="form-row align-items-center">
        <div className="col">
          <Field
            type="text"
            className="form-control"
            name={`formTitle`}
            placeholder="Form title"
          />
        </div>
        <div className="col">
          <Field
            type="text"
            className="form-control"
            name={`formDescription`}
            placeholder="Form description"
          />
        </div>
      </div>
    </div>
  );
};

export default FormNaming;
