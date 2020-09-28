import React from "react";
import Style from "./txt.module.css";

const TxtLink = (props) => {
	const color = props.color;
	let col;
	if (color === "red") {
		col = Style.divR;
	} else if (color === "blue") {
		col = Style.divB;
	}
	return (
		<div className={`hvr-grow ${col}`}>
			<a href={props.href}>{props.children}</a>
		</div>
	);
};

export default TxtLink;
