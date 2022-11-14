import { Component } from "react";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";

class App extends Component {
	render() {
		return (
			<>
				<div className="container mx-4 grid">
					<Logo />
					<Navigation />
					<ImageLinkForm />
					{/* <FaceRecognition /> */}
				</div>
			</>
		);
	}
}

export default App;
