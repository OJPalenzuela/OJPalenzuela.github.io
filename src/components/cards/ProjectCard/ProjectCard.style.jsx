import styled from "styled-components";

export const Code = styled.span``;

export const Title = styled.p`
	padding: 1.2em 1em;
	text-align: center;
	font-weight: bold;
	color: #fff;

	&:hover > ${Code} {
		visibility: visible;
		color: rgb(44, 161, 207);
	}
`;

export const CardWrapper = styled.a`
	margin: 1.6em;
	background-color: rgb(50, 50, 50);
	text-decoration: none;

	&:hover > ${Title} ${Code} {
		visibility: visible;
		color: rgb(44, 161, 207);
	}
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;

	&:hover ~ ${Title} ${Code} {
		visibility: visible;
		color: rgb(44, 161, 207);
	}
`;
