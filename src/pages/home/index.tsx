import { IMAGES } from "assets/images";
import { Container, Game, Grid, Image, Title } from "./styles";

const Home = () => {
	return (
		<Container>
			<Title>Escolha o jogo</Title>
			<Grid>
				<Game to="/memory">
					<Image src={IMAGES.memory} /> Jodo Da Memória
				</Game>
			</Grid>
		</Container>
	);
};

export default Home;
