import { toast } from "react-toastify";
import { InitialValues } from "../../../app_constants/interfaces";

export const onFormSubmit=(values: InitialValues)=>{
    console.log(values);
    // console.log(values.formDescription);
    // console.log(values.formData);

    // values.formData.forEach((value)=>{
    //     console.log(value);
    // });

    // toast.success("Form Created")
}