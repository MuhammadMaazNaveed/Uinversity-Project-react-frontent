import React from "react";
import PopUp from "./PopUp";
import * as yup from "yup";
// import { useNavigation } from "react-router-dom";
import logo from "../../images/logo (1).png";
import google from "../../images/google.png";
import facebook from "../../images/facebook 1.png";
import Group from "../../images/Group 1.png";
import { Formik } from "formik";
import { signup } from "../../utils/auth.js";
import Admin from "./Admin";

const initialValuesSigin = { name: "", email: "", password: "" };
const validationSchemaSigin = yup.object({
  name: yup.string().trim().required("Name is missing!"),
  email: yup.string().email("Invalid email!").required("Email is missing!"),
  password: yup.string().trim().min(8, "password is too short"),
});
const Account = () => {
  // const navigate = useNavigation();
  const handleSignup = async (values, formikActions) => {
    const res = await signup(values);
    if (!res.success) return console.log(res.error);
    formikActions.resetForm();
    // navigate.replace("/login");
  };
  // for facebook

  return (
    <>
      <section>
        <div className="sign_up_page">
          <div className="left_side">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="content">
              <p>JOIN THE MMTH community for exclusive updates</p>
            </div>
            <div className="sign_up_image">
              <img src={Group} alt="" />
            </div>
          </div>
          <div className="right_side">
            <div className="container">
              <div className="select_box">
                <select name="" id="">
                  <option value="">English</option>
                  <option value="">Spanish</option>
                  <option value="">Urdu</option>
                  <option value="">Chinese</option>
                  <option value="">Balochi</option>
                </select>
              </div>
              <div className="form_section">
                <h1>Create account</h1>
                <div className="social_connect">
                  <div className="col_2">
                    <button>
                      <img src={google} alt="" width="50px" />
                      <p>Sign up with Google</p>,
                    </button>
                  </div>
                  <div className="col_2">
                    <button>
                      <img src={facebook} alt="" width="40px" />
                      <p>Sign up with Facebook</p>
                    </button>
                  </div>
                </div>
                <div className="or">
                  <p>-OR-</p>
                </div>
                <div className="form">
                  <Formik
                    initialValues={initialValuesSigin}
                    validationSchema={validationSchemaSigin}
                    onSubmit={handleSignup}
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
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            onBlur={handleBlur("name")}
                            onChange={handleChange("name")}
                          />
                          <p>{errors.name}</p>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onBlur={handleBlur("email")}
                            onChange={handleChange("email")}
                          />
                          <p>
                            {touched.email && errors.email ? errors.email : ""}
                          </p>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            onBlur={handleBlur("password")}
                            placeholder="Enter Password"
                            onChange={handleChange("password")}
                          />

                          <p>
                            {touched.password && errors.password
                              ? errors.password
                              : ""}
                          </p>
                          <input
                            type="submit"
                            className="submit"
                            value="Create Account"
                            onClick={handleSubmit}
                          />
                        </>
                      );
                    }}
                  </Formik>

                  <div className="form_bottom_text">
                    <div className="col_3">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#modalLoginForm"
                      >
                        Already have an account? Login
                      </button>
                    </div>
                    <div className="col_3">
                      <p>-OR-</p>
                    </div>
                    <div className="col_3">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#modalAdminLoginForm"
                      >
                        Login as admin
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <PopUp somepop={popup} /> */}
        </div>
      </section>
      <div className="container">
        <div
          className="modal fade"
          id="modalLoginForm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <PopUp />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="modal fade"
          id="modalAdminLoginForm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <Admin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
