import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;

	> * {
		margin-bottom: 5rem;
	}
`;

export const Title = styled.span`
	color: #00d3cd;
	font-weight: bold;
	font-size: 5rem;
`;

export const Table = styled.table`
	width: 50%;
	border: 1px solid #00d3cd;
	border-radius: 5px;
	border-spacing: 0;
	color: #00d3cd;
`;

export const Line = styled.tr`
	> th,
	td {
		padding: 1rem;
		border-bottom: 1px solid #00d3cd;
		border-top: 1px solid #00d3cd;

		&:first-child {
			width: 15%;
			border-right: 1px solid #00d3cd;
		}

		&:last-child {
			width: 15%;
			border-left: 1px solid #00d3cd;
		}
	}

	> td {
		&:first-child {
			text-align: right;
		}
		&:last-child {
			text-align: center;
		}
	}
`;

export const Counter = styled.span`
	color: #00d3cd;
	font-size: 3rem;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 3rem;
`;

export const TryAgain = styled.button`
	background: #0a1119;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 1rem 1.5rem;
	color: #00d3cd;
	font-weight: bold;
	cursor: pointer;
	transition: color 0.5s ease-out;

	&:hover,
	&:active,
	&:focus {
		background: #00d3cd;
		color: #0a1119;
	}
`;

export const BackHome = styled.a`
	background: #00d3cd;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 1rem 1.5rem;
	color: #0a1119;
	font-weight: bold;
	cursor: pointer;
	transition: color 0.5s ease-out;

	&:hover,
	&:active,
	&:focus {
		background: #00d3cd99;
	}
`;
