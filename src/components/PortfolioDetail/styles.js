import styled from "styled-components";

export const Div = styled.div`
  width: 680px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 70px 0;
`;

export const Logo = styled.div`
  & img {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #575756;
`;
export const Text = styled.div`
  color: #575756;
  text-align: center;
  margin: 20px 0 30px 0;
`;
export const Url = styled.div`
  & a{
    text-decoration: none;
    color: #575756;
  }
`;