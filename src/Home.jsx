// Home.jsx
import React from "react";
import Navigation from "./Navigation";
import ParticleBg from "./project_managment_app/components/ParticleBg";

const Home = () => {
  return (
    <div className="relative h-[100vh] bg-radial-gradient">
      <ParticleBg className="absolute inset-0" style={{ zIndex: -1 }} />
      <div className="relative z-10">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
