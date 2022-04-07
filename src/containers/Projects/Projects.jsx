import React from "react";
import ProjectCard from "../../components/cards/ProjectCard/ProjectCard";
import { ProjectGrid, ProjectWrapper, Subtitle } from "./Projects.style";

const Projects = () => {
	return (
		<ProjectWrapper>
			<Subtitle>Proyectos</Subtitle>
			<ProjectGrid>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</ProjectGrid>
		</ProjectWrapper>
	);
};

export default Projects;
