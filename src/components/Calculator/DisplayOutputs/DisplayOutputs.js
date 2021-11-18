import "./DisplayOutputs.scss";

const DisplayOutputs = ({ onClickHandler, currentValue }) => {
	return (
		<div id="display" className="display">
			{currentValue}
		</div>
	);
};

export default DisplayOutputs;
