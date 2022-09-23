import { Container, Main } from "./styles";

import { Header } from "../../components/Header";

export function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <div>
          <h1>
            Explore o universo
          </h1>

          <button>QUERO SABER MAIS</button>
        </div>
      </Main>
    </Container>
  );
};