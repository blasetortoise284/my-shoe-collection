import {Card, CardActions, CardContent, CardMedia, Typography, Button, Box} from '@mui/material';
import React from 'react';

const ShoeCard = (props) => {
    const {name, color, type, price, image} = props.shoe;
    const index = props.index;
    return(
        <Card className="shoeCard" variant="outlined" sx={{ maxWidth: '30rem', paddingBottom: '1rem'}}>
            <CardMedia component='img' image={image} alt={name}/>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Color(s): {color.join(', ')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Type: {type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: ${price}.00
                        </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{margin: '1rem 0 0 0.5rem'}} variant="contained" size="small" onClick={() => props.updateCart(index)}>Add to Cart</Button>
                </CardActions>
            </Box>
        </Card>
    );
}

export default ShoeCard;