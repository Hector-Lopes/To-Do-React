import Button from "../components/button/button";

import "./Login.scss";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const handleSignInClick = () => {
		navigate("/");
	};
	return (
		<div className='login-container'>
			<img
				src={logo}
				alt='full estack club'></img>
			<div className='custom-buuton-container'></div>
			<Button onClick={handleSignInClick}>Entrar</Button>
		</div>
	);
};

export default Login;
