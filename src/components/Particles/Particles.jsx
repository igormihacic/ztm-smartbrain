import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";

const ParticlesComponent = () => {
	const options = useMemo(() => {
		return {};
	}, []);

	const particlesInit = useCallback((engine) => {
		Particles(engine);
	}, []);
};

export default ParticlesComponent;
