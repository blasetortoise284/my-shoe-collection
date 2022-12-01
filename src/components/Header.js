import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import * as React from 'react';

const Header = () => {
    return (
        <nav>
          <Box sx={{ flexGrow: 1}}>
            <AppBar elevation={0} style={{ background: 'linear-gradient(to bottom, #f2c5e0, #f5cee5, #f7d6ea, #fadfef, #fce7f4, #fce7f4, #fce7f4, #fce7f4, #fadfef, #f7d6ea, #f5cee5, #f2c5e0)'}}> 
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