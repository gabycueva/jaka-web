import styled from "styled-components";

export const Div = styled.div``;

export const Header = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  & > span:first-child {
    margin-right: 20px;
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
