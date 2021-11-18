import "./Calculator.scss";
import DisplayOutputs from "./DisplayOutputs/DisplayOutputs";
import NumPad from "./NumPad/NumPad";

const Calculator = ({ onClickHandler, currentValue }) => {
	return (
		<div className="container">
			<DisplayOutputs
				onClickHandler={onClickHandler}
				currentValue={currentValue}
			/>
			<NumPad onClickHandler={onClickHandler} />
		</div>
	);
};

export default Calculator;
