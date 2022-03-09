import styled from "styled-components";

import { mediaQuery } from "../../helpers/responsive";

export const Div = styled.div`

  & .banner {
    margin-top: 150px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 100%;
    }
    
    & span {
      font-family: 'Bw Seido Round';
      text-transform: uppercase;
      color: #fff;
      font-size: 40px;
      margin-left: 50px;
    }
    
  }
`;

export const Header = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span:first-child {
    margin-right: 50px;
    & img {
      width: 200px;
    }
  }
  & > span:last-child {
    font-family: 'Bw Seido Round';
    font-size: 28px;
  }

  ${mediaQuery} {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  margin: 0 200px;

  ${mediaQuery} {
    margin: 0 24px;
  }

  & .flex1{
    margin-bottom: 30px;
    & > a {
      text-decoration: none;
      color: inherit;
    }
  }

`;

export const Flex = styled.div`
  display: flex;
  margin: 30px 0;

  ${mediaQuery} {
    flex-wrap: wrap;
  }

  & > a {
    text-decoration: none;
    color: inherit;
  }

  & > a:nth-child(2) {
    margin: 0 15px;
  }
`;

export const Flex2 = styled.div`
  display: flex;
  margin: 30px 0;

  ${mediaQuery} {
    flex-wrap: wrap;
  }

  & > a {
    width: 33%;
    text-decoration: none;
    color: inherit;
    ${mediaQuery} {
      width: 100%;
    }
  }

  & > a:nth-child(2) {
    margin: 0 15px;
  }
`;
