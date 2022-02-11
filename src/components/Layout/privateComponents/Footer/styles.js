import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 347px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  & > span {
    margin-bottom: 8px;
    font-family: 'Bw Seido Round';
  }
  
  & img {
    width: 150px;
    filter: invert(1);
  }
`;