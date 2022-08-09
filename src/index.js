import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav";
import Form from "./Form";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page() {
	return (
		<div>
			<Nav />
			<Form />
			<Footer />
		</div>
	);
}
root.render(<Page />);
