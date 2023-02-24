import "../../assests/Popup.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
const BASEURL = "http://localhost:8000/api/user";
const Reset = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [invalidUser, setInvalidUser] = useState("");
  const [busy, setBusy] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const { token, id } = queryString.parse(location.search);
  const verifyToken = async () => {
    try {
      await axios(`${BASEURL}/verify-token?token=${token}&id=${id}`);
      setBusy(false);
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) return setInvalidUser(data.error);
        return console.log(error.response.data);
      }
      console.log(error);
    }
  };
  useEffect(() => {
    verifyToken();
  });
  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setNewPassword({ ...newPassword, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = newPassword;
    if (password.trim().length < 8 || password.trim().length > 20) {
      return setError("Password must be 8 to 20 characters long!");
    }
    if (password !== confirmPassword) {
      return setError("Password doen't matched!");
    }

    try {
      setBusy(true);
      const { data } = await axios.post(
        `${BASEURL}/reset-password?token=${token}&id=${id}`,
        { password }
      );
      setBusy(false);
      if (data.success) {
        navigate.replace("/reset-password");
        setSuccess(true);
      }
    } catch (error) {
      setBusy(false);
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) return setError(data.error);
        return console.log(error.response.data);
      }
      console.log(error);
    }
  };
  if (success)
    return (
      <div className="">
        <h1>Password Reset Successfully</h1>
      </div>
    );
  if (invalidUser)
    return (
      <div className="">
        <h1>{invalidUser}</h1>
      </div>
    );
  if (busy)
    return (
      <div className="">
        <h1>Wait for a moment verifying reset token.</h1>
      </div>
    );
  return (
    <>
      <section>
        <div class="pop-up_section">
          <div class="container">
            <div class="row">
              <div class="login_form_section">
                <div class="login_form">
                  <div class="content">
                    <h1>Forgot your passward?</h1>
                    <p>Reset your passward here</p>
                  </div>
                  <form action="" method="post" onSubmit={handleSubmit}>
                    {error && <p>{error}</p>}
                    <div class="col_3">
                      <input
                        class="form-control"
                        type="password"
                        id="pass"
                        name="password"
                        onChange={handleOnChange}
                        placeholder="new password"
                      />
                      <i class="bi bi-eye-slash-fill"></i>
                    </div>
                    <div class="col_3">
                      <input
                        class="form-control"
                        type="password"
                        name="confirmPassword"
                        onChange={handleOnChange}
                        id="pass"
                        placeholder="confirm password"
                      />
                      <i class="bi bi-eye-slash-fill"></i>
                    </div>
                    <div class="col_3">
                      <input
                        class="btn btn-success w-100"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div class="img">
                <img src="./images/forgetpassward.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <h1>Reset Password</h1>
      <form action="" onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          type="password"
          name="password"
          onChange={handleOnChange}
          id="password"
          placeholder="********"
        />
        <input
          type="password"
          name="confirmPassword"
          onChange={handleOnChange}
          id="password"
          placeholder="********"
        />
        <input type="submit" value="Reset Password" />
      </form> */}
    </>
  );
};

export default Reset;
