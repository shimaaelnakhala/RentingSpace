import React from 'react';
import './RequestDone.css';
import { Link } from 'react-router-dom';
const RequestDone = () => {
  return (
    <div>
      <div className='container'>
      <div className='request my-5 rounded'>
      <span className='setting col-5 offset-5 '><i class="fa fa-cog" aria-hidden="true"></i>
    </span>
    <h3 className='col-4 offset-4'>Renting request is done</h3>
    <div class="col-5 offset-5">
    <Link to="/home">
    <button class="btn btn-primary btnn" type="button">Ok</button>
    </Link>
      </div>
      
      </div>
      </div>
    </div>
  );
}

export default RequestDone;
