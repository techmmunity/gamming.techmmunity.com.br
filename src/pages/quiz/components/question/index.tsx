import { memo } from "react";
import ReactMarkdown from "react-markdown";
import { QuestionType } from "types/question";
import { Container, Image } from "./styles";

const QuestionComponent: FC<{ question: QuestionType }> = ({ question }) => {
	return (
		<Container>
			<ReactMarkdown>{question.question}</ReactMarkdown>
			{question.image && <Image src={question.image} />}
		</Container>
	);
};

export const Question = memo(QuestionComponent);
