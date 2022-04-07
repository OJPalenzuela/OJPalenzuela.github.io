import styled from "styled-components";

export const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	padding-top: 4em;

	background-color: rgba(2, 0, 36, 1);
	color: white;

	height: 100vh;
`;

export const Subtitle = styled.h2`
	text-align: center;
	font-size: 2.8rem;
`;

export const Description = styled.p`
	text-align: center;
`;

export const ListLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 3rem;
`;

export const Anchor = styled.a`
	text-decoration: none;
	display: block;
	padding: 0.4rem 0.6rem;
	color: white !important;
	transition: all 0.2s linear;

	&:hover {
		font-size: 1.1em;
	}

	&:visited {
		color: white;
	}
`;
