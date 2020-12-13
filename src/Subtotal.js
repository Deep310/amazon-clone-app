import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();

	let value = 0;
	var i;
	for (i = 0; i < basket.length; i++) {
		value = value + basket[i].price;
	}

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
				value={value}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>

			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
