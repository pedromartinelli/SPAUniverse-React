import { Container, Main } from "./styles";

import { Header } from "../../components/Header";

export function Exploration() {
  return (
    <Container>
      <Header />

      <Main>
        <div>
          <h1>
            Exploração
          </h1>

          <p>
            Os corpos celestes e astros sempre foram motivo de
            grande fascinação na humanidade. Há registros de gregos,
            mesopotâmicos e astecas descrevendo vários
            acontecimentos celestes. Na era contemporânea, vários
            cientistas deram grandes contribuições para que o sonho
            de explorar o espaço pudesse se tornar realidade, como
            o russo Konstantin Tsiolkovsky, o alemão Hermann Oberth
            e o estadunidense Robert Goddard.
          </p>
        </div>
      </Main>
    </Container>
  );
};