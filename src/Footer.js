import React from 'react';
import './Footer.css';

function Footer() {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<>
			<div onClick={handleClick} className="footer__goToTop">
				<p>Back to Top</p>
			</div>
			<div className="footer">
				<div className="footer__card">
					<p>Careers</p>
					<p>Blog</p>
					<p>About Amazon</p>
					<p>Press Center</p>
					<p>Investor Relations</p>
					<p>Amazon Devices</p>
					<p>Amazon Tours</p>
				</div>

				<div className="footer__card">
					<p>Make Money With Us</p>
					<p>Sell products on Amazon</p>
					<p>Sell apps on Amazon</p>
					<p>Become an Affiliate</p>
					<p>Advertise Your Products</p>
					<p>Self-Publish with Us</p>
					<p>Host an Amazon Hub</p>
					<p>See More Make Money with Us</p>
				</div>

				<div className="footer__card">
					<p>Amazon Payment Products</p>
					<p>Amazon Rewards Visa Signature Cards</p>
					<p>Amazon.com Store Card</p>
					<p>Amazon Business Card</p>
					<p>Amazon Business Line of Credit</p>
					<p>Shop with Points</p>
					<p>Credit Card Marketplace</p>
					<p>Reload Your Balance</p>
					<p>Amazon Currency Converter</p>
				</div>

				<div className="footer__card">
					<p>Let Us Help You</p>
					<p>Amazon and COVID-19</p>
					<p>Your Account</p>
					<p>Your Orders</p>
					<p>Shipping Rates & Policies</p>
					<p>Amazon Prime</p>
					<p>Returns & Replacements</p>
					<p>Manage Your Content and Devices</p>
					<p>Amazon Assistant</p>
					<p>Help</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
