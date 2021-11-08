import { IMAGES } from "assets/images";
import { Container, Game, Grid, Image, Title } from "./styles";

const Home = () => {
	return (
		<Container>
			<Title>Escolha o jogo</Title>
			<Grid>
				<Game to="/quiz">
					<Image src={IMAGES.quiz} /> Quiz
				</Game>
			</Grid>
		</Container>
	);
};

export default Home;
