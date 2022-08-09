import "./styles.css";
import React from "react";
//import ReactDOM from "react-dom"

export default function Form() {
	return (
		<form>
			<h2>Schedule a dog walk!</h2>

			<label htmlFor="dogs-name">Dogs Name:</label>
			<input id="dogs-name" name="dogs-name" placeholder="Name" />

			<label htmlFor="date">Date:</label>
			<input type="date" id="dogs-name" name="dogs-name" />

			<button>Submit</button>
		</form>
	);
}
