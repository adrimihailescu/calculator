import "./NumPad.scss";
import Button from "./Button/Button";
import { buttons } from "../../../data";

const NumPad = ({ onClickHandler }) => {
	return (
		<div className="num-pad">
			{buttons.map((btn) => (
				<Button
					key={btn.id}
					id={btn.id}
					text={btn.text}
					className={`grid-item-${btn.id} ${btn.group}`}
					onClickHandler={onClickHandler}
				/>
			))}
		</div>
	);
};

export default NumPad;
