import styled from "styled-components"
import { colors, size, font } from "../../utils/const"
import { above } from "./index"


export const StyledAbout = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(4, auto); 
  grid-column-gap: 0px;
  grid-row-gap: 0px;   
  width: 100vw;
  background: ${colors.darkBlue};
  ${above.medium`
      
  `}
  ${above.large`
  grid-template-rows: repeat(4, 1fr); 
  height: 100vh;
  width: 100vw;
  `}
`


export const AboutTittle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-area: 1 / 1 / 2 / 3;
  width: 100vw;
  margin: 3em 0;

  h2{
    color: ${colors.none} ;
  -webkit-text-fill-color: ${colors.darkBlue} ; 
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${colors.softWhite} ;
    font-family:  ${font.bold};
    font-size: ${size.header};
    margin:0;
  }
  h3{
    font-family:  ${font.bold};
    color: ${colors.softWhite} ;
    font-size: ${size.tittle};
    margin:0;
    transform: translate(0%, -20%);
  }

  ${above.large`
  transform: translate(20%, 0%);
  align-items: flex-start;
  grid-area: 1 / 1 / 2 / 2;
  margin: 0;
  width: 50vw;

  h2{
    font-family:  ${font.bold};
    font-size: ${size.headerMovil};

  }
  h3{
    font-family:  ${font.bold};
    color: ${colors.softWhite} ;
    font-size: ${size.header};
  }

  
  `}
`

export const AboutText = styled.div`
display: flex;
justify-content: center;
align-items: center;
grid-area: 3 / 1 / 4 / 3;
width: 100vw;
height: auto;
margin: 3em 0;


h4{
  width: 80%;
  text-align: justify;
  font-family:  ${font.light};
  color: ${colors.softWhite} ;
  font-size: ${size.text};

}

  ${above.medium`
      
  `}
  ${above.large`
  
  grid-area: 1 / 2 / 5 / 3; 
  width: 50vw;

  
  `}
`

export const AboutImg1 = styled.div`
display: ${props => props.web ? 'none' : 'flex'};
justify-content: center;
align-items: center;
grid-area: 2 / 1 / 3 / 3;
transform: translate(0);

width: 100vw;

  ${above.medium`
      
  `}
  ${above.large`
  display: ${props => props.movil ? 'none' : 'flex'};

  transform: translate(-15%);

  grid-area: 2 / 1 / 5 / 2;
  width: 50vw;

  
  `}

`
export const AboutImgDiv2 = styled.div`
display: ${props => props.web ? 'none' : 'flex'};
justify-content: center;
align-items: center;
transform: translate(0);
grid-area: 4 / 1 / 5 / 3;
width: 100vw;
margin-bottom: 3em;


  ${above.medium`
      
  `}
  ${above.large`
  display: ${props => props.movil ? 'none' : 'flex'};
  transform: translate(25%, -30%);
  grid-area: 2 / 1 / 5 / 2;
  width: 50vw;

  
  `}
`
export const AboutImgDiv3 = styled.div`
  display:none;

  ${above.medium`
      
  `}
  ${above.large`

  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(30%, 10%);

  grid-area: 2 / 1 / 5 / 2;
  width: 50vw;

  
  `}
`