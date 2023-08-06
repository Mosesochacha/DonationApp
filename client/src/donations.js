import React from "react";
// import qrcode from './qr-code.png'
import { Link } from "react-router-dom";

function Donations(){
    return(
       <>
            <div className="donations-container">
                <img src="https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" alt="Snow" />
                    <Link to="https://donate.stripe.com/test_00g01n8fSbEh2KA3cc">
                    <button type="button" class=" btn btn-primary">Donate</button>
                    </Link> 
            </div>              
       </>
       
        
    )
}

export default Donations;