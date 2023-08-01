import React from "react";
import logo from  './path.png'
import Footer from "./components/footer";

function Aboutus() {
    return(
       <>

    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://images.unsplash.com/photo-1612229693210-30e16029c415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="Girls" />
            <div class="carousel-caption d-none d-md-block">
            <h5 className="girls-group-header" >Helping young women develop </h5>
            <h5 className="girls-group-header" id="girls-group-header-color" >the courage and confidence</h5>
            <h5 className="girls-group-header" >to go through life</h5>  
            {/* <p className="carousel-text" >Aiming to keep more and more girls in school.</p> */}
            </div>
        </div>
    </div>

    <div className="about-header">
        <h2>Who we are</h2>
    </div>

    <div className="desc">    
    <img src={logo} className="logo-image" alt="logo" />
    <p className="desc-text">The Path is a Kenyan based Non-profit organisation aimed at keeping more disadvanted girls in school. Through our donation and charity programs, we collaborate with several insitutions to provide santary towels, water, hygiene and sanitary facilities to girls in poor environments.</p>
    </div>

    <Footer />
        </>
    )
}

export default Aboutus;