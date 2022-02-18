import React from 'react'
import Carousel from 'react-grid-carousel'
import ciudades from '../Datos'
/* import MyDot from './dots' */

const MyDot = ({ isActive }) => (
    <span
        style={{
            display: 'inline-block',
            height: isActive ? '8px' : '5px',
            width: isActive ? '8px' : '5px',
            background: '#1890ff'
        }}
    >...</span>)

const Gallery = () => {

    return (
        <div className='gallery'>
            <Carousel cols={2} rows={2} gap={10} loop
                responsiveLayout={[
                    {
                        breakpoint: 1200,
                        cols: 3,

                    },
                    {
                        breakpoint: 900,
                        cols: 2,
                    },
                    {
                        breakpoint: 620,
                        cols: 1,
                        rows: 2
                    }
                ]}
                mobileBreakpoint={320}
                autoplay={3000}
            >
                {ciudades.map(ciudades =>
                    <Carousel.Item>
                        <img width={700} height={500} src={ciudades.image} />
                        <p>{ciudades.name} - {ciudades.country}</p>
                    </Carousel.Item>)}
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