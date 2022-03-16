import styled from "styled-components";
import { mediaQuery } from "../../helpers/responsive";

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-direction: column;
  width: 981px;
  margin: 0 auto;
  
  & .title {
    margin-top: 50px;
    margin-bottom: 20px;
    font-family: 'Bw Seido Round';
    font-size: 40px;
    text-align: center;

  }
  
  & .description {
    // margin: 0 200px;
    font-family: 'Roboto Light';
    font-size: 18px;

    ${mediaQuery} {
      // margin: 0 24px;
      width: 100%;
    }

  }
`;

export const Gif = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-bottom: 50px;
     & img {
       width: 100%;
     }
    & span {
      font-family: 'Bw Seido Round Light';
      font-size: 48px;
    }
`;