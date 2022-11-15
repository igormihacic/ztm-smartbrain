import { Component } from "react";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Particles from "./components/Particles/Particles";
import Rank from "./components/Rank/Rank";

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
					<Particles />
				</div>
			</>
		);
	}
}

export default App;
