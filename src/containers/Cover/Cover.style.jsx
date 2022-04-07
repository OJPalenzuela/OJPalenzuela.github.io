import styled from "styled-components";

export const CoverWrapper = styled.div`
	width: 100%;
	height: 100vh;

	background: rgb(2, 0, 36);
	background: linear-gradient(
		180deg,
		rgba(2, 0, 36, 1) 15%,
		rgba(34, 111, 163, 1) 60%,
		rgba(255, 255, 255, 1) 100%
	);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 3em;
	font-weight: bold;
	text-align: center;
	word-wrap: break-word;
`;

export const Description = styled.p`
	text-align: center;
`;
