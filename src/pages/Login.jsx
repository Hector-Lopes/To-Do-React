import Button from "../components/button/button";

import "./Login.scss";
import logo from "../assets/images/logo.png";

const Login = () => {
	return (
		<div className='login-container'>
			<img
				src={logo}
				alt='full estack club'></img>
			<div className='custom-buuton-container'></div>
			<Button>Entrar</Button>
		</div>
	);
};

export default Login;
