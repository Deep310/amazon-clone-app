import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Orders from './Orders.js';
import Footer from './Footer.js';
import Login from './Login';
import Register from './Register';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
	'pk_test_51HyL7yDTDphKM0ZayCa63F58KZbfn8ClTlGO2H2CAdZ3SqeX7o30wuQksixh47wpfBc64GzurJrRq0mBhw1pN4Nk009kcPUsLP'
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			//console.log('I am the user >>>', authUser);

			if (authUser) {
				//the user was logged in or just logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				//the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
						<Footer />
					</Route>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
