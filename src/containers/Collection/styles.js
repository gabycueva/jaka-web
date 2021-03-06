import styled from "styled-components";
import { mediaQuery } from "../../helpers/responsive";

export const Div = styled.div`
  & .title {
    font-family: 'Bw Seido Round';
    color: #fff;
    font-size: 48px;
  }
  & .big-title {
    background: #000;
    display: flex;
    justify-content: center;
    & img {
      width: 981px;
      ${mediaQuery} {
      width: 100%;
    }
    }
  }
  & .artists {
    width: 981px;
    margin: 0 auto;
    ${mediaQuery} {
      width: 100%;
    }
  }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Light';
    // padding: 0 200px;
    width: 981px;
    margin: 0 auto;

    ${mediaQuery} {
      padding: 0 24px;
      width: 100%;
    }
  
    & span {
      padding-bottom: 20px;
    }
  
    & .medium {
      font-family: 'Roboto Medium';
    }
`;

export const Flex = styled.div`
  display: flex;
  // margin: 30px 0;
  // padding: 0 200px;
  & > div:nth-child(2) {
    margin: 0 15px;
  }
  ${mediaQuery} {
    flex-wrap: wrap;
    padding: 0 24px;
  }
`;

export const Rectangle = styled.div`
  width: 100%;
  height: 675px;
  background-color: #EDEDED;
  margin: 100px 0 50px;

  ${mediaQuery} {
    height: 338px;
  }

`;
