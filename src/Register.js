import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';
import { auth } from './firebase';

function Register() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');

	const register = (e) => {
		e.preventDefault();

		if (password.length < 6) {
			alert('Passwords must be at least 6 characters.');
			return;
		}

		if (password != confirmPass) {
			alert('Passwords must match!!');
			return;
		}

		//firebase register account here
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// successfully created user with email and password
				console.log(auth);
				if (auth) {
					history.push('/');
				}
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<div className="register">
			<Link to="/">
				<img
					className="register__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="Amazon Logo"
				/>
			</Link>
			<div className="register__container">
				<h1>Create Account</h1>
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
						placeholder=" At least 6 characters"
					></input>

					<h5>Re-enter Password</h5>
					<input
						type="password"
						value={confirmPass}
						onChange={(e) => setConfirmPass(e.target.value)}
					></input>
				</form>

				<button className="register__registerButton" onClick={register}>
					Create your Amazon account
				</button>

				<p className="register__notice">
					By creating an account, you agree to AMAZON CLONE Conditions of
					Use & Sale. Please see our Privacy Notice, our Cookies Notice and
					our Internet-Based Ads Notice.
				</p>

				<p>
					Already have an account? <Link to="/login">Sign In</Link>
				</p>
			</div>
		</div>
	);
}

export default Register;
