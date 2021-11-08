import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	gap: 5rem 15rem;
	grid-template-columns: 1fr 1fr 1fr;
`;

export const OptionContainer = styled.button`
	width: 30rem;
	height: 5rem;
	background: #0a1119;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 1rem 1.5rem;
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
