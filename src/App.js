import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
	const [currentValue, setCurrentValue] = useState("0");
	const [previousValue, setPreviousValue] = useState("");
	const [operation, setOperation] = useState();
	const [decimal, setDecimal] = useState();
	const [wasLastEqual, setWasLastEqual] = useState(false);

	const onClickHandler = (e) => {
		const classes = e.target.className.split(" ");
		const value = e.target.textContent;

		switch (true) {
			case classes.includes("operator"):
			case classes.includes("number"):
				if (currentValue !== "0" && !operation && !wasLastEqual) {
					setCurrentValue(currentValue + value);
				} else {
					setWasLastEqual(false);
					setCurrentValue(value);
				}

				break;

			case classes.includes("result"):
				if (setPreviousValue(currentValue));
				const result = currentValue.includes(".")
					? // eslint-disable-next-line no-eval
					  eval(currentValue).toFixed(2)
					: // eslint-disable-next-line no-eval
					  eval(currentValue);
				setCurrentValue(result);
				setWasLastEqual(true);

				console.log(eval(parseFloat(currentValue)));

				break;
			case classes.includes("decimal"):
				if (!decimal) {
					setCurrentValue(currentValue + ".");
					setDecimal();
				}
				// console.log("decimal");

				break;
			case classes.includes("delete"):
				setOperation("");
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
