import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link as LinkRouter } from "react-router-dom"



export default function ActionAreaCard(props) {
    console.log(props);
    var textoParaBuscar = ""
    var textoSimple = ""
    var apiCiudad = []

    var ciudadesAMostrar = []

    apiCiudad.push(...props.Ciudades)
    /*     props.Ciudades.map(ciudad => apiCiudad.push(...ciudad)) */

    textoSimple = props.buscador.toLowerCase()
    textoParaBuscar = textoSimple.trim()
    console.log(textoParaBuscar);
    /*     const renderizar = [...apiCiudad.filter(ciudad => ciudad.nombre.substring(0, textoParaBuscar.length) == textoParaBuscar)]
             console.log(renderizar);
        const centinela = () => { if (renderizar.length == 0) { return [{ nombre: "aprende a escribir" }] } else { return (renderizar) } } */


    var resultado = apiCiudad.filter(api => api.name.toLowerCase().startsWith(textoParaBuscar.toLowerCase()))

    if (resultado == undefined) {
        ciudadesAMostrar.push(...apiCiudad)
    } else {
        ciudadesAMostrar.push(...resultado)
    }
    console.log(ciudadesAMostrar);

    return (
        ciudadesAMostrar.length > 0 ? (
            ciudadesAMostrar.map((resultado) => {
                /*       centinela.map((resultado) => { */
                return (
                    <div id='cartasPaises'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea><LinkRouter to={`detalle/${resultado._id}`}>
                                <CardMedia
                                    component="img"
                                    height={140}
                                    width={140}
                                    image={resultado.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {resultado.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {resultado.country}
                                    </Typography>

                                </CardContent></LinkRouter>
                            </CardActionArea>
                        </Card></div>)
            })
        ) :
            (
                <h2>No Found  :(</h2>
            )


    )

        ;
}