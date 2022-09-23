import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    color: #D1D1D1;
  };

  a {
    text-decoration: none;
  };

  ul {
    list-style-type: none;
  };

  button, a {
    cursor: pointer;
    transition: 0.2s;
  } ;

  button:hover, a:hover {
    filter: brightness(0.8);
    transform: scale(1.01);
  };

  button:hover {
    transform: scale(1.05);
  };
`;