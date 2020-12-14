import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js';
import { Link } from 'react-router-dom';

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<div className="checkout">
				<div className="checkout__left">
					<img
						className="checkout__ad"
						src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
						alt=""
					/>

					<div>
						<h3 className="checkout__user">
							Hello {user ? user?.email : 'Guest'}
						</h3>
						<h2 className="checkout__title">Your Shopping Basket</h2>

						{basket.length == 0 && (
							<div className="checkout__emptyCart">
								<img
									className="checkout__emptyCartImg"
									src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
									alt="empty cart"
								/>
								<div className="checkout__emptyCartText">
									<h2>Your Amazon Cart is empty</h2>
									<Link to="/">
										<p>Shop items</p>
									</Link>
									<div className="checkout__buttons">
										{!user && (
											<>
												<Link to="/login">
													<button className="checkout__loginButton">
														Sign in to your account
													</button>
												</Link>
												<Link to="/register">
													<button className="checkout__registerButton">
														Sign up now
													</button>
												</Link>
											</>
										)}
									</div>
								</div>
							</div>
						)}
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								price={item.price}
								image={item.image}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				<div className="checkout__right">
					<Subtotal />
				</div>
			</div>
			{basket.length > 0 && (
				<div onClick={handleClick} className="goToTop">
					<p>Back to Top</p>
				</div>
			)}
		</>
	);
}

export default Checkout;
