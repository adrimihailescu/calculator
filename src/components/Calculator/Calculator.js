import "./Calculator.scss";
import DisplayOutputs from "./DisplayOutputs/DisplayOutputs";
import NumPad from "./NumPad/NumPad";

const Calculator = ({ onClickHandler }) => {
	return (
		<div className="container">
			<NumPad onClickHandler={onClickHandler} />
			<DisplayOutputs />
		</div>
	);
};

export default Calculator;
