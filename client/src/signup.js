import React from "react";
import logo from './path.png'
import { Link } from "react-router-dom";

function Signup(){
    return(
        <>
            
            <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
      <div className="container py-3 h-100 small container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1681487013658-0e858fe92840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFmcmljYW4lMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt="login form"
                    className="image-logo"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img src={logo} alt="logo" className="logo" />
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign up for an account
                      </h5>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example27">
                          Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example27">
                          Confirm Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                      <button type="button" class="btn btn-primary" id="donate-btn" >Sign Up</button>

                      </div>

                     
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Already have an account? 
                        <Link to='/login' >Login here</Link>
                        {/* <a href="#!" style={{ color: '#393f81' }}>Login here</a> */}
                      </p>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Signup;