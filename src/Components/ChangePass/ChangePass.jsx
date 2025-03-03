import React , { useState } from 'react';
import './ChangePass.css';
import Editpro from '../Editprof/Editpro';
import { Link } from 'react-router-dom';

const ChangePass = () => {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Changes saved successfully');
    setNewPassword('');
    setConfirmPassword('');
  };
  return (
    <div>
    <div>
    <div className="container">
    <div className="parent rounded-4">
    <div className="back">
    <Link to="/EditProfile">
    <h3><i class="fa fa-chevron-left" aria-hidden="true"></i>Back</h3></Link>
    </div>
    <form className='mb-3 col-5' onSubmit={handleSubmit}>
    <div className="edit">
    <label className="form-label" htmlFor="newPassword">New password</label>
    <input type="password" 
    id="newPassword"
    name="newPassword"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    required
    className="form-control" placeholder='Please enter new Password' />
    </div>
    <div className="edit">
    <label  className="form-label" htmlFor="confirmPassword">Confirm new password</label>
    <input type="password"  id="confirmPassword"
    name="confirmPassword"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    required className="form-control" placeholder='Re-enter new password' />
    </div>
    <button className='btn btn-primary col-12' type="submit"> Save Password</button>
    </form>
    </div>
    </div> 
   </div>
    </div>
  );
}

export default ChangePass;
