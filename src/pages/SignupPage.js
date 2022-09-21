import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signupService } from '../services/auth.services';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignupPage(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState(undefined);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const handleName = (e) => setName(e.target.value);

	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		// Create an object representing the request body
		const requestBody = { email, password, name };
		try {
			await signupService(requestBody);
			navigate("/login");
		} catch (err) {
			if (err.response?.status === 400) {
				setErrorMessage(err.response.data.errorMessage);
				console.log(errorMessage);
			}
		}
	};

	return (
		
		
			<div className = "form container">
				<Form onSubmit={handleSignupSubmit}>
					<h2>Registro:</h2>

					<Form.Group className="mb-3 form" controlId="formBasicEmail">
						<Form.Label>Email:</Form.Label>
						<Form.Control type="email" name="email" value={email} onChange={handleEmail} placeholder="Ingese su email" />
					</Form.Group>
					<Form.Group className="mb-3 form" controlId="formBasicEmail">
						<Form.Label>Usuario:</Form.Label>
						<Form.Control type="text" name="name" value={name} onChange={handleName} />
					</Form.Group>

					<Form.Group className="mb-3 form" controlId="formBasicPassword">
						<Form.Label>Password:</Form.Label>
						<Form.Control type="password" name="password" placeholder="Password" value={password} onChange={handlePassword}/>
						<Form.Text className="text-light">
							Por favor ingrese una clave Alfanumerica con mayusculas y minusculas
						</Form.Text>
					</Form.Group>

					<Button variant="primary" type="submit">
						Registrarse
					</Button>

				</Form>

				{errorMessage && <p className="error-message">{errorMessage}</p>}
				 <p>Ya tienes una cuenta?</p>
				<Link to={'/login'}> Login</Link>

			</div>
		
	);
}

export default SignupPage;
