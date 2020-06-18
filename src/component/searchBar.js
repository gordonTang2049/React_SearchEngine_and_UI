import React, {
    useState,    
    useContext
} from 'react';

import  { useStyles } from './styles'

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import {SearchValContext} from './searchContext'

function SearchBar() {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState('')
    const {searchVal, setSearchVal} = useContext(SearchValContext)


    const handleChange = (e) => {
        const value = e.target.value
        setInputValue(value)
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        setSearchVal(inputValue)
        
    }

    // check Submit    ( category eq 'about-us' )    url:(about-us and careers)  // value={inputValue}

    return (
    <>
    <form onSubmit={handleSubmit}>

        <FormControl fullWidth className={classes.margin} variant="outlined" >

        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>

        <OutlinedInput
            id="outlined-adornment-amount"
            value={inputValue}
            onChange={handleChange}
            labelWidth={80}
        />

        <div className={classes.buttonRoot}> 
            <Button type="submit" variant="contained" color="primary">Search</Button>
        </div>

        </FormControl>
    </form>
   </>
    );
}

export default SearchBar;

