import "./Calculator.scss";
import DisplayOutputs from "./DisplayOutputs/DisplayOutputs";
import NumPad from "./NumPad/NumPad";

const Calculator = ({
	current,
	previous,
	operation,
	setCurrent,
	setOperation,
}) => {
	return (
		<div className="container">
			<NumPad
				current={current}
				operation={operation}
				previous={previous}
				setOperation={setOperation}
			/>
			<DisplayOutputs />
		</div>
	);
};

export default Calculator;
