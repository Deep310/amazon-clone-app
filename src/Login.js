import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = (e) => {
		e.preventDefault();

		//firebase login here
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((err) => alert(err.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></input>

					<button
						type="submit"
						className="login__signInButton"
						onClick={signIn}
					>
						Sign In
					</button>
				</form>

				<p>
					By signing in, you agree to AMAZON CLONE Conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and our
					Internet-Based Ads Notice.
				</p>

				<p className="login__newUser">New to Amazon?</p>
				<Link to="/register">
					<button className="login__registerButton">
						Create your Amazon account
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Login;
