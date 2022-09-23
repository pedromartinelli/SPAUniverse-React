import styled from "styled-components";

import backgroundImg from '../../assets/mountains-universe-1.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${backgroundImg});
  background-size: cover;
  background-position-y: bottom;

  > nav {
    a:nth-child(2) {
      color: #FFF;
      font-weight: 700;
    };
  };
`;

export const Main = styled.main`

  > div {
    margin-top: 172px;
      
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    > h1 {
      font-size: 48px;
    };

    > button {
      padding: 12px 32px;

      background: none;
      border: 2px solid #FFF;
      border-radius: 5px;
    };
  }
`;