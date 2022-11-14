import React from "react";
import Tilt from "react-parallax-tilt";
import Brain from "./brain.svg";

const Logo = () => {
	return (
		<Tilt>
			<div
				style={{
					height: "100px",
					width: "100px",
					backgroundColor: "darkgreen",
				}}
				className="logoTilt"
			>
				<img src={Brain} alt="logo" style={{ height: "100%", width: "auto" }} />
			</div>
		</Tilt>
	);
};

export default Logo;
