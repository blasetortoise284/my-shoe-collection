import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import * as React from 'react';

const Header = () => {
    return (
        <nav>
          <Box sx={{ flexGrow: 1}}>
            <AppBar elevation={0} style={{ background: 'linear-gradient(to bottom, #a2ceff, #acd3ff, #b5d8ff, #bfddff, #c8e2ff, #c8e2ff, #c8e2ff, #c8e2ff, #bfddff, #b5d8ff, #acd3ff, #a2ceff)'}}> 
            <Toolbar>
              <Typography style={{color: '#121213'}}variant="h6" component="div" sx={{ flexGrow: 1}}>
                ✰  if my shoe closet was a store…
                </Typography>
            </Toolbar>
            </AppBar>
          </Box>
        </nav>
    );
}

export default Header; 