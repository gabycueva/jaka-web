import styled from "styled-components";
import { mediaQuery } from "../../helpers/responsive";

export const Div = styled.div`
  width: ${(props) => props.width ? props.width : "100%"};
  ${mediaQuery} {
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  background-image: url(${(props) => props.image ? props.image : "../../images/artist-example.jpg"});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${(props) => props.position ? props.position : "center"};
  width: 100%;
  height: 243px;
  background-color: #EDEDED;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(1);
  transition: ease 0.15s;
  &:hover {
    filter: grayscale(0);
    cursor: pointer;
  }
  & img {
    width: 100%;
    height: 243px;
    border-radius: 40px;
  }
`;

export const Text = styled.div`
  margin-top: 10px;
  text-align: center;
  & a:nth-child(2) {
    margin: 0 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;
