import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import { useHistory } from 'react-router-dom';

function Subtotal() {
	const history = useHistory();
	const [{ basket, user }, dispatch] = useStateValue();

	const handleClick = () => {
		if (!user) {
			alert('Please Sign In to proceed to checkout!');
		} else {
			history.push('/payment');
		}
	};

	// alternative way of counting price total of items selected
	// let value = 0;
	// var i;
	// for (i = 0; i < basket.length; i++) {
	//	 value = value + basket[i].price;
	// }

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket?.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>

			<button onClick={handleClick}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
