import Tasks from "../components/Tasks/Tasks";
import Sidebar from "../components/Sidebar/sidebar";

import "./Home.scss";
const Home = () => {
	return (
		<>
			<div className='home-container'>
				<Sidebar />
				<Tasks />
			</div>
		</>
	);
};

export default Home;
