import React from "react";

const Navbar = () => {


    return(
       
  <div className="header">
  <div className="collapse bg-dark" id="navbarHeader">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">Add some information about the al/</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                      <li><a href="#" class="text-white">Follow on Twitter</a></li>
                      <li><a href="#" class="text-white">Like on Facebook</a></li>
                      <li><a href="#" class="text-white">Email me</a></li>
                  </ul>
                      
              
          </div>
      </div>
  </div>
</div>

  <div className="navbar navbar-dark bg-dark shadow-sm"></div>
  <div className="container2">
      <a href="#" className="navbar-brand d-flex align-items-center"></a>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" ></svg>
      <strong>Album</strong>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"/>
      <span className="navbar-toggler-icon"></span>
  
  </div>
  </div>
)}


export default Navbar;