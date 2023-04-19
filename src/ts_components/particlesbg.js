import React from "react";
import Particles from "react-tsparticles";
import ParticlesConfig from "./ts_config/particles-config.js";
import { loadFull } from "tsparticles";
const Particlesbg = () => {
  const particlesInit = async (main) => {

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={ParticlesConfig}
      ></Particles>
    </>
  );
};
export default Particlesbg;
