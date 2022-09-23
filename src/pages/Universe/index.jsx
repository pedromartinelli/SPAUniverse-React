import { Container, Main } from "./styles";

import { Header } from "../../components/Header";

export function Universe() {
  return (
    <Container>
      <Header />

      <Main>
        <div>
          <h1>
            Universo
          </h1>

          <p>
            A palavra Universo deriva do latim universum.
            A palavra latina foi usada por Cícero e posteriormente
            por outros autores com o mesmo sentido que é empregada
            atualmente. A palavra latina é derivada da contração
            poética unvorsum — utilizada primeiramente por Lucrécio
            no Livro IV de seu “Sobre a Natureza das coisas” — que
            conecta un, uni (um) com vorsum, versum
            (que significa "algo rodado, rolado ou mudado").
          </p>
        </div>
      </Main>
    </Container>
  );
};