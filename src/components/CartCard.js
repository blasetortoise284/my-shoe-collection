import * as React from 'react';
import {Card, CardActions, CardContent, Typography, Button, Box} from '@mui/material';

const CartCard = (props) => {
    const name = props.name; 
    const prods = props.prods;
    const price = prods[name][1];
    const count = prods[name][0];
    const numPairs = 0;

    const IncNum = (num) => {
        num = num + 1;
        return (num);
    };

    const DecNum = (num) => {
        if (num + count > 0) {
            num = num - 1;
            return (num);
        } else {
            num = 0;
            return (num);
        }
    };

    return(
        <Card className="cartCard" variant="outlined">
              <CardContent>
                  <Typography gutterBottom variant="h7" component="div">
                      {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      ${price}.00
                  </Typography>
              </CardContent>
              <Box style={{margin: '0rem 10rem 0rem 0.5rem', display: 'flex', maxHeight: '2rem', textAlign: 'center'}} className="quantityChange">
                  <Button style={{minWidth: '2rem', border: '0.25rem 0rem 0rem 0rem'}} value="decrement" onClick={() => props.handlePairs(name, DecNum(numPairs))}>-</Button>
                  <p style={{margin: 'auto 1rem'}}>{numPairs + count}</p>
                  <Button style={{minWidth: '2rem'}} value="increment" onClick={() => props.handlePairs(name, IncNum(numPairs))}>+</Button>
              </Box>
              <CardActions>
                  <Button style={{fontSize: '0.6rem'}} onClick={() => props.removeShoe(name)} name={name}>Remove Shoe from Cart</Button>
              </CardActions>
          </Card>
    );
}

export default CartCard;