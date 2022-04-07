import React from "react";
import { CardWrapper, Code, Image, Title } from "./ProjectCard.style";

const ProjectCard = () => {
	return (
		<CardWrapper href="https://ojpalenzuela.github.io/tributo-semana1/">
			<Image src="./images/tributo.png" alt="" className="project-image" />
			<Title>
				<Code>{`< `}</Code>
				Página Tributo
				<Code>{` />`}</Code>
			</Title>
		</CardWrapper>
	);
};

export default ProjectCard;
