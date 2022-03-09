import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BigTitle = styled.div`
  text-align: left;
  font-family: 'Bw Seido Round';
  font-size: 130px;
  text-transform: uppercase;
  margin-top: 50px;
`;

export const Subtitle = styled.div`
  font-family: 'Bw Seido Round Light';
  font-size: 48px;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0 100px 0;
`;
export const Logo = styled.div`
  & img {
    width: 191px;
    height: 72px;
  }
`;
export const Line = styled.div`
  width: 2px;
  height: 60px;
  background-color: #000;
  margin: 0 10px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;