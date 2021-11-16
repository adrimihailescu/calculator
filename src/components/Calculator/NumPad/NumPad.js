import "./NumPad.scss";
import Button from "./Button/Button";
import { buttons } from "../../../data";

const NumPad = ({ current, operation, previous, setOperation }) => {
	return (
		<div className="num-pad">
			{buttons.map((btn) => (
				<Button
					key={btn.id}
					id={btn.id}
					text={btn.text}
					className={`grid-item-${btn.id} ${btn.group}`}
				/>
			))}
		</div>
	);
};

export default NumPad;
