import React,{useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import Joi from "joi";
import styleR from "./Register.module.css";
export default function Register() {
  // let navigate = useNavigate();
  let [error, setError] = useState({});
  let [user,setUser]=useState({
    name:'',
    email:'',
    phoneNumber:'',
    password:'',
    cpassword:''
  });

 //async 
    function submitRegister(e){
    e.preventDefault();
    let resultValidate = validateRegisterUser(user);
    let newErrors = {};
    if (resultValidate.error){
      resultValidate.error.details.forEach((detail) => {
      newErrors[detail.context.key] = detail.message;
    });
    setError(newErrors);

    }
    else{
      setError({});
      ////////////////////////GO TO BACKEND////////////////////////
      // let {data} = await axios.post('API LINK', user); 
      // if(data.message === "success"){navigate('./Login');}
    }
  }

  function getUserData(e){
    let myUser = user;
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
  }

  function validateRegisterUser(user){
    let schema = Joi.object({
      name:Joi.string().min(5).max(20).required(),
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
      phoneNumber:Joi.string().pattern(/^(05[69])([0-9]{7})$/).required(),
      password:Joi.string().min(5).max(10).required(),
      cpassword:Joi.valid(Joi.ref('password')).required(),
    })
    return schema.validate(user,{abortEarly:false});
  } 

  return (
    <div>
      <div className="container vh-100">
            <div className="row d-flex justify-content-center align-items-center ">
            <div className={`col-md-5`}>
            <div className={`${styleR.reg_img}`}>
              <h1 className="text-capitalize my-3">sign up</h1>
              <p className="my-3 py-3">
                welcome to “website name” fill out the form so you can access to
                the website
              </p>
              <img src="assets/img/reg-img.png" alt="Person" />
           </div>
           
            </div>
            <div className={`col-md-5`}>
               <div className={`${styleR.reg_form} bg-white py-4 px-4 mt-5 m-auto rounded-5 w-75 `}>
                <form onSubmit={submitRegister} className={` d-flex justify-content-center  flex-column `}>
                  <div className="mb-2">
                    <label htmlFor="name" className="form-label mb-0 pb-1">
                      Name
                    </label>
                    <input
                      onChange={getUserData}
                      type="name"
                      id="name"
                      name="name"
                      value={user.name}
                      placeholder="Enter your name"
                      className={`form-control py-1`}
                    />
                     {error && error.name ? <span className={styleR.err}>{error.name}</span> :''}
                  </div>
                  <div className="mb-2">
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
                  {error && error.email ? <span className={styleR.err}>{error.email}</span> :''}
                  </div>
                  <div className="mb-2">
                    <label htmlFor="phoneNumber" className="form-label mb-0 pb-1">
                     Phone Number
                    </label>
                    <input
                      onChange={getUserData}
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={user.phoneNumber}
                      placeholder="05XXXXXXXX"
                      className="form-control py-1"
                    />
                    {error && error.phoneNumber ? <span className={styleR.err}>{error.phoneNumber}</span> :''}
                  </div>
                  <div className="mb-2">
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
                    {error && error.password ? <span className={styleR.err}>{error.password}</span> :''}
                  </div>
                  <div className="mb-2">
                    <label htmlFor="cpassword" className="form-label mb-0 pb-1">
                      Confirm Password
                    </label>
                    <input
                      onChange={getUserData}
                      type="password"
                      id="cpassword"
                      name="cpassword"
                      value={user.cpassword}
                      placeholder="Confirm your password"
                      className="form-control py-1"
                    />
                    {error && error.cpassword ? <span className={styleR.err}>{error.cpassword}</span> :''}
                  </div>
                  <div className="form-check mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input mt-2"
                      id="check"
                      required 
                    />
                    <label className="form-check-label" htmlFor="check">
                        I agree to the website privacy policy
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary py-2 mt-1 ">
                    Sign Up
                  </button>
                </form>
                <div className={`text-center mt-3 ${styleR.link}`}>
                Have an account?{" "}
                <Link to="/Login">
                  Login here
                </Link>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}