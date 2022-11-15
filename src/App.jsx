import Particles from "particles-bg";
import { Component } from "react";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";

let config = {
	num: [4, 7],
	rps: 0.1,
	radius: [5, 100],
	life: [1.5, 3],
	v: [2, 3],
	tha: [-40, 40],
	// body: "./img/icon.png", // Whether to render pictures
	// rotate: [0, 20],
	alpha: [0.1, 0],
	scale: [1, 0.1],
	position: "center", // all or center or {x:1,y:1,width:100,height:100}
	color: ["random", "#ff0000"],
	cross: "dead", // cross or bround
	random: 15, // or null,
	g: 10, // gravity
	// f: [2, -1], // force
	onParticleUpdate: (ctx, particle) => {
		ctx.beginPath();
		ctx.rect(
			particle.p.x,
			particle.p.y,
			particle.radius * 2,
			particle.radius * 2
		);
		ctx.fillStyle = particle.color;
		ctx.fill();
		ctx.closePath();
	},
};

class App extends Component {
	render() {
		return (
			<>
				<div className="imGridRows container mx-auto grid h-screen max-w-[1024px] grid-cols-1 gap-y-4 px-6 text-white">
					<header className="flex flex-row py-6">
						<Logo />
						<Navigation />
					</header>
					<main>
						<Rank />
						<ImageLinkForm />
						{/* <FaceRecognition /> */}
					</main>
					<footer className="p-4">
						<p className="text-center text-xs">
							Made with love and passion by ME ;)
						</p>
					</footer>
					<Particles
						type="cobweb"
						num={250}
						bg={true}
						color="#FFFFFF"
						opacity={1}
					/>
				</div>
			</>
		);
	}
}

export default App;
