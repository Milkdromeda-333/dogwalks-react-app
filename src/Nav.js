import "./styles.css";

export default function Nav() {
	return (
		<nav>
			<div className="brand">
				<a href="#">
					<img
						src="https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images-180x180.png"
						alt="logo"
						width="50px"
					/>
					<h1>DogWalks!</h1>
				</a>
			</div>
			<ul>
				<li>Schedule a walk!</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
}
