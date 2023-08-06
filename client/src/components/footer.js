import React from "react";
import { Link } from "react-router-dom";
import './footer.css'

function Footer(){
    return(
        <>
              
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p>
            The Path is a Kenyan based Non-profit organisation aimed at keeping more disadvanted girls in school. Through our donation and charity programs, we collaborate with several insitutions to provide santary towels, water, hygiene and sanitary facilities to girls in poor environments
            </p>
          </div>

         

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
            <li>
                <Link to='./charities'>Charities</Link>
              </li>
              <li>
                <Link to='./create-charity'>Create charity</Link>
              </li>
              <li>
                <Link to='./aboutus'>About Us</Link>
              </li>
              <li>
                <Link to='./donations'>Donate</Link>
              </li>
              
              
            </ul>
          </div>

          
          <div class="col-xs-6 col-md-3">
            <h6>Contact Us</h6>
            <p>Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya</p>
            <a href="#">thepath@gmail.com</a>
          
          </div>
        </div>
        
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved. 
         
            </p>
          </div>

         
        </div>
      </div>
</footer>
        </>
    )
}

export default Footer;