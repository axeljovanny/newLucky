import styled, { keyframes } from "styled-components"
import { above } from "./index"
import { colors, font, size } from "../../utils/const"



const headertransition = keyframes`
  0% { transform: scale(1) translateY(0px)}
  50% { transform: scale(1.3) translateY(5%)}
  75% { transform: scale(1.2) translateY(-5%)}
  100% { transform: scale(1) translateY(0px)}

`

export const StyledVideo = styled.div`
  display: ${props => props.web ? 'none' : 'flex'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: -3;
  position: absolute;


  ${above.medium`
  `}
  ${above.large`
  display: ${props => props.web ? 'flex' : 'none'};

  `}

`
export const StyledVideoMovil = styled.div`
  width: 100%;
  display: ${props => props.movil ? 'flex' : 'none'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: -3;
  position: absolute;


  ${above.medium`
  `}
  ${above.large`
    display: ${props => props.movil ? 'none' : 'flex'};
  `}

`

export const StyledHeader = styled.header`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    width: 100vw;
    height: 100vh;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, ${colors.darkBlue} 100%); //obscurecer la parte superior

  }

  &:before {
    content: "";
    width: 100vw;
    height: 100vh;
    position: absolute;
    backface-visibility: hidden;
    transform: scale(1, 1);
    transform: translateZ(0);
    //background: url('https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') 50% 0 no-repeat;
    //background-size: cover;
    //background-attachment: fixed;
    // animation: ${headertransition} 60s linear 10ms infinite;
    transition: all 0.1s ease-in-out;
    z-index: -2;
  }


  ${above.medium`
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
  ${above.large`
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
`


export const StyledLogo = styled.div`
  height: 40%;
  width: 100%;
  // background: ${colors.red} ;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${above.medium`
    height: 30%;
    width: 100%;
  `}
  ${above.large`
    height: 30%;
    width: 100%;
  `}

`

export const StyledTextHeader = styled.div`
  height: 40%;
  width: 100%;
  // background: ${colors.orange} ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10vw;
  padding-left: none;
  margin:0;

  h3{
    font-family:  ${font.bold};
      color: ${colors.softWhite} ;
      font-size: ${size.headerMovil};
      margin: 0;
      transform: translate(0%, -20%);


  }
  h4{
    font-family:  ${font.ultraLight};
    color: ${colors.softWhite} ;
    font-size: ${size.super};
    margin:0;
  }
  h5{
    font-family:  ${font.medium};
    color: ${colors.softWhite} ;
    font-size: ${size.super};
    margin: 0;
  }

  ${above.medium`
      height: 60%;
      width: 100%;
      justify-content: center;
      padding: 0;
  `}
  ${above.large`
      height: 60%;
      width: 50%;
      justify-content: center;
      align-items: flex-end;
      padding-right: none;
      padding-left: 0vw;

      h3{
        font-family:  ${font.bold};
          color: ${colors.softWhite} ;
          font-size: ${size.headerSuper};
          margin: 0;
          transform: translate(0%, -20%);
    
    
      }
      h4{
        font-family:  ${font.ultraLight};
        color: ${colors.softWhite} ;
        font-size: ${size.header};
        margin:0;
      }
      h5{
        font-family:  ${font.medium};
        color: ${colors.softWhite} ;
        font-size: ${size.header};
        margin: 0;
      }
  `}
`

export const StyledButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


a {
    position: absolute;
    display: inline-block;
    -webkit-transform: translate(0, -450%);
    transform: translate(0, -450%);
    color: #fff;
    font : normal 400 13px/1 'Josefin Sans', sans-serif;
    letter-spacing: .1em;
    text-decoration: none;
    transition: opacity .3s;
  }
  a:hover {
    opacity: .5;
  }

  span {
    padding-top:1em;
    position: absolute;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb05 1.5s infinite;
    animation: sdb05 1.5s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb05 {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
  @keyframes sdb05 {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }




  ${above.medium`
      
  `}
  ${above.large`
  `}
`

export const StyledButtonRight = styled.div`
position: absolute;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  -webkit-transform: translate(-2%);


  


a {
    position: absolute;
    display: inline-block;
    -webkit-transform: translate(0, -450%);
    transform: translate(0, -450%);
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
    color: #fff;
    font : normal 400 13px/1 'Josefin Sans', sans-serif;
    letter-spacing: .1em;
    text-decoration: none;
    transition: opacity .3s;
  }
  a:hover {
    opacity: .5;
  }

  span {
    padding-top:1em;
    position: absolute;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb05 1.5s infinite;
    animation: sdb05 1.5s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb05 {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
  @keyframes sdb05 {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }




  ${above.medium`
      
  `}
  ${above.large`
  `}
`

export const StyledButtonLeft = styled.div`
position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  -webkit-transform: translate(10%);


a {
    position: absolute;
    display: inline-block;
    -webkit-transform: translate(0, 300%);
    transform: translate(0, 300%);
    -webkit-transform: rotate(-270deg);
    transform: rotate(-270deg);
    color: #000;
    font : normal 400 13px/1 'Josefin Sans', sans-serif;
    letter-spacing: .1em;
    text-decoration: none;
    transition: opacity .3s;
  }
  a:hover {
    opacity: .5;
  }

  span {
    padding-top:1em;
    position: absolute;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb05 1.5s infinite;
    animation: sdb05 1.5s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb05 {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
  @keyframes sdb05 {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }

  ${above.medium`
      
  `}
  ${above.large`
  `}
`