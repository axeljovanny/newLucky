import styled from "styled-components"
import { above } from "./index"
import { colors, font, size } from "../../utils/const"


export const StyledNavigator = styled.div`
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: space-betwen;
    align-items: center;
    z-index: 12;
    position: absolute;
    width: 100vw;
    height: 15vh;

  ${above.medium`
  `}
  ${above.large`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 5%;
  `}

`
export const StyledLine = styled.div`
display:none;


  ${above.medium`
  `}
  ${above.large`
  display:flex;
  z-index: 11;
    width: 5vw;
    height: ${props => props.footer ? '' : '100%'};
    position:absolute;
  border-right: 0.5mm inset ${props => props.white ? colors.white : colors.black};    
  height: ${props => props.footer ? '35vh' : '100vh'};
  `}

`
export const StyledIcons = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    height: 25%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${props => props.footer ? '0 10%' : '0 10%'};

  
    svg{
        width: ${props => props.footer ? '90%' : '90%'};
        padding: 2% 3%;


    }
    
    ${above.large`
    padding-top: 5vh;
    display: ${props => props.footer ? 'none' : 'flex'};
    height: 50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    svg{
        width: 60%;
        
    }
  `}
`

export const Item = styled.li`
  font-family: Montserrat;
  font-size: .7em;
  :hover {
    text-decoration: underline;
  }
`;








//* Estilos del menu LANGUAGE
//

export const StyledLang = styled.div`
    display: none ;
    
    ${above.large`
    padding-bottom: 2em;
    display: flex;
    height: 50%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: ${colors.white};
     
    
  `}
`
export const LangButtons = styled.div`
display: none;

  ${above.large` {
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    height: 30%;

    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li{
      height: 30%;
      display: flex;
    justify-content: center;
    align-items: center;
    }
    li:first-child{
      border-bottom: 1px solid ${colors.softWhite} ;
    }
  
  
    a{  
      font-family:  ${font.light};
      color: ${colors.softWhite} ;
      font-size: ${size.minimini};
      transition: opacity 0.4s ease-in-out; 
    }

    }

  `}
`;


/*
 Movil menu
*/
export const NavIcon = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 2em 2em;
    position: fixed;

    ${above.large` {
      display: none;
      }
    `}
`;

export const Line = styled.span`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: ${colors.white};
    transition: width 0.4s ease-in-out;

    :nth-child(2) {
      width: ${props => (props.open ? "40%" : "70%")};
    }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => (props.open ? "100vh" : 0)};
  width: 100vw;
  background: ${colors.darkBlue};
  transition: height 0.4s ease-in-out;
  position: fixed;
  z-index: 5;

  ${above.large` {
    display: none;
    }
  `}
`;

export const OverlayPortafolio = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => (props.open ? "100vh" : 0)};
  width: 100vw;
  background: ${colors.darkBlue};
  transition: height 0.4s ease-in-out;
  position: fixed;
  z-index: 5;
`;

export const OverlayMenu = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  width: 100vw;
  height: 70%;
  list-style: none; 
  padding-left: 12%;


  li{
    margin: 0 0 2% 0;
  }

  li a{
    opacity: ${props => (props.open ? 1 : 0)};
    font-family:  ${font.bold};
    color: ${colors.softWhite} ;
    font-size: ${size.super};
    transition: opacity 0.4s ease-in-out;
    
  }

`;


export const LangStyled = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};
  height: 5%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 0;

  li:first-child{
    border-right: 1px solid ${colors.softWhite} ;
  }


  a{  
    font-family:  ${font.bold};
    color: ${colors.softWhite} ;
    font-size: ${size.mini};
    transition: opacity 0.4s ease-in-out; 
  }

  
`;