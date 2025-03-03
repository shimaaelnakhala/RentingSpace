import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 
  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`); 
    }
  };

  return (
    <div>
      {/*start navbar*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="home">Get Spacy</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <form className="d-flex ms-5" role="search" onSubmit={handleSearch}>
                <span>
                  <span><i className="fa fa-search" aria-hidden="true"></i></span>
                  <input
                    className="form-control px-5"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // تحديث حالة الإدخال
                  />
                </span>
              </form>
            </ul>
          </div>
          <div className="d-flex flex-row-reverse">
            <li className="nav-item mx-3 mx-md-3">
              <Link to="/ViewProfile">
                <img className='nav-link profile img' src="assets/img/viewimg.png" alt="" />
              </Link>
            </li>
            <li className="nav-item mx-3 my-3">
              <a><i className="nav-link fa fa-bell-o" aria-hidden="true"></i></a>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link my-3" href="#">عربي</Link>
            </li>
          </div>
        </div>
      </nav>
      {/* end navbar */}
    </div>
  );
};

export default Navbar;
