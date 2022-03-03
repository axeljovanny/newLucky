import styled from "styled-components"
import { above } from "./index"
import { colors } from "../../utils/const"

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
  background: rgb(0, 0, 0, 0);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 5%;
  `}

`
export const StyledLine = styled.div`
    z-index: 11;
    width: 5vw;
    height: ${props => props.footer ? '50vh' : '100vh'};
    position:absolute;

  ${above.medium`
  `}
  ${above.large`
  border-right: 0.5mm inset ${props => props.white ? colors.white : colors.black};    
  `}

`
export const StyledIcons = styled.div`
    display: none ;
    
    ${above.large`
    padding-top: 2em;
    display: flex;
    height: 50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2vh;
    img{
        width: 50%;
        fill: ${colors.softWhite};
    }
  `}
`

export const Item = styled.li`
  font-family: CaviarDreamsB;
  font-size: .7em;
  ${above.large`

  `}
`;

export const LinkStyled = styled.li`

  :hover {
    text-decoration: underline;
  }
`;



export const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "100vh" : 0)};
  width: 100vw;
  background: ${colors.black};
  transition: height 0.4s ease-in-out;
  position: fixed;
  z-index: 5;

  ${above.m` {
    display: none;
    }
  `}
`;

export const OverlayMenu = styled.ul`
  padding-inline-start: 30px;
  list-style: none; 
  position: absolute;
  left: 45%;
  top: 55%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-family:  CaviarDreams;
    text-align: center;
    font-size: 20px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
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
    gap: 2vh;
    color: ${colors.white};
    
  `}
`
export const LangStyledWeb = styled.button`
display: none;
  ${above.large` {
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    }
  `}
`;


/*
 Burguer Icon
*/
export const NavIcon = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 2em 2em;

    ${above.m` {
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

export const LangStyled = styled.button`

  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  padding:0 3em;
  justify-content:space-between;
  
  ${above.m` {
    display: none;
    }
  `}
`;