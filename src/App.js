import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
	const [current, setCurrent] = useState(0);
	const [operation, setOperation] = useState();
	const [previous, setPrevious] = useState();

	return (
		<Layout className="App">
			<Header content="Calculator" />
			<Calculator
				current={current}
				operation={operation}
				previous={previous}
				setCurrent={setCurrent}
				setOperation={setOperation}
			/>
			<Footer />
		</Layout>
	);
}

export default App;
