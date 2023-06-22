import { Field } from "formik";
import { ItemType } from "../../../app_constants/enums";

const SingleItem = (props: { item: any; index: any }) => {
  const { item, index } = props;
  const questionNumber = index + 1;

  return (
    <div className="formNamingContainerNoRounded">
      <div className="form-row align-items-center">
        <div className="col">
          {/* <span>{questionNumber}</span> */}
          <Field
            type="text"
            className="form-control"
            name={`formData.${index}.title`}
            placeholder="Title"
          />
        </div>
        {item.item.type === ItemType.Date && (
          <div className="col">
            <Field
              type="date"
              className="form-control"
              name={`formData.${index}.date`}
              placeholder="Date"
            />
          </div>
        )}
        {item.item.type !== ItemType.Date && (
          <div className="col">
            <Field
              type="text"
              className="form-control"
              name={`formData.${index}.text`}
              placeholder="Description"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleItem;
