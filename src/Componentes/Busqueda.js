import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



class DerivedState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Adrian"
        };
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props.name)
        if (props.name !== state.name) {
            //Change in props
            return {
                name: props.name
            };
        }
        return null; // No change to state
    }
    /* if props changes then after getDerivedStateFromProps
       method, state will look something like 
  
    {
        name: props.name
    }
    */
    render() {
        return (props.name.map(props => (
            <Card sx={{ maxWidth: 345 }} key={props}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            hola
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>))
        )
    }
}

export default DerivedState;