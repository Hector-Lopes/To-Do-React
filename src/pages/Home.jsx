import Tasks from "../components/Tasks/Tasks";
import Sidebar from "../components/Sidebar/sidebar";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import "./Home.scss";
const Home = () => {
	const params = useParams();

	useEffect(() => {
		console.log(params.name);
	}, [params]);
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
