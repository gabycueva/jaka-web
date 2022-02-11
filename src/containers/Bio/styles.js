import styled from "styled-components";

export const Div = styled.div``;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 200px;
  & > div:first-child {
    margin-right: 20px;
  }
`;

export const Picture = styled.div`
  & img {
    width: 350px;
    height: 350px;
  }
`;

export const BioDescription = styled.div``;

export const Title = styled.div`
  font-family: 'Bw Seido Round';
  text-transform: uppercase;
  font-size: 38px;
`;

export const Details = styled.div``;

export const Line = styled.div``;

export const Quote = styled.div`
  font-family: 'Bw Seido Round Medium Italic';
`;

export const Section = styled.div`
  background-color: #000;
  color: #fff;
  padding: 50px 200px;
`;

export const BigTitle = styled.div`
  text-align: left;
  font-family: 'Bw Seido Round';
  font-size: 84px;
  text-transform: uppercase;
`;

export const Columns = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: left;
   & ul {
     font-family: 'Roboto Light';
     list-style-type: none;
     li:before {
       content: "•";
       padding-right: 10px;
     }
   }
  
   & .no-bullets {
     list-style-type: none;
     li:before {
       content: "";
       padding-left: 5px;
     }
   }
  
  & span {
    font-family: 'Roboto Medium';
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & span {
    font-family: 'Roboto Light';
    padding-bottom: 20px;
  }
  & .no-bullets {
    list-style-type: none;
    text-align: left;
    li:before {
      content: "";
      padding-left: 5px;
    }
  }
`;

export const MaxTitle = styled.div`
  font-family: 'Bw Seido Round';
  font-size: 100px;
`;

export const Logo = styled.div`
  & img {
    width: 300px;
    height: 300px;
  }
`;


