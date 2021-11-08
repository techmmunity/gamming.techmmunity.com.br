import { QuestionType } from "types/question";
import { v4 } from "uuid";

export const QUESTIONS: Array<QuestionType> = [
	{
		question:
			"Das alternativas a seguir, qual delas **NÃO** pode ser usada para tipagem?",
		options: [
			{
				id: v4(),
				opt: "enum",
			},
			{
				id: "f44c2dd1-587b-415d-8a55-0bfd99b59039",
				opt: "const",
			},
			{
				id: v4(),
				opt: "interface",
			},
			{
				id: v4(),
				opt: "type",
			},
		],
		rightAnswer: "f44c2dd1-587b-415d-8a55-0bfd99b59039",
	},
	{
		question: `A sintaxe abaixo é referente a que?

\`const foo = () => {}\``,
		options: [
			{
				id: v4(),
				opt: "Uma variável",
			},
			{
				id: v4(),
				opt: "Uma constante",
			},
			{
				id: v4(),
				opt: "Um objeto",
			},
			{
				id: v4(),
				opt: "Um array",
			},
			{
				id: "f70d0cc8-4a29-4782-ae4c-e0b13feb3f40",
				opt: "Uma função",
			},
			{
				id: v4(),
				opt: "Uma classe",
			},
		],
		rightAnswer: "f70d0cc8-4a29-4782-ae4c-e0b13feb3f40",
	},
	{
		question: `A sintaxe abaixo é referente a que?

\`const foo = "foo"\``,
		options: [
			{
				id: "a42c1e5e-6882-4f06-90c9-a4809aeb4a4c",
				opt: "Uma variável",
			},
			{
				id: v4(),
				opt: "Um objeto",
			},
			{
				id: v4(),
				opt: "Um array",
			},
			{
				id: v4(),
				opt: "Uma função",
			},
			{
				id: v4(),
				opt: "Uma classe",
			},
		],
		rightAnswer: "a42c1e5e-6882-4f06-90c9-a4809aeb4a4c",
	},
	{
		question: `Qual o tipo da variável abaixo?

\`const foo = "foo"\``,
		options: [
			{
				id: "5258197b-89a2-456f-be30-846a92c0b975",
				opt: "string",
			},
			{
				id: v4(),
				opt: "number",
			},
			{
				id: v4(),
				opt: "array",
			},
			{
				id: v4(),
				opt: "function",
			},
			{
				id: v4(),
				opt: "class",
			},
			{
				id: v4(),
				opt: "object",
			},
		],
		rightAnswer: "5258197b-89a2-456f-be30-846a92c0b975",
	},
	{
		question: `Qual o tipo da variável abaixo?

\`const foo = [1]\``,
		options: [
			{
				id: v4(),
				opt: "string",
			},
			{
				id: v4(),
				opt: "number",
			},
			{
				id: "88d4b23c-56d7-4942-bf87-bd936496aebe",
				opt: "array",
			},
			{
				id: v4(),
				opt: "function",
			},
			{
				id: v4(),
				opt: "class",
			},
			{
				id: v4(),
				opt: "object",
			},
		],
		rightAnswer: "88d4b23c-56d7-4942-bf87-bd936496aebe",
	},
	{
		question: `Qual o tipo da variável abaixo?

\`const foo = 1\``,
		options: [
			{
				id: v4(),
				opt: "string",
			},
			{
				id: "5333f792-1d23-45d9-b4fc-eff4b1f2e33a",
				opt: "number",
			},
			{
				id: v4(),
				opt: "array",
			},
			{
				id: v4(),
				opt: "function",
			},
			{
				id: v4(),
				opt: "class",
			},
			{
				id: v4(),
				opt: "object",
			},
		],
		rightAnswer: "5333f792-1d23-45d9-b4fc-eff4b1f2e33a",
	},
	{
		question: `Qual o tipo da variável abaixo?

\`const foo = {}\``,
		options: [
			{
				id: v4(),
				opt: "string",
			},
			{
				id: v4(),
				opt: "number",
			},
			{
				id: v4(),
				opt: "array",
			},
			{
				id: v4(),
				opt: "function",
			},
			{
				id: v4(),
				opt: "class",
			},
			{
				id: "e925c1e2-9c48-4f66-b163-f59e08641ee2",
				opt: "object",
			},
		],
		rightAnswer: "e925c1e2-9c48-4f66-b163-f59e08641ee2",
	},
	{
		question: `Qual o tipo do parametro que a função abaixo recebe?

\`type foo = (count: number) => string\``,
		options: [
			{
				id: v4(),
				opt: "string",
			},
			{
				id: "e7796f0c-6f43-4c26-840c-a244ba8eebfc",
				opt: "number",
			},
			{
				id: v4(),
				opt: "array",
			},
			{
				id: v4(),
				opt: "function",
			},
			{
				id: v4(),
				opt: "class",
			},
			{
				id: v4(),
				opt: "object",
			},
		],
		rightAnswer: "e7796f0c-6f43-4c26-840c-a244ba8eebfc",
	},
	{
		question: `Qual o tipo do retorno da função abaixo?

\`type foo = (count: number) => string\``,
		options: [
			{
				id: "3b5e80af-d96e-435a-a0c0-a3586a261b58",
				opt: "string",
			},
			{
				id: v4(),
				opt: "number",
			},
			{
				id: v4(),
				opt: "array",
			},
			{
				id: v4(),
				opt: "function",
			},
			{
				id: v4(),
				opt: "class",
			},
			{
				id: v4(),
				opt: "object",
			},
		],
		rightAnswer: "3b5e80af-d96e-435a-a0c0-a3586a261b58",
	},
	{
		question: `Como ficaria a tipagem do objeto abaixo?

\`\`\`javascript
const foo = {
	bar: 1,
	fooBar: ["foo"]
}
\`\`\``,
		options: [
			{
				id: v4(),
				opt: "type Foo = Record<string, number | Array<number>>;",
			},
			{
				id: v4(),
				opt: "enum Foo {\n	bar: number;\n	fooBar: Array<string>;\n}",
			},
			{
				id: "a6033221-750a-4ee8-9310-9e5ae5996b01",
				opt: "interface Foo {\n	bar: number;\n	fooBar: Array<string>;\n}",
			},
			{
				id: v4(),
				opt: "type Foo = {\n	bar: number;\n	fooBar: Array<string>;\n}",
			},
		],
		rightAnswer: "a6033221-750a-4ee8-9310-9e5ae5996b01",
	},
];
