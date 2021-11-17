import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
	const [currentDisplay, setCurrentDisplay] = useState("");

	const onClickHandler = (e) => {
		const classes = e.target.className.split(" ");
		const value = e.target.textContent;
		switch (true) {
			case classes.includes("operator"):
			case classes.includes("number"):
				console.log("number/operator pressed");
				setCurrentDisplay(currentDisplay.concat(value));
				break;

			case classes.includes("result"):
				// eslint-disable-next-line no-eval
				// setCurrentDisplay(parseInt(eval(String(currentDisplay)), 10));
				console.log(eval(parseFloat(currentDisplay)));

				break;
			case classes.includes("decimal"):
				// console.log("decimal");

				break;

			default:
				break;
		}

		console.log(currentDisplay);
	};
	return (
		<Layout className="App">
			<Header content="Calculator" />
			<Calculator onClickHandler={onClickHandler} />
			<Footer />
		</Layout>
	);
}

export default App;
