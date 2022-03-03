import styled from "styled-components";
import { mediaQuery } from "../../helpers/responsive";

export const Div = styled.div`
  width: ${(props) => props.width ? props.width : "100%"};
  ${mediaQuery} {
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 243px;
  background-color: ${(props) => props.bgColor ? props.bgColor : "#EDEDED"};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(1);
  transition: ease 0.15s;
  &:hover {
    filter: grayscale(0);
  }
  & img {
    width: 250px;
  }
`;

export const Text = styled.div`
  margin-top: 10px;
  text-align: center;
  ${mediaQuery} {
    margin-bottom: 10px;
  }
`;
