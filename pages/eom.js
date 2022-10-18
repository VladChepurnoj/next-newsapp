import React from "react";
import { Toolbar } from "../components/toolbar";

import styles from "../styles/EOM.module.css";

export const EOM = ({ employee }) => {
	console.log(employee);
	return (
		<div className="page-container">
			<Toolbar />

			<div className={styles.main}>
				<h1>Employee of the month</h1>

				<div className={styles.employeeOfTheMonth}>
					<h3>{employee.name}</h3>
					<h6>{employee.position}</h6>
					<img
						src={
							"https://upload.wikimedia.org/wikipedia/ru/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg"
						}
					/>
					<p>{employee.description}</p>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async (pageContext) => {
	const apiResponse = await fetch(
		"https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
	);

	const employee = await apiResponse.json();

	return {
		props: {
			employee,
		},
	};
};

export default EOM;
