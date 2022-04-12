import styled from "styled-components"
import { above } from "./index"
import { colors, font, size } from "../../utils/const"



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
  video::after{
    background: ${colors.black};
    transition: opacity 0.4s ease-in-out;
  }
  video::before{
    background: ${colors.none};


  }

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
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, ${colors.darkBlue} 100%);




  ${above.medium`
  height: 100vh;
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
  display: ${props => props.movil ? 'flex' : 'none'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
    height: 30%;
    width: 100%;

    svg{
      width: '10%'};


  }
  

  ${above.medium`
  display: ${props => props.movil ? 'none' : 'flex'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
    height: 30%;
    width: 100%;
  `}
  ${above.large`
  display: ${props => props.movil ? 'none' : 'flex'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  padding-right: none;
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
      padding: 0;

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
display: none;





  ${above.medium`
      
  `}
  ${above.large`

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
  `}
`

export const StyledButtonRight = styled.div`
display: none;





  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  position: absolute;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  -webkit-transform: translate(-3%);
  z-index: 4;



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
  `}
`

export const StyledButtonLeft = styled.div`
position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  -webkit-transform: translate(2%);


a {
    position: absolute;
    display: inline-block;
    -webkit-transform: translate(0, 300%);
    transform: translate(0, 300%);
    -webkit-transform: rotate(-270deg);
    transform: rotate(-270deg);
    color: #000;
    font : normal 400 11px/1 'Josefin Sans', sans-serif;
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
    box-sizing: border-box;
  }
  

  ${above.medium`
      
  `}
  ${above.large`
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
  `}
`