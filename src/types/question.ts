export interface QuestionType {
	question: string;
	rightAnswer: number;
	options: Array<{
		id: string;
		opt: string;
	}>;
}
