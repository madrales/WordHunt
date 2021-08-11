import React from 'react';
import './Header.css';
import category from '../../data/category';
import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';

const Header = () => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
          type: 'dark',
        },
    });

    return (
        <div className="header">
            <span className="title">Word Hunt</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                   <TextField id="standard-basic" label="Standard" />
                   <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        helperText="Please select your currency"
                        >
                            {category.map((option) => (
                                <MenuItem>{option.value}</MenuItem>
                            ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Header;