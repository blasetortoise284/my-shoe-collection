import {FormLabel, FormControl, Button, FormGroup, RadioGroup, Box} from "@mui/material";
import * as React from 'react';

const CustomBar = (props) => {
    // track state of everything. http://react.tips/checkboxes-in-react-16/
    return (
        <div id="Custom-bar">
            {/**feed reset display, createcheckoxescolors  */}
            <Box sx={{ width: '100%' }}>
                <Button 
                sx={{ margin: '1rem 1rem 0 1rem' }}
                variant="contained" 
                onClick={props.resetDisplay}>
                Reset all filters
                </Button>
            </Box>

            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel value="color" component="legend">Shoe Colors</FormLabel>
                    <FormGroup>
                        {props.createCheckboxesColors()}
                    </FormGroup>

                    <FormLabel className="formLabel" value="type" component="legend">Shoe Types</FormLabel>
                    <FormGroup>
                        {props.createCheckboxesTypes()}
                    </FormGroup>

                    <FormLabel className="formLabel" value="sort" component="legend">Sort By</FormLabel>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                      {props.createSortRadios()}
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>
    );
}

export default CustomBar;