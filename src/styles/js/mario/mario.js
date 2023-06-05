import styled from "styled-components"
import { above } from '../index'

/*
Nomenclatura de Estilos:
"S" = Estilos = "SButton"
"I" = Imagenes = "ILogo"
"C" = Componentes = "CHeader"
*/



export const SContenedorPrincipal = styled.div`
 /* Comentario en estilos */
width: 100vw;    /* ancho de mi pagina    */ 
height: auto;    /* largo de mi pagina */

${above.medium`
    
  `}
${above.large`
    
  `}
`





/* -----------INICIO SECCION HEADER ---------------- */

export const SHeader = styled.div`
 /* Comentario en estilos */
 position: relative;
  width: 100%;
  height: 100vh;

 /* color de fondo*/
display: flex;  // utilizar las funciones de flex
justify-content: center; // centrar contenido
align-items: center; // alinear el contenido
flex-flow: row wrap; // utilizar filas y columnas y saltar de linea si no cabe 
`





/*+++ INICIA SECCION NAV +++*/

export const SNav = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina  
height: 20%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex
justify-content: flex-end;
align-items: center;
`

export const SLogo = styled.div`
display: none;


${above.large`
    width: 70%; 
    height: 100%; 
    background: none;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: row;
  `}

`

export const SIdioma = styled.div`
 /* Comentario en estilos */

width: 50%;    // ancho de mi pagina  
height: 100%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex
padding: 10%;
justify-content:flex-end;
align-items:center ;
flex-direction: row;
position: relative;

a{
    padding: 5%;
}

${above.large`
    width: 15%;    // ancho de mi pagina  
    justify-content:flex-end;

  `}

`

export const SNavButton = styled.div`
width: 50%;    // ancho de mi pagina  
height: 100%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex
justify-content:flex-start;
padding: 10%;
align-items:center ;

${above.large`
    width: 15%;
    padding: 0;
    justify-content:center;

  `}

`





/*+++ INICIA SECCION BANER +++*/

export const SContenido = styled.div`
width: 100%;    // ancho de mi pagina  
height: 80%;    // largo de mi pagina
display: flex;  // utilizar las funciones de flex: ;
flex-flow: column-reverse wrap ;

${above.large`
    background: none;  /* color de fondo*/
    flex-flow: column wrap ;
    justify-content: space-around;
    align-items:center;
  `}

`
export const SInicioYCervicios = styled.div`
 /* Comentario en estilos */

 width: 100%;    // ancho de mi pagina  
height: 80%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex: ;
flex-wrap: wrap;
justify-content: center;
align-items:center;
${above.large`
    width: 70%;    // ancho de mi pagina    
    height: 100%;  
    
  `}
`

export const STextoInicio = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 75%;    // largo de mi pagina
background: none; //color de fondo

display: flex;  // utilizar las funciones de flex
flex-direction:column;
justify-content:center;
align-items: center;
text-align: center;

position: relative;
padding: 20%;
h1{
    background:none;
    font-size: 3em;
    text-align: left;
}

`

export const SAnimacionCentral = styled.div`
 /* Comentario en estilos */

width: 40%;    // ancho de mi pagina    
height: 40%;    // largo de mi pagina
background: none ; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;
border: 1px solid none;
position: absolute;
right: -10%;
top: -10%;
transform: scale(1.3);

${above.large`
    width: 25%;    // ancho de mi pagina    
    height: 28%; 
    right: -10%;
    top: 0%;
    transform: scale(1.2;
  `}
`

export const SAnimacionTextoInicio = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 20%;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
flex-wrap: wrap;
justify-content: center;
align-items: center;

position: absolute;
right: 0;
bottom:0;

${above.large`
    width: 30%;    // ancho de mi pagina    
    height: 20%;
    right: 25%;
    bottom: 30%;
  `}
`

export const STextoServiciosHome = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 25%;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
flex-wrap: wrap;
justify-content: center;
align-items: center;
position: relative;

`



/*+++ INICIA SECCION HEADER IZQUIERDA+++*/

export const SHeaderIzquierda = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 20%;    // largo de mi pagina
background: none ; //color de fondo
display: flex;  // utilizar las funciones de flex
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
position: relative;

${above.large`
    width: 15%;    // ancho de mi pagina    
    height: 100%;  
    justify-content: center;
    
  `}
`


export const SAnimacionHomeIzq = styled.div`
 /* Comentario en estilos */

width: 40%;    // ancho de mi pagina    
height: 100%;    // largo de mi pagina
background: none ; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;
border: 1px solid none;
position: absolute;
left: -10%;
bottom: 0%;
transform: scale(1.2);


${above.large`
    width: 90%;    // ancho de mi pagina    
    height: 40%; 
    position: static;
    transform: scale(1.3);
  `}
`

export const SRedes = styled.div`
display: none;  // se oculta

${above.large`
    width: 50%;    // ancho de mi pagina    
    height: 45%;    // largo de mi pagina
    background: none; //color de fondo
    display: flex;  // utilizar las funciones de flex
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a{
    margin: 5px 0px;
    }
  `}


`



/*+++ INICIA SECCION HEADER DERECHA+++*/

export const SHeaderDerecha = styled.div`
position: relative;

display: none;  // utilizar las funciones de flex

${above.large`
    width: 15%;    // ancho de mi pagina    
    height: 100%;    // largo de mi pagina
    background: none; //color de fondo
    display: flex;  // utilizar las funciones de flex
    justify-content: flex-end;
    align-items: flex-end;
  `}

`
export const SAnimacionHomeDer = styled.div`
    width: 90%;    // ancho de mi pagina    
    height: 30%;    // largo de mi pagina
    background: none ; //color de fondo
    display: flex;  // utilizar las funciones de flex
    justify-content: center;
    align-items: center;
    border: none;// utilizar las funciones de flex
    transform: scale(1.3);
    position: absolute;
    top: 77%;
    left: 25%;

    
`





/* -----------FIN SECCION HEADER ---------------- */

export const SAbout = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 50vh;    // largo de mi pagina
background: gray; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;

`


export const SPortafolio = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 100vh;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;

`


export const SServicios = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 100vh;    // largo de mi pagina
background: green; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;

`

export const STeam = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 100vh;    // largo de mi pagina
background: purple; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;

`

export const SFooter = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 60vh;    // largo de mi pagina
background: maroon; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;

`



