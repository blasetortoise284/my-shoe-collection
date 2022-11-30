import * as React from 'react';
import CartCard from "./CartCard.js";
import {Box, Button} from "@mui/material";

const Cart = (props) => {
    const prods = props.prods;
    const total = props.total; 

    return (
    <div id="Cart">
        <Box style={{display: 'flex', justifyContent:'space-between'}}>
            <h2>Your Cart</h2>
            <Button sx={{ margin: '1rem 0rem 1rem 0rem', maxWidth: '1rem'}}  variant="contained" onClick={() => props.resetCart()}>
            Clear
            </Button>
        </Box>
        <Box>
            {Object.keys(prods).map((name) => (
             <CartCard name={name} handlePairs={props.handlePairs} prods={prods} removeShoe={props.removeShoe}/>
            ))}
        </Box>
        <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;