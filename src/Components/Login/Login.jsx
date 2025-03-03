import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import styleL from "../Login/Login.module.css";
export default function Login() {
  // let navigate = useNavigate();
  let [error, setError] = useState({});
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  //async
  function submitRegister(e) {
    e.preventDefault();
    let resultValidate = validateRegisterUser(user);
    if (resultValidate) {
      let newErrors = {};
      resultValidate.error.details.forEach((detail) => {
        newErrors[detail.context.key] = detail.message;
      });
      setError(newErrors);
    } else {
      setError({});
      ////////////////////////GO TO BACKEND////////////////////////
      // let {data} = await axios.post('API LINK', user);
      // if(data.message === "success"){
          // localStorage.setItem("userToken",data.token);
          // navigate('./home');
      // }
    }
  }

  function getUserData(e) {
    let myUser = user;
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  function validateRegisterUser(user) {
    let schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
        .required(),
      password: Joi.string().min(5).max(10).required(),
    });
    return schema.validate(user, { abortEarly: false });
  }

  return (
    <div>
      <div className="container vh-100">
        <div className="row h-100 d-flex justify-content-center align-items-center ">
          <div className="col-md-5">
            <div className={`${styleL.reg_img}`}>
              <h1 className="text-capitalize my-3">login</h1>
              <p className="my-3 py-3">welcome back!</p>
              <img src="assets/img/reg-img.png" alt="Person" />
            </div>
          </div>
          <div className={`col-md-5`}>
            <div
              className={`${styleL.reg_form} bg-white py-4 px-4 mt-4 m-auto rounded-5 w-75 `}
            >
              <form
                onSubmit={submitRegister}
                className=" d-flex justify-content-center flex-column"
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label mb-0 pb-1">
                    Email
                  </label>
                  <input
                    onChange={getUserData}
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    placeholder="Enter your name"
                    className="form-control py-1"
                    aria-describedby="emailHelp"
                  />
                  {error && error.email ? (
                    <span className={styleL.err}>{error.email}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label mb-0 pb-1">
                    Password
                  </label>
                  <input
                    onChange={getUserData}
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    placeholder="Enter your password"
                    className="form-control py-1"
                  />
                  {error && error.password ? (
                    <span className={styleL.err}>{error.password}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className={`mb-3 ${styleL.link}`}>
                  <Link to="/Forgetpass">Forgot password ?</Link>
                </div>
                <button type="submit" className="btn btn-primary py-2 mt-1 ">
                  Login
                </button>
              </form>
              <div className={`text-center mt-3 ${styleL.link}`}>
                Don't have an account? <Link to="/Register">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
