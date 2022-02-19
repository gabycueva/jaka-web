import styled from "styled-components";

export const Div = styled.div`
  & .banner {
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
`;

export const Container = styled.div`
  margin: 0 200px;
`;

export const Flex = styled.div`
  display: flex;
  margin: 30px 0;
  & > div:nth-child(2) {
    margin: 0 15px;
  }
`;
