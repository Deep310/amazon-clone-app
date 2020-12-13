import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="Home image"
				/>

				<div className="home__row">
					<Product
						id="12321341"
						title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
					<Product
						id="49538094"
						title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						price={239.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/81jKl9TDbpL._AC_SX679.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="4903850"
						title="FitBit Inspire 2 - Health & Fitness Tracker with a free 1-Year FitBit Premium Trial"
						price={199.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61MZfowYoaL._AC_SX522_.jpg"
					/>
					<Product
						id="325435435"
						title="New Apple iPad Pro (12.9inch, Wi-Fi, 128GB) - Silver (4th generation)"
						price={599.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="908293323"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1099.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
