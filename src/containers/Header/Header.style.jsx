import styled from "styled-components";

export const HeaderMenu = styled.header`
	background-color: rgba(2, 0, 36, 1);
	color: white;
	font-weight: bold;

	padding: 0.6em 0;
	padding-right: 2em;
	display: flex;
	justify-content: flex-end;

	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
`;

export const UList = styled.ul`
	list-style: none;
`;

export const List = styled.li`
	display: inline-block;
`;

export const Anchor = styled.a`
	display: block;
	text-decoration: none;
	color: white;
	padding: 0.4em 0.8em;
	transition: all 0.3s linear;

	&:hover {
		background-color: white;
		color: black;
	}
`;
