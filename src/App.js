import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
	const [currentValue, setCurrentValue] = useState("0");
	// eslint-disable-next-line no-unused-vars
	const [wasLastEqual, setWasLastEqual] = useState(false);

	const onClickHandler = (e) => {
		const classes = e.target.className.split(" ");
		const value = e.target.textContent;

		switch (true) {
			case classes.includes("number"):
				if (currentValue !== "0" && !wasLastEqual) {
					setCurrentValue(currentValue + value);
				} else {
					setWasLastEqual(false);
					setCurrentValue(value);
				}

				break;
			case classes.includes("operator"):
				setCurrentValue(currentValue + value);
				setWasLastEqual(false);
				break;

			case classes.includes("result"):
				const result = currentValue.includes(".")
					? // eslint-disable-next-line no-eval
					  eval(currentValue).toFixed(1)
					: // eslint-disable-next-line no-eval
					  eval(currentValue);
				setCurrentValue(result);
				setWasLastEqual(true);

				// eslint-disable-next-line no-eval
				console.log(eval(parseFloat(currentValue)));

				break;
			case classes.includes("decimal"):
				setCurrentValue(currentValue + ".");
				// console.log("decimal");

				break;
			case classes.includes("delete"):
				setCurrentValue("0");

				break;

			default:
				break;
		}

		console.log(currentValue);
	};
	return (
		<Layout className="App">
			<Header content="Calculator" />
			<Calculator onClickHandler={onClickHandler} currentValue={currentValue} />
			<Footer />
		</Layout>
	);
}

export default App;
