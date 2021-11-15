import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Layout className="App">
			<Header content="Calculator" />
			<Calculator />
			<Footer />
		</Layout>
	);
}

export default App;
