// ProjectManagement.jsx
import React, { useState } from "react";
// import ParticleBg from "../../ParticleBg";
import ProjectsSideBar from "./ProjectsSideBar";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";

export default function ProjectManagement() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject(){
    setProject
  }
  return (
    <section className="relative h-screen bg-radial-gradient pt-20 flex gap-8 ">
      <ProjectsSideBar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </section>
  );
}