import React from "react"
//import { Image } from "./"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/css/images.css"





//TODO: Poner bien las descripciones de los ALT en cada imagen

export function LogoPrincipal() {
    return <StaticImage
        src="../images/logos/logo.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
    />

}
export function ImgAntonio() {
    return <StaticImage
        src="../images/AntonioPeñaWeb.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        formats={['auto', 'webp']}
        className="imgAntonio"
    />

}
export function ImgAntonioMovil() {
    return <StaticImage
        src="../images/AntonioPeñaMovil.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        maxWidth={1300}
    />

}
export function ImgFogon() {
    return <StaticImage
        src="../images/FogonWeb.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        formats={['auto', 'webp']}
        className="imgFogon"
    />

}
export function ImgFogonMovil() {
    return <StaticImage
        src="../images/FogonMovil.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        maxWidth={1300}

    />

}
export function ImgJesus() {
    return <StaticImage
        src="../images/ImagenesWebJMWebAzul.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        formats={['auto', 'webp']}
        className="imgJesus"
    />

}
export function ImgFooter() {
    return <StaticImage
        src="../images/footer.jpg"
        alt="lucky ducky studio art"
        formats={['auto', 'webp']}
        className="imgFooter"
    />

}
export function ImgFooterMovil() {
    return <StaticImage
        src="../images/footer.jpg"
        alt="lucky ducky studio art"
        formats={['auto', 'webp']}
        className="imgFooter"

    />

}


