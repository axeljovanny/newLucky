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
export function AboutImg() {
    return <StaticImage
        src="https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={250}
        height={250}
    />

}
export function AboutImg2() {
    return <StaticImage
        src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={400}
    />

}
export function AboutImg3() {
    return <StaticImage
        src="https://images.pexels.com/photos/7795864/pexels-photo-7795864.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={300}
        height={200}
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


