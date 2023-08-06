import React from "react";
import './charities.css'

function Charities() {
    return(
        
        <>
        <div className="charity-container">
            <div className="charity-card"  >
  <img src="https://www.learninglions.org/wp-content/uploads/2022/05/logo_header_LL.png" class="card-img-top" alt="..." />
  <div class="charity-card-body">
    <h5 class="card-title">Learning Lions</h5>
    <p class="card-text">Learning Lions is a non-profit organisation enabling young adults in marginalised rural communities of East Africa to become digital creatives and live a life full of (digital) opportunity, right from their home regions</p>
    <a href="https://www.learninglions.org/" class="btn btn-primary">Learn More</a>
  </div>
</div>

<div className="charity-card"  >
  <img src="https://girlsact.org/wp-content/uploads/2022/07/cropped-GirlsAct_Logo_150px.png" class="card-img-top" alt="..." />
  <div class="charity-card-body">
    <h5 class="card-title">Girls Act</h5>
    <p class="card-text">A girl led initiative, Girls Act fosters leadership and confidence for girls and young women to support each other, strengthen fundamental life skills, and develop community activism.</p>
    <a href="https://girlsact.org/" class="btn btn-primary">Learn More</a>
  </div>
</div>

<div className="charity-card"  >
  <img src="https://samburugirls.foundation/wp-content/uploads/2018/05/sgf-logo-250x250.gif" class="card-img-top" alt="..." />
  <div class="charity-card-body">
    <h5 class="card-title">Samburu Girls Foundation</h5>
    <p class="card-text">A non-profit organisation enabling young adults in marginalised rural communities of East Africa to become digital creatives and live a life full of (digital) opportunity, right from their home regions.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>




</div>
			
        </>
    )
}

export default Charities;