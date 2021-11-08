import { memo } from "react";
import ReactMarkdown from "react-markdown";
import { QuestionType } from "types/question";
import { Container, OptionContainer } from "./styles";

const Option: FC<{
	idx: number;
	text: string;
	onAnswer: (ans: number) => void;
}> = ({ idx, text, onAnswer }) => {
	return (
		<OptionContainer onClick={() => onAnswer(idx)}>
			<ReactMarkdown>{text}</ReactMarkdown>
		</OptionContainer>
	);
};

const OptionsContainerComponent: FC<{
	options: QuestionType["options"];
	onAnswer: (ans: number) => void;
}> = ({ options, onAnswer }) => {
	return (
		<Container>
			{options.map((opt, idx) => (
				<Option key={opt.id} text={opt.opt} idx={idx} onAnswer={onAnswer} />
			))}
		</Container>
	);
};

export const OptionsContainer = memo(OptionsContainerComponent);
