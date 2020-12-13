import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Router path="/checkout">
						<Checkout />
					</Router>
					<Router path="/">
						<Home />
					</Router>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
