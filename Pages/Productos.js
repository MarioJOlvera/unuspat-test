import React from 'react'
import {Slideshow, Slide, TextoSlide} from '../Components/SlideComponent/Slideshow'
import '../../src/Components/ComponentsCSS/Styles.css'
import styled from 'styled-components'
import BotellaMezcal from '../assets/css/Media/Productos/Botella_Mezcal.png'
// import Producto1 from '../assets/css/Media/Productos/Producto1.jpeg' //
//import Producto2 from '../assets/css/Media/Productos/Producto2.jpeg' //


const Productos = () => {
    return (
        <main>
            <Titulo>Productos destacados</Titulo>
            <Slideshow controles={true}>
                <Slide>
                    <img src={BotellaMezcal} alt="" />
                    <TextoSlide>
                        <p>15% de Descuento</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <img src={BotellaMezcal} alt="" />
                    <TextoSlide>
                        <p>Segundo Descuento</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <img src={BotellaMezcal} alt="" />
                    <TextoSlide>
                        <p>Tercer Descuento</p>
                    </TextoSlide>
                </Slide>
            </Slideshow>
        </main>
    )
}

const Titulo = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px; 
`;


export default Productos 