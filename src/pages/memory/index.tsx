import { QUESTIONS } from "configs/questions";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { Countdown } from "./components/countdown";
import { Counter } from "./components/counter";
import { OptionsContainer } from "./components/options-container";
import { Question } from "./components/question";
import { Result } from "./components/result";
import { Version } from "./components/version";
import { Container, Top, Bottom } from "./styles";

const Memory = () => {
	const [completed, setCompleted] = useState<boolean>(false);
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [answers, setAnswers] = useState<Array<string | undefined>>([]);

	const handleTimeout = useCallback(() => {
		setAnswers(prevState => [...prevState, undefined]);

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		setCurrentQuestion(currentQuestion + 1);

		toast.error("Tempo esgotado!");

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		if (currentQuestion === QUESTIONS.length - 1) {
			setCompleted(true);
		}
	}, [currentQuestion]);

	const handleAnswer = useCallback(
		(answer: string) => {
			setAnswers(prevState => [...prevState, answer]);

			// eslint-disable-next-line @typescript-eslint/no-magic-numbers
			setCurrentQuestion(currentQuestion + 1);

			// eslint-disable-next-line @typescript-eslint/no-magic-numbers
			if (currentQuestion === QUESTIONS.length - 1) {
				setCompleted(true);
			}
		},
		[currentQuestion],
	);

	return (
		<Container>
			{completed && <Result answers={answers} />}
			{!completed && (
				<>
					<Countdown key={currentQuestion} onTimeout={handleTimeout} />
					<Counter currentQuestion={currentQuestion} />
					<Version />
					<Top>
						<Question question={QUESTIONS[currentQuestion]} />
					</Top>
					<Bottom>
						<OptionsContainer
							options={QUESTIONS[currentQuestion].options}
							onAnswer={handleAnswer}
						/>
					</Bottom>
				</>
			)}
		</Container>
	);
};

export default Memory;
