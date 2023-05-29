import styled from "styled-components"

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
background:  none; /* color de fondo*/
`





 /* -----------INICIO SECCION HEADER ---------------- */

export const SHeader = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina  
height: 100vh;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex
justify-content: center; // centrar contenido
align-items: center; // alinear el contenido
flex-flow: row wrap; // utilizar filas y columnas y saltar de linea si no cabe 
`





/*+++ INICIA SECCION NAV +++*/

export const SNav= styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina  
height: 20%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex
justify-content: flex-end;
align-items: center;
`

export const SLogo= styled.div`
 /* Comentario en estilos */

width: 70%;    // ancho de mi pagina  
height: 100%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex
justify-content:center;
align-items:center ;
flex-direction: row;
`

export const SIdioma= styled.div`
 /* Comentario en estilos */

width: 15%;    // ancho de mi pagina  
height: 100%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex
padding: 2%;
justify-content:center;
align-items:center ;
flex-direction: row;
`





/*+++ INICIA SECCION BANER +++*/

export const SContenido = styled.div`
 /* Comentario en estilos */

 width: 100%;    // ancho de mi pagina  
height: 80%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex: ;
flex-wrap: wrap;
justify-content: space-around;
align-items:center;
`
export const SInicioYCervicios= styled.div`
 /* Comentario en estilos */

 width: 70%;    // ancho de mi pagina  
height: 100%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex: ;
flex-wrap: wrap;
justify-content: center;
align-items:center;
`

export const STextoInicio  =styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 75%;    // largo de mi pagina
background: red; //color de fondo
display: flex;  // utilizar las funciones de flex
flex-direction:column;
justify-content:center;
align-items: center;
text-align: center;

`

export const SAnimacionCentral  =styled.div`
 /* Comentario en estilos */

width: 25%;    // ancho de mi pagina    
height: 28%;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;
border: 1px solid #C00;
`

export const SAnimacionTextoInicio  =styled.div`
 /* Comentario en estilos */

width: 50%;    // ancho de mi pagina    
height: 50%;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
flex-wrap: wrap;
justify-content: right;
align-items: start;
border: 1px solid #C00;
`

export const STextoServiciosHome  =styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 25%;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
flex-wrap: wrap;
justify-content: center;
align-items: center;
`



/*+++ INICIA SECCION HEADER IZQUIERDA+++*/

export const SHeaderIzquierda = styled.div`
 /* Comentario en estilos */

width: 15%;    // ancho de mi pagina    
height: 100%;    // largo de mi pagina
background: none ; //color de fondo
display: flex;  // utilizar las funciones de flex
flex-wrap: wrap;
justify-content: center;
align-items: center;
`


export const SAnimacionHomeIzq = styled.div`
 /* Comentario en estilos */

width: 90%;    // ancho de mi pagina    
height: 35%;    // largo de mi pagina
background: none ; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;
border: 1px solid #C00;
`
export const SRedes = styled.div`
 /* Comentario en estilos */

width: 50%;    // ancho de mi pagina    
height: 45%;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;
flex-direction: column;
`



/*+++ INICIA SECCION HEADER DERECHA+++*/

export const SHeaderDerecha = styled.div`
 /* Comentario en estilos */

width: 15%;    // ancho de mi pagina    
height: 100%;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: flex-end;
align-items: flex-end;
`
export const SAnimacionHomeDer = styled.div`
 /* Comentario en estilos */

width: 90%;    // ancho de mi pagina    
height: 30%;    // largo de mi pagina
background: none ; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;
border: 1px solid #C00;
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
background: yellow; //color de fondo
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



