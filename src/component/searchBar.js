import React, {
    useState,    
    useContext,
    useRef,
    useEffect
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
    const { setSearchVal} = useContext(SearchValContext)
    const inputRef = useRef()

    const handleChange = (e) => {

        const value = e.target.value

        setInputValue(value)

        console.log('Onchange is ' +inputValue)
        // console.log(inputValRef.current.value)
         
    }

    const handleSubmit = (e) => {

        console.log('input val is '+inputValue)
        e.preventDefault()
        setSearchVal(inputValue)
        inputRef.current = inputValue
        console.log('inputRef current '+inputRef.current)

    }

    useEffect(()=>{
        console.log('=====================================================================')
        console.log('SearchBar mount ')
        console.log('SearchBar mount inputVal' + inputValue)

        return ()=>{console.log('searchBar unmount ')}

    },[])
    // check Submit    ( category eq 'about-us' )    url:(about-us and careers)  // value={inputValue}

    return (
    <>
    <form onSubmit={handleSubmit}>

        <FormControl fullWidth className={classes.margin} variant="outlined" >

        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>

        <OutlinedInput
            ref={inputRef}
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

