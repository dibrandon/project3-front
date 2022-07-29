import { useState, useContext } from 'react';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
import { loginService } from '../services/auth.services';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function LoginPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState(undefined);
	const navigate = useNavigate();
	const { logInUser } = useContext(AuthContext);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		const requestBody = { email, password };

		try {
			const response = await loginService(requestBody);
			
			const token = response.data.authToken;
			logInUser(token);
			navigate('/');
		} catch (err) {
			const errorDescription = err?.response?.data?.message;
			setErrorMessage(errorDescription);
		}
	};

	return (
<div className = "form container">
<Form onSubmit={handleLoginSubmit}>
	<h2>Login:</h2>

	<Form.Group className="mb-3 form" controlId="formBasicEmail">
		<Form.Label>Email:</Form.Label>
		<Form.Control type="text" name="email" value={email} onChange={handleEmail} placeholder="Ingrese su email" />
		{/* <Form.Text className="text-muted">
			We'll never share your email with anyone else. 
		</Form.Text>*/}
	</Form.Group>
	<Form.Group className="mb-3 form" controlId="formBasicPassword">
		<Form.Label>Password:</Form.Label>
		<Form.Control placeholder="Password" type="password" name="password" value={password} onChange={handlePassword}/>
	</Form.Group>

	<Button variant="primary" type="submit">
		Login
	</Button>

</Form>
			{errorMessage && <p className="error-message">{errorMessage}</p>}

			<p>Don't have an account yet?</p>
			<Link to={'/signup'}> Sign Up</Link>
		</div>
	);
}

export default LoginPage;