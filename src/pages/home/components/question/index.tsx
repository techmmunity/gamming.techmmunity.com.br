import { memo } from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "./styles";

const QuestionComponent: FC<{ text: string }> = ({ text }) => {
	return (
		<Container>
			<ReactMarkdown>{text}</ReactMarkdown>
		</Container>
	);
};

export const Question = memo(QuestionComponent);
