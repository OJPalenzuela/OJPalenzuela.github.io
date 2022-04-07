import React from "react";
import {
	AboutWrapper,
	Anchor,
	Description,
	ListLinks,
	Subtitle,
} from "./About.style";

const About = () => {
	return (
		<AboutWrapper>
			<Subtitle>¡Muchos más proyectos pronto!</Subtitle>
			<Description>Esté camino recién empieza</Description>
			<ListLinks>
				<Anchor
					id="profile-link"
					href="https://github.com/OJPalenzuela"
					target="_blank"
				>
					<i className="fab fa-github" /> Github
				</Anchor>
				<Anchor
					id="email-link"
					href="mailto:palenzuelaomar@gmail.com"
					target="_blank"
				>
					<i className="fas fa-envelope" /> Email
				</Anchor>
			</ListLinks>
		</AboutWrapper>
	);
};

export default About;
