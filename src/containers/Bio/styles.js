import styled from "styled-components";
import { mediaQuery } from "../../helpers/responsive";

export const Div = styled.div``;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 200px;
  & > div:first-child {
    margin-right: 70px;
  }
`;

export const Picture = styled.div`
  & img {
    width: 350px;
    height: 350px;

    ${mediaQuery} {
      width: 200px;
      height:200px;
    }
  }
`;

export const BioDescription = styled.div`
  text-align: left;
`;

export const Title = styled.div`
  font-family: 'Bw Seido Round';
  text-transform: uppercase;
  font-size: 38px;
`;

export const Details = styled.div`
  font-family: 'Bw Seido Round Light';
  text-transform: uppercase;
  margin: 10px 0 30px 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #000;
`;

export const Quote = styled.div`
  font-family: 'Bw Seido Round Medium Italic';
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  & span:first-child {
    margin: 30px 0;
  }
`;

export const Section = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 70px 0;

  ${mediaQuery} {
    padding: 70px 0;
  }
`;

export const BigTitle = styled.div`
  text-align: left;
  font-family: 'Bw Seido Round';
  font-size: 72px;
  text-transform: uppercase;
`;

export const Columns = styled.div`
  display: flex;
  gap: 50px;
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
  
  & .doodles {
    margin-top: 40px;
    margin-left: 15px;
  }
  
  & span {
    font-family: 'Roboto Medium';
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 250px;


  ${mediaQuery} {
    padding: 0 24px;
  }

  & span {
    font-family: 'Roboto Light';
    padding-bottom: 20px;
    text-align: left;
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
  text-align: center;
    & img {
      width: 100%;
    }
`;

export const Logo = styled.div`
  text-align: center;
  margin-bottom: 70px;
  margin-top: 30px;
  & img {
    width: 300px;
    height: 300px;
  }
`;


