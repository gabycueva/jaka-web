import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
`;

export const LogoContainer = styled.div`
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
`;
