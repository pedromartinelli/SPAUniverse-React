import styled from "styled-components";

import backgroundImg from '../../assets/mountains-universe-3.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${backgroundImg});
  background-size: cover;
  background-position-y: bottom;

  > nav {
    a:nth-child(4) {
      color: #D1D1D1;
      font-weight: 700;
    };
  };
`;

export const Main = styled.main`

  > div {
      
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 24px;

    padding: 100px;

    > h1 {
      font-size: 48px;
    };

    > p {
      font-size: 18px;
      line-height: 28px;
      text-align: left;
      max-width: 650px;
    };
  }
`;