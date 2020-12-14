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

				<div className="home__row">
					<Product
						id="348902321"
						title="Champion Men's Graphic Powerblend Fleece Crew"
						price={42.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/9130YU3Io-L._AC_UY500_.jpg"
					/>
					<Product
						id="165387543"
						title="Women's The High Vaist Skinny Jeans, Las Palmas, Blue, 23"
						price={198.0}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71Ac29T11HL._AC_UY500_.jpg"
					/>
					<Product
						id="861375438"
						title="Burt's Bees Baby Baby Girls' Sleep & Play, Organic, Zip Front Footed Pajama"
						price={18.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71zyFZUa48L._AC_UY500_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="348487321"
						title="SENICC Gaming Headset 3.5mm 2 Pack for Xbox One, PS4, Nintendo Switch, PC, Mac, Laptop, Over Ear Headphones with Noise Canceling Microphone Lightweight for Adults Teens Kids"
						price={22.09}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/81JkIJZuTCL._AC_SX425_.jpg"
					/>
					<Product
						id="631202321"
						title="Nikon Z50 Compact Mirrorless Digital Camera with Flip Under 'Selfie/Vlogger' LCD | 2 Zoom Lens Kit Includes: NIKKOR Z DX 16-50mm f/3.5-6.3 VR & NIKKOR Z DX 50-250mm F/4.5-6.3 VR"
						price={1096.25}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/81%2BDPdnOvBL._AC_SX425_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="348943883"
						title="Contixo 4K GPS Quadcopter Drone with HD FPV Camera Live Video for Adults with Custom Case & 2 Batteries"
						price={589.09}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/71Zmo-6f8LL._AC_SX659_.jpg"
					/>
					<Product
						id="767430388"
						title="Kellogg's Nutri-Grain, Soft Baked Breakfast Bars, Strawberry, Made with Whole Grain, 10.4 oz (8 Count)(Pack of 6)"
						price={18.85}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/91bu6TxtphL._AC_SX679_.jpg"
					/>
					<Product
						id="775334589"
						title="Garmin Instinct, Rugged Outdoor Watch with GPS, Features GLONASS and Galileo, Heart Rate Monitoring and 3-Axis Compass, Graphite"
						price={169.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/6181t0057sL._AC_SX679_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="345768584"
						title="Apple Magic Keyboard for iPad Pro 12.9-inch (4th Generation) - US English"
						price={329.0}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71vh06cKISL._AC_SX425_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
