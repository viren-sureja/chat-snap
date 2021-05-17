import { useState } from 'react';
import axios from 'axios';
// import SignUp from './SignUp';

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		const authObject = {
			'Project-ID': 'e040f346-b70a-4c12-bea8-0a86eff8e08e',
			'User-Name': username,
			'User-Secret': password,
		};

		try {
			await axios.get('https://api.chatengine.io/chats', {
				headers: authObject,
			});

			localStorage.setItem('username', username);
			localStorage.setItem('password', password);

			window.location.reload();
		} catch (error) {
			setError(`Invalid credentials😥, please 🙏 try again`);
			setUsername('');
			setPassword('');
		}
	};

	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="input"
						placeholder="Username"
						required
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="input"
						placeholder="Password"
						required
					/>
					<div align="center">
						<button type="submit" className="button">
							<span>Sign In</span>
						</button>
						{error && (
							<button
								type="submit"
								className="button"
								style={{ backgroundColor: 'black', color: 'white' }}
							>
								<span>Sign Up</span>
							</button>
						)}
					</div>

					<h2 className="error">{error}</h2>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
