import React from "react";
import girls from "./components/girls.jpg";

import Charitycard from "./components/charitiescard";
import Footer from "./components/footer";



function Home(){
    return(
        <>
          
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={girls} class="d-block w-100" alt="Girls" />
      <div class="carousel-caption d-none d-md-block">
        <h5 className="carousel-header">Girls movement</h5>
        <p className="carousel-text" >Aiming to keep more and more girls in school.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1559079236-2e64f89c7764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="water" />
      <div class="carousel-caption d-none d-md-block">
        <h5 className="carousel-header">Hygiene and Water</h5>
        <p>Providing sufficient water to all.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/236x/48/ad/0a/48ad0adfdc6b9547e038b36ec7479f1e.jpg" class="d-block w-100" alt="sanitation facilities" />
      <div class="carousel-caption d-none d-md-block">
        <h5 className="carousel-header">Sanitation facilites</h5>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      

{/* Our Mission */}
<div>
   
</div>

<div class="image-and-text-container">
  <div class="image-container">
    <img src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Image" />
  </div>
  <div class="text-content">
  <h1 className="mission">Our Mission</h1>
    <p className="mission-text">Equipping the girl child with the resources and tools needed to take and keep them in school</p>

    <h1 className="mission">Our Vision</h1>
    <p className="mission-text">We believe in a world were every person should have an opportunity to acquire education.</p>

    <h1 className="mission">What we do</h1>
    <p className="mission-text">We believe that lasting change comes from within. We believe that children born into poverty are not a problem to be solved, but a solution waiting to be unleashed. So we rescue children from injustice and equip them to be adults of influence.</p>   
  </div>
</div>

<div class="image-and-text-container">
<div >
    <p className="impact-text" >Our Impact</p>
    <p class="text-content">Empower a vulnerable girl child in Kenya, Africa to live a full and productive life through the provision of education, water and sanitary facilites in a caring and loving environment.</p>
  </div>
  <div class="image-container">
    <img src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Image" />
  </div>
 
</div>

{/* User Story */}
<div className="testimonial-div">
  <div>
    <h1 className="mission">Testimonials</h1>
</div>

<div class="image-and-text-container">
  <div class="image-container">
    <img src="https://media.istockphoto.com/id/1071198328/photo/a-smiling-ugandan-girl.webp?b=1&s=170667a&w=0&k=20&c=Qm6Scb68xIQrmikP6rWbhy8SvVOrv2XjiY6HL_YupwQ=" alt="Image" id="testimonial" />
  </div>
  <div class="text-content">
    <h3 class="mission">Mercy Nafula</h3>
    <p class="text-content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </div>
</div>
</div>

{/* Icons */}
        <div className="icons-card">
            <img className="icons" src="https://img.icons8.com/?size=512&id=BC638vMs26cO&format=png" alt="donation-icon"></img>
            <img className="icons" src="https://img.icons8.com/?size=512&id=JLOQMU8Ay69w&format=png" alt="water-icon"></img>

            <img className="icons" src="https://img.icons8.com/?size=512&id=bWAV69CxTBqh&format=png" alt="volunteer-icon"></img>

        </div>

        <Charitycard />
        <Footer />

        </>
    )
}

export default Home;