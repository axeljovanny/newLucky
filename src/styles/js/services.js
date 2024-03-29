import styled from "styled-components"
import { colors, font, size } from "../../utils/const"
import { above } from "./index"


export const StyledServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column ;
  background: ${colors.softWhite};
  width: 100vw;
  
  ${above.medium`
      
  `}
  ${above.large`  

  `}
`

export const TittleServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.softWhite};
  width: 100vw;

  h2{
    padding: 0;
    margin-bottom: 1%;
    font-family:  ${font.thin};
    color: ${colors.black} ;
    font-size: ${size.hola};
  }

  ${above.medium`
      
  `}
  ${above.large`
  justify-content: flex-start;

  h2{
    padding-left: 10%;
  }
  `}
`
export const TextServices = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.softWhite};
  height: 80%;
  width: 100%;
  padding: 0%;
  gap: 0px;
  flex-flow: row wrap;
  margin-bottom: 2em;


  ${above.medium`
      
  `}
  ${above.large`
  gap: 10px;
  width: 100;
  padding: 0 5%;


  `}
`

export const Text = styled.div`
  display: flex;
  padding: 5% 0%;
  align-items: ${props => props.izq ? 'flex-end' : 'flex-start'};
  flex-flow: column wrap;
  justify-content: center;
  background: ${colors.none};
  width: 50%;
  text-align: ${props => props.izq ? 'right' : 'left'};

  h3{
    font-family:  ${font.medium};
    color: ${colors.black} ;
    font-size: ${size.subtittle};
    margin: 1em;

  }

  ul{
    list-style:none;
    padding:0;
    ${props => props.izq ? 'margin-right :1em' : 'margin-left :1em'};
    font-family:  ${font.light};
    color: ${colors.black} ;
    font-size: ${size.text};
  }

  ${above.medium`
      
  `}
  ${above.large`
  height: 50%;
  width: 30%;
  justify-content: center;
  text-align: justify;
  align-items: center;
  padding: 2% 0;


  h3{
    font-family:  ${font.bold};
    color: ${colors.black} ;
    font-size: ${size.tittle};
  }

    ul{
      font-family:  ${font.light};
      color: ${colors.black} ;
      font-size: ${size.text};
      margin:0;
    }
  `}
`
