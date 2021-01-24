import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;

    a {
      color: #000;

      :hover,
      :focus {
        color: #000;
      }
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 16px;
    }
  }
`;
