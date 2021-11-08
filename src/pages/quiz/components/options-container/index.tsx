import { memo } from "react";
import { QuestionType } from "types/question";
import { Container, OptionContainer } from "./styles";

const Option: FC<{
	id: string;
	text: string;
	onAnswer: (ans: string) => void;
}> = ({ id, text, onAnswer }) => {
	return <OptionContainer onClick={() => onAnswer(id)}>{text}</OptionContainer>;
};

const OptionsContainerComponent: FC<{
	options: QuestionType["options"];
	onAnswer: (ans: string) => void;
}> = ({ options, onAnswer }) => {
	return (
		<Container>
			{options.map(opt => (
				<Option key={opt.id} text={opt.opt} id={opt.id} onAnswer={onAnswer} />
			))}
		</Container>
	);
};

export const OptionsContainer = memo(OptionsContainerComponent);
