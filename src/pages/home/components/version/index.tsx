import { memo } from "react";
import { Container } from "./styles";

const VersionComponent = () => {
	return <Container>v0.0.1</Container>;
};

export const Version = memo(VersionComponent);
