import { QUESTIONS } from "configs/questions";
import { memo } from "react";
import { Container } from "./styles";

const CounterComponent: FC<{ currentQuestion: number }> = ({
	currentQuestion,
}) => {
	return (
		<Container>
			{currentQuestion}/{QUESTIONS.length}
		</Container>
	);
};

export const Counter = memo(CounterComponent);
