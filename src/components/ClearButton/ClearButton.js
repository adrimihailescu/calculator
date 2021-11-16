import "./ClearButton.scss";

const ClearButton = (current, previous, operation) => {
	return (
		<button type="reset" className="clear-button">
			AC
		</button>
	);
};

export default ClearButton;
