import React from "react";
import "./Square.css";

export default function Square(props) {
	return (
		<div className={"square " + props.color}>
			{props.color}
		</div>
	);
}