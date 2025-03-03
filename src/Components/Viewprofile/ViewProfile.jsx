import React from "react";
import './ViewProfile.css';
export default function ViewProfile() {
    return (
        <>
          
          <div className="container">
                <section className="parent rounded-4">
                  
                            <div className="img-prof">
                          
                              <img src="assets/img/viewimg.png" className='img-fluid rounded' alt="" />
                            <span>  <p>Sarah J.</p></span> 
                            
                            </div>

                        <section className="email">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            <span>sarah11@gmail.com</span>
                        </section>

                        <section className="phone">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>+972 59 578 1112</span>
                        </section>
                        <div className="col-md-4 col-xs-12">
<div className="box">
{/*<img className='img-fluid rounded' src={prefix+place.poster_path} alt="" />*/}
<img className='img-fluid rounded' src="assets/img/office.png" alt="" />
<div className="description pt-3">
{/*<h6>{place.type}</h6>*/}
<h6>Educational space</h6>
<span className="price">$100 / mo</span>
{/*<p>{place.title}</p>*/}
<p className="card-text">Gaza, Al Rimal neighborhood</p>

<div className="last-section">
<div className='star'>
<i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
</div>

<span className='review'>(13 reviews)</span>
</div>
</div>
</div>
</div>


                

                  
                </section>
                </div>
        </>

    );
}
