import Button from "../button/button";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./sidebar.scss";

const Sidebar = () => {
	const navigate = useNavigate();

	const HandleClickinNavigate = () => {
		navigate("/");
	};

	return (
		<>
			<div className='sidebar-container'>
				<div className='logo'>
					<img
						src={logo}
						alt='Full Stack'
					/>
				</div>
				<Button onClick={HandleClickinNavigate}>Sair</Button>
			</div>
		</>
	);
};

export default Sidebar;
