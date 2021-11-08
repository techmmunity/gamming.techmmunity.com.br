import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
	width: 100vw;
	min-height: 100vh;
	padding: 0 5rem 5rem 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 5rem;
	height: 30rem;
	color: #00d3cd;
	font-weight: bold;
	text-transform: uppercase;
`;

export const Grid = styled.div`
	display: grid;
	gap: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 80%;
	flex-wrap: wrap;
`;

export const Game = styled(Link)`
	height: 20rem;
	width: 31rem;
	background: #0a1119;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #00d3cd;
	font-weight: bold;
	cursor: pointer;
	transition: color 0.2s ease-out;

	&:hover,
	&:active,
	&:focus {
		background: #00d3cd;
		color: #0a1119;
	}
`;

export const Image = styled.img`
	height: 15rem;
	margin-bottom: 1rem;
`;
