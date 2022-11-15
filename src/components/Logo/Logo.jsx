import React from "react";
import Tilt from "react-parallax-tilt";
import Brain from "./brain.svg";

const Logo = () => {
	return (
		<Tilt className="parallax-effect" perspective={500}>
			<div className="h-[75px] w-[75px] rounded-xl bg-gradient-to-l from-sky-500 to-indigo-500 p-4 drop-shadow-md">
				<img src={Brain} alt="logo" className="inner-element h-full w-auto" />
			</div>
		</Tilt>
	);
};

export default Logo;
