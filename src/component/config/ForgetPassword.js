import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Forgetpassword } from "../../../../Server/controllers/user";
const initialValues = { email: "" };
const validationSchema = yup.object({
  email: yup.string().email("Invalid email!").required("Email is missing!"),
});
const forgetPassword = () => {
  const handleResetLink = async (values, formikActions) => {
    const res = await Forgetpassword(values.email);
    if (!res.success) return console.log(res.error);
    formikActions.resetForm();
    console.log(res);
  };
  return (
    <>
      <div className="container">
        <form>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleResetLink}
          >
            {({
              errors,
              values,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => {
              return (
                <>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onBlur={handleBlur("email")}
                    onChange={handleChange("email")}
                  />
                  <p>{touched.email && errors.email ? errors.email : ""}</p>
                  <input
                    type="submit"
                    onClick={handleSubmit}
                    value="Send link"
                  />
                </>
              );
            }}
          </Formik>
        </form>
        <div className="navigator">
          <a href="/login">Log in</a>
          <a href="signin">Sign in</a>
        </div>
      </div>
    </>
  );
};

export default forgetPassword;
