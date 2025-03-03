import React,{useState} from "react";
import Joi from "joi";
import styleF from "../Forgetpass/Forgetpass.module.css";
// import { useNavigate } from "react-router-dom";
export default function Forgetpass() {
   // let navigate = useNavigate();
   let [error, setError] = useState({});
   let [email,setEmail]=useState("");
 
  //async
  function submitRegister(e) {
    e.preventDefault();
    let resultValidate = validateEmail(email);
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
      // if(data.message === "success"){ ////// navigate('./Login');}
    }
  }
 
   function getUserEmail(e){
     let newEmail = email;
     newEmail=e.target.value;
     setEmail(newEmail);
   }
 
   function validateEmail(email){
     let schema = Joi.object({
       email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
     })
     return schema.validate({email},{abortEarly:false});
   } 
 
 
  return (
    <div>
      <div className="container vh-100">
        <div className="row h-100 d-flex justify-content-center align-items-center ">
          <div className="col-md-6">
            <div className={`${styleF.reg_img}`}>
              <h1 className="text-capitalize my-3">Forgot Password</h1>
              <p className="my-3 py-3 ">
                just enter your email so we can send you new password
              </p>
              <img src="assets/img/reg-img.png" className="w-50" alt="Person" />
          </div>
          </div>
            <div className={`col-md-5`}>
            <div className={`${styleF.reg_form} bg-white py-4 px-4 mt-4 m-auto rounded-5 w-75 `}>
              <form onSubmit={submitRegister} className=" d-flex justify-content-center flex-column">
              <div className="mb-3">
                  <label htmlFor="email" className="form-label mb-0 pb-2">
                    Email
                  </label>
                  <input
                    onChange={getUserEmail}
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your name"
                    className="form-control py-1"
                    aria-describedby="emailHelp"
                  />
                  {error && error.email ? (
                    <span className={styleF.err}>{error.email}</span>
                  ) : (
                    ""
                  )}
                </div>
                <button type="submit" className="btn btn-primary py-2 mt-2 mb-3 ">
                  Send Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

