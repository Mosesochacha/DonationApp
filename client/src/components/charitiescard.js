import React from 'react';
import { Link } from 'react-router-dom';


function Charitycard(){
    return(
        <>
            <div class="container">
		<h2 style={{textDecoration: "underline"}} >How to support </h2>
		
		<div class="row mb-5">
			<div class="col-md-4">
				<div class="card custom-card">
					<img src="https://media.istockphoto.com/id/996438996/photo/different-school-supplies-in-a-cardboard-box.webp?b=1&s=170667a&w=0&k=20&c=c4PagcVphgX1a8XuNy6tpOXEkwR34psabetzcegt4P0=" class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Donations</h5>
						<p class="card-text">The best thing to do with the best things in life is to give them away.</p>
						
						<Link to='/donations' class="btn btn-sm btn-primary" >Donate</Link>

					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card custom-card">
					<img src="https://i.pinimg.com/236x/8e/31/a6/8e31a601a6e5c819df877ef81daf3b67.jpg" class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Create Charity</h5>
						<p class="card-text">Where there is charity and wisdom, there is neither fear nor ignorance.</p>
						
						<Link to='/create-charity' class="btn btn-sm btn-primary" >Create Charity</Link>

					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card custom-card">
					<img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sdW50ZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Become a Volunteer</h5>
						<p class="card-text">Those who are happiest are those who do the most for others.</p>
						
						<Link to='/volunteer' class="btn btn-sm btn-primary" >Volunteer</Link>
					</div>
				</div>
			</div>
		</div>
		<div>
            <h4>-- Don’t move through life wishing you’d done more for our suffering world. God designed you to be a light amidst the darkness, extending his love and compassion to the most vulnerable among us.--
</h4>
        </div>
		
		
	</div>
        </>
    )
}

export default Charitycard;