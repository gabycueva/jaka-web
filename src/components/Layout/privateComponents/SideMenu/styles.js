import styled from "styled-components";

export const Div = styled.div`
  & svg {
    fill: #fff;
  }
  & button {
    min-width: unset;
  }
`;

export const List = styled.div`
  background-color: #000;
  li {
    padding: 10px 20px;
    font-family: 'Bw Seido Round';
  }
  a{
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
  }
`;