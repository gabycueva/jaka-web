import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  & ul {
    color: #fff;
    font-family: 'Bw Seido Round';
    display: flex;
    position: absolute;
    margin-left: 500px;
    list-style-type: none;
    flex-wrap: wrap;
    overflow: hidden;
    text-transform: uppercase;
    & li {
      padding-right: 20px;
      & a{
        color: #fff;
        text-decoration: none;
      }
    }
  }
  
`;

export const Logo = styled.div`
  & img {
    width: 100px;
    filter: invert(1);
  }
`;

export const Hamburguer = styled.div`
  position: absolute;
  right: 0;
  margin-right: 20px;
`;
