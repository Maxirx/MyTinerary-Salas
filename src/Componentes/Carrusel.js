import React from 'react'
import Carousel from 'react-grid-carousel'
import ciudades from '../Datos'
/* import MyDot from './dots' */

const MyDot = ({ isActive }) => (ciudades.map(ciudades =>
    <span
        style={{
            display: 'inline-block',
            height: isActive ? '8px' : '5px #ccc',
            width: isActive ? '16px {ciudades.image}' : '5px #ccc',
            background: ciudades.image
        }}

    ></span>))

const MyLeftArrow = ({ isActive }) => (
    <span
        style={{
            height: isActive ? '100% #795548' : '5px #ccc',
            /*                 width: isActive ? '16px #795548' : '5px #ccc', */
        }}
    ></span>)

const Gallery = () => {

    return (
        <div className='gallery'>
            <Carousel cols={4} rows={1} gap={10} loop
                showDots={true}
                hideArrow={false}
                responsiveLayout={[
                    {
                        breakpoint: 1200,
                        cols: 3,
                    },
                    {
                        breakpoint: 900,
                        cols: 2,
                        rows: 1
                    },
                    {
                        breakpoint: 620,
                        cols: 1,
                        rows: 1
                    },
                    {
                        breakpoint: 620,
                        cols: 1,
                        rows: 1,
                        gap: 10
                    }
                ]}
                mobileBreakpoint={320}
                autoplay={3000}
            >
                {ciudades.map(ciudades =>
                    <Carousel.Item>
                        <img width={450} height={300} src={ciudades.image} />
                        <h3>{ciudades.name} - {ciudades.country}</h3>
                    </Carousel.Item>)}
                <Carousel dot={MyLeftArrow} />
                <Carousel dot={MyDot} />
            </Carousel>
        </div >
    )
}
/* function View() {
    return (
        ciudades.map(ciudades =>

            <Gallery image={ciudades.image} widht={150} height={150} />

        ))

} */

export default Gallery