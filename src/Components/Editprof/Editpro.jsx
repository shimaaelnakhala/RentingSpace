import React , { useState } from 'react';
import './Editpro.css';
import { Link } from 'react-router-dom';
const Editpro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleSave = (e) => {
    e.preventDefault();
    alert('Changes saved successfully');
  };

  return (
    <div>
     <div className="container">
     <div className="parent rounded-4">
     <div className="back">
     
     <h3><i class="fa fa-chevron-left" aria-hidden="true"></i>Back</h3>
     </div>
     <div className="img-prof">
     <img className='img-fluid rounded' src="assets/img/viewimg.png" alt="" />
     </div>
     <form className='mb-3 col-5' onSubmit={handleSave}>
     <div className="edit">
     <label className="form-label" htmlFor="name">Name</label>
     <input type="text" id="name" name="name" value={name} className='form-control' onChange={(e) => setName(e.target.value)}
     required placeholder='John Williams' />
     </div>
     <div className="edit">
     <label className="form-label" htmlFor="email">Email</label>
     <input type="email" placeholder='johnwilliams@gmail.com'
     id="email"
     name="email"
     value={email}
     className='form-control'
     onChange={(e) => setEmail(e.target.value)}
     required />
     </div>
     <div className="edit">
     <label className="form-label" htmlFor="text">Phone Number</label>
     <input type="phone" id="phone" name="phone" placeholder='+972 59 000 0055' value={phone} className='form-control'
     onChange={(e) => setPhone(e.target.value)}
     required />
     </div>
     <Link className="my-5" to="/Changepassword">  Change Password</Link>
     <button className='btn btn-primary col-12' type="submit"> Save</button>
     </form>
  
     </div>

     </div> 
    </div>
  );
}

export default Editpro;
