import React from "react";
import untitledDesign from "../../images/Untitled design (16) 1 (1).png";
import { Formik } from "formik";
import * as yup from "yup";
import { adminSignin } from "../../utils/auth";
const initialValues = { email: "", password: "" };
const validationSchema = yup.object({
  email: yup.string().email("Invalid email!").required("Email is missing!"),
  password: yup.string().trim().min(8, "password is too short"),
});
const Admin = () => {
  const handleadminlogin = async (values, formikActions) => {
    const res = await adminSignin(values);
    if (!res.success) return console.log(res.error);
    formikActions.resetForm();
    console.log(res);
  };
  return (
    <>
      <section>
        <div className="pop-up_section">
          <div className="container">
            <div className="row ">
              <div className="login_form_section ">
                <div className="login_form">
                  <div className="content ">
                    <h1>Wellcome Admin </h1>
                    <p>Login with your ID and Password</p>
                  </div>
                  <div className="form">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleadminlogin}
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
                            <div className="col_3">
                              <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="ID"
                                onBlur={handleBlur("email")}
                                onChange={handleChange("email")}
                              />
                              <i className="bi bi-envelope-fill"></i>
                            </div>
                            <p>
                              {touched.email && errors.email
                                ? errors.email
                                : ""}
                            </p>
                            <div className="col_3">
                              <input
                                type="password"
                                name="password"
                                id="password"
                                onBlur={handleBlur("password")}
                                onChange={handleChange("password")}
                                placeholder="enter your password"
                              />
                              <i className="bi bi-eye-slash-fill"></i>
                            </div>
                            <p>
                              {touched.password && errors.password
                                ? errors.password
                                : ""}
                            </p>
                            <div className="col_3">
                              <input
                                type="submit"
                                value="Login"
                                onClick={handleSubmit}
                              />
                              <div className="forget_password">
                                <a href="/reset-password">forget Password?</a>
                              </div>
                            </div>
                          </>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </div>
              <div className="image backgound_color_admin_login">
                <img src={untitledDesign} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
