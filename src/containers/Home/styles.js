import styled from "styled-components";

export const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-direction: column;
  margin: 20px 0 50px 0;
  
  & .title {
    margin-bottom: 20px;
    font-family: 'Bw Seido Round';
    font-size: 40px;

  }
  
  & .description {
    margin: 0 200px;
    font-family: 'Roboto Light';
    font-size: 18px;
  }
`;

export const Gif = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-bottom: 50px;
     & img {
       width: 70%;
     }
    & span {
      font-family: 'Bw Seido Round Light';
      font-size: 48px;
    }
`;