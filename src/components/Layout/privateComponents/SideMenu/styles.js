import styled from "styled-components";

export const Div = styled.div`
  & svg {
    fill: #fff;
  }
`;

export const List = styled.div`
  background-color: #000;
  ul {
    margin: 0;
    font-family: 'Bw Seido Round';
    list-style-type: none;
    text-transform: uppercase;
    li {
      padding: 10px 0;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;