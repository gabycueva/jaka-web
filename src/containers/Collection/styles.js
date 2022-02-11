import styled from "styled-components";

export const Div = styled.div`
  & .title {
    font-family: 'Bw Seido Round';
    color: #fff;
    font-size: 48px;
  }
  & .big-title {
    font-family: 'Bw Seido Round';
    color: #fff;
    font-size: 60px;
    padding: 70px 0;
  }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Light';
    padding: 0 200px;
  
    & span {
      padding-bottom: 20px;
    }
  
    & .medium {
      font-family: 'Roboto Medium';
    }
`;

export const Flex = styled.div`
  display: flex;
  margin: 30px 0;
  padding: 0 200px;
  & > div:nth-child(2) {
    margin: 0 15px;
  }
`;

export const Rectangle = styled.div`
  width: 100%;
  height: 675px;
  background-color: #EDEDED;
  margin: 100px 0 50px;
`;