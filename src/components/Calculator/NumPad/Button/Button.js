import "./Button.scss";

const Button = ({ id, text, className, onClickHandler }) => {
	return (
		<button id={id} className={`button ${className}`} onClick={onClickHandler}>
			{text}
		</button>
	);
};

export default Button;
