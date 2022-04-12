import styled from "styled-components"
import { colors, font, size } from "../../utils/const"
import { above } from "./index"


export const StyledFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 5% 0;
  height: auto;
  background: ${colors.darkBlue};
  ${above.medium`
      
  `}
  ${above.large`
  flex-flow: row;
  width: 100vw;
  height: 50vh;
  padding: 0;
  `}
`
export const FooterText = styled.div`
  display: flex;
  width: 80%;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  background: ${colors.darkBlue};
  padding-left: 0;
  gap: 0;

  ${above.medium`
      
  `}
  ${above.large`
  align-items: flex-end;
  width: 70vw;
  gap: 10vh;
  `}
`
export const FooterImage = styled.div`
  display: ${props => props.movil ? 'flex' : 'none'};  
  justify-content: center;
  align-items: flex-start;
  background: ${colors.darkBlue};
  width: 100%;

  ${above.medium`
  width: 50%;
      
  `}
  ${above.large`
  width: 20%;
  display: ${props => props.web ? 'flex' : 'none'}; 
  justify-content: center;
  align-items: flex-start; 

  
  `}
`

export const FooterContact = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-flow:column wrap ;
  background: ${colors.darkBlue};
  ${above.medium`
      
  `}
  ${above.large`
  flex-flow: row wrap ;
  `}
`
export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  width: auto;
  background: ${colors.darkBlue};
  ${above.medium`
      
  `}
  ${above.large`
  width: 80%;
  `}
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  justify-content: center;
  background: ${colors.none};
  width: 100%;
  color: ${colors.white};
  h3{
    font-family:  ${font.light};
    color: ${colors.white} ;
    font-size: ${size.tittle};
  }

  p{
  font-family:  ${font.light};
    color: ${colors.white} ;
    font-size: ${size.text};
    margin: 0.2em 0 ;
}


  ${above.medium`
      
  `}
  ${above.large`
  width: 50%;
  align-items: flex-end;

  h3{
    font-family:  ${font.light};
    color: ${colors.white} ;
    font-size: ${size.tittle};
  }

  p{
    margin: 0.2em 0 ;
    font-family:  ${font.light};
    color: ${colors.white} ;
    font-size: ${size.text};
}
  `}
`

export const Social = styled.div`
  display: none;

  a{
    display: none;
  }
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.none};
  width: 15%;
  a{
    display: flex;
    font-family:  ${font.light};
      color: ${colors.white} ;
      font-size: ${size.text};
    }
  `}
  
`