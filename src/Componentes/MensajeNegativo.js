import "./barra.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link as LinkRouter } from "react-router-dom";


const MensajeNegativo = () => {
    return (
        <div>
            <h3>So Sorry!</h3>
            <h4>There are no itineraries for this city yet :(</h4>
            <img src={'https://static.vecteezy.com/system/resources/previews/004/595/728/non_2x/backpacker-guy-standing-front-road-sign-board-in-street-confusing-choose-way-tourist-travel-guide-symbol-set-concept-in-cartoon-illustration-on-white-background-vector.jpg'} alt="bags lost" className="imagenPerdida" />
            <Stack spacing={5} direction="row">

                <LinkRouter to={"/cities"}><Button variant="contained">Go to Back</Button></LinkRouter>
                <LinkRouter to={"/volva"}><Button variant="contained">Go to Home</Button></LinkRouter>
            </Stack>
        </div>
    )
}

export default MensajeNegativo