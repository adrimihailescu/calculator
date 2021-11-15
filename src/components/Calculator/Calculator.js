import "./Calculator.scss";
import "../ClearButton/ClearButton";
import "../DisplayOutputs/DisplayOutputs";
import "../Operators/Operators";
import "../NumLock/NumLock";
import NumLock from "../NumLock/NumLock";

const Calculator = ({
	current,
	previous,
	operation,
	setCurrent,
	setOperation,
}) => {
	return (
		<div className="container">
			<NumLock
				current={current}
				operation={operation}
				previous={previous}
				setOperation={setOperation}
			/>
			{/* <ClearButton />
			<DisplayOutputs /> */}
		</div>
	);
};

export default Calculator;
