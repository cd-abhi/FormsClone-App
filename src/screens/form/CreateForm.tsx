import React, { useState } from "react";
import "./css/create_form.css";
import { FieldArray, Form, Formik } from "formik";
import { InitialValues } from "../../app_constants/interfaces";
import FormNaming from "./components/FormNaming";
import AddItemExpandable from "./components/AddItemExpandable";
import MenuButtons from "./components/MenuButtons";
import { onFormSubmit } from "./helper/handlers";
import SingleItem from "./components/SingleItem";

const CreateForm = () => {
  const initialValues: InitialValues = {
    formTitle: "",
    formDescription: "",
    formData: [],
  };

  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div>
      <div className="container row">
        <div className="col-8 formSection">
          <div className="col">
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                onFormSubmit(values);
              }}
            >
              {({ values, setValues }) => {
                const addItemToFormData = (item: any) => {
                  setValues((prevValues) => ({
                    ...prevValues,
                    formData: [...prevValues.formData, item],
                  }));
                };

                return (
                  <Form>
                    <MenuButtons
                    />
                    <FormNaming />
                    <br />
                    <FieldArray
                      name="formData"
                      render={(array) => (
                        <div>
                          {values.formData.map((item, index) => (
                            <SingleItem
                              item={item}
                              index={index}
                              key={index}
                            />
                          ))}
                        </div>
                      )}
                    />
                    <AddItemExpandable
                      addItemToFormData={addItemToFormData}
                      values={values}
                    />
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
