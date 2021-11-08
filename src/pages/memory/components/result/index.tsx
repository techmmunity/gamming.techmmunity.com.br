/* eslint-disable @typescript-eslint/no-magic-numbers */
import { QUESTIONS } from "configs/questions";
import {
	Container,
	Title,
	Table,
	Line,
	Counter,
	TryAgain,
	BackHome,
	ButtonsContainer,
} from "./styles";

export const Result: FC<{ answers: Array<string | undefined> }> = ({
	answers,
}) => (
	<Container>
		<Title>Parabéns!</Title>
		<Counter>
			{answers.filter((a, idx) => a === QUESTIONS[idx].rightAnswer).length}/
			{QUESTIONS.length}
		</Counter>
		<Table>
			<thead>
				<Line>
					<th>Pergunta</th>
					<th>Resposta Correta</th>
					<th>Resultado</th>
				</Line>
			</thead>
			<tbody>
				{answers.map((a, idx) => {
					const qst = QUESTIONS[idx];

					const rightAnswer = qst.options.find(
						opt => opt.id === qst.rightAnswer,
					);

					return (
						<Line key={qst.question}>
							<td>{idx + 1}</td>
							<td>{rightAnswer?.opt}</td>
							<td>{qst.rightAnswer === a ? "☑️" : "✖️"}</td>
						</Line>
					);
				})}
			</tbody>
		</Table>
		<ButtonsContainer>
			<TryAgain onClick={() => window.location.reload()}>
				Jogar novamente
			</TryAgain>
			<BackHome href="/">Voltar para a Home</BackHome>
		</ButtonsContainer>
	</Container>
);
