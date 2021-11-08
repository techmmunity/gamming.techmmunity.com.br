import ReactCountdown from "react-countdown";
import { Container } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const TIME = 30 * 1000;

// Renderer callback with condition
const renderer = ({ seconds }: { seconds: number }) => {
	return <span>{seconds}</span>;
};

export const Countdown: FC<{ onTimeout: () => void }> = ({ onTimeout }) => (
	<Container>
		<ReactCountdown
			onComplete={onTimeout}
			date={Date.now() + TIME}
			renderer={renderer}
		/>
	</Container>
);
