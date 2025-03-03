import React from 'react';
import './RentSpacing.css'
import RequestDone from '../RequestDone/RequestDone';
import { Link } from 'react-router-dom';
const RentSpacing = () => {
  
  return (
    <div>
    <div className="container descrip">
    <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="assets/img/office.png" className="rounded d-block w-100" alt="..."/>
      
      </div>
    
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
    <span className="fa fa-angle-left" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="fa fa-angle-right" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>

  </div>
  <div className='des'>
    <h2>educational space</h2>
        <p>Gaza, Al Nasser street</p></div> 
        <div className="box mb-5">
        <table class="table rounded mx-5">
      <tr>
      <th>#PEOPLE</th>
      <th>DURATION</th>
      <th>PRICE</th>
      <th>ACCESS HOURS</th>
      <th>AVAILABILITY</th>
      </tr>
    
      <tr>
      <th>5</th>
      <th>1 month</th>
      <th>$ 100</th>
      <th>Reception Hours</th>
      <th className='green'>Available</th>
      </tr>
        </table>
        </div>
<div className='text-center margin-auto my-3'>
<button type="button" class="btn">Confirm renting the office</button>
<Link to="/RequestDone">
<button type="button" class="btn btn-primary">Rent Now</button>

</Link>


</div>
    </div>
    </div>
  );
}

export default RentSpacing;
