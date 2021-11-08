export interface QuestionType {
	question: string;
	image?: string;
	rightAnswer: string;
	options: Array<{
		id: string;
		opt: string;
	}>;
}
