import React, {
    useState,    
    useContext,
    useReducer
} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import {
  DateRangeContext,
  IsDateFitlerAppliedContext
} from './searchContext'

import {
  todayDate,
  oneYearAgoDate,
  threeMonthsAgoDate,
  twoMonthsAgoDate,
  oneMonthAgoDate,
  oneWeekAgoDate,
  oneDayAgoDate
} from './dateFn' 

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));


function dateFilterReducer(state, action){
  
  switch(action.type){
    case "all":
        return{
          dateRange : "",
          isDateFilterSubmitted : true
        }
    case "ThisYear":
        return{
          dateRange : `( modified le ${todayDate()}T00:00:00.0000000+00:00 ) and ( modified ge ${oneYearAgoDate()}T00:00:00.0000000+00:00 )`,
          isDateFilterSubmitted : true
        }
    case "90":
        return{
          dateRange : `( modified le ${todayDate()}T00:00:00.0000000+00:00 ) and ( modified ge ${threeMonthsAgoDate()}T00:00:00.0000000+00:00 )`,
          isDateFilterSubmitted : true
        }
    case "60":
        return{
          dateRange : `( modified le ${todayDate()}T00:00:00.0000000+00:00 ) and ( modified ge ${twoMonthsAgoDate()}T00:00:00.0000000+00:00 )`,
          isDateFilterSubmitted : true
        }
    case "30":
        return{
          dateRange : `( modified le ${todayDate()}T00:00:00.0000000+00:00 ) and ( modified ge ${oneMonthAgoDate()}T00:00:00.0000000+00:00 )`,
          isDateFilterSubmitted : true
        }
    case "7":
        return{
          dateRange : `( modified le ${todayDate()}T00:00:00.0000000+00:00 ) and ( modified ge ${oneWeekAgoDate()}T00:00:00.0000000+00:00 )`,
          isDateFilterSubmitted : true
        }
    case "1":
        return{
          dateRange : `( modified le ${todayDate()}T00:00:00.0000000+00:00 ) and ( modified ge ${oneDayAgoDate()}T00:00:00.0000000+00:00 )`,
          isDateFilterSubmitted : true
        }
    default:
        return state
  }
    
}


export default function DateFilter() {

  const {setDateRange} = useContext(DateRangeContext)
  const {setIsDateFitlerApplied} = useContext(IsDateFitlerAppliedContext)

  const [{dateRange, isDateFilterSubmitted}, dispatch] = useReducer(dateFilterReducer, {
    dateRange : "",
    isDateFilterSubmitted : false
  })

  
  const classes = useStyles();

  const [selectedVal, setSelectedVal] = useState('');
  
  // const [error, setError] = useState(false);
  // const [helperText, setHelperText] = useState('Choose wisely');


  const handleRadioChange = (event) => {
    
    const val = event.target.value
    setSelectedVal(val)

    return () => {

      dispatch({type : selectedVal})
    }
    
  };



  const handleSubmit = (event) => {
    
    event.preventDefault();

    console.log(dateRange)

    setDateRange(dateRange)
    setIsDateFitlerApplied(isDateFilterSubmitted)
      
    
  };

// what is component="legend"
// Add search count next to LAST MODIFIED DATE

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" className={classes.formControl}>

        <FormLabel component="legend">LAST MODIFIED DATE </FormLabel>

        <RadioGroup aria-label="dateFilter" name="dateFilter"  value={selectedVal} onChange={handleRadioChange}>
            
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="ThisYear" control={<Radio />} label="This Year" />
          <FormControlLabel value="90" control={<Radio />} label="Last 90 Days" />
          <FormControlLabel value="60" control={<Radio />} label="Last 60 Days" />
          <FormControlLabel value="30" control={<Radio />} label="Last 30 Days" />
          <FormControlLabel value="7" control={<Radio />} label="This Week" />
          <FormControlLabel value="1" control={<Radio />} label="Today" />

        </RadioGroup>

        {/* <FormHelperText>{helperText}</FormHelperText> */}

        <Button 
            type="submit" 
            variant="outlined" 
            color="primary" 
            className={classes.button}
        >
          Apply Filter
        </Button>

      </FormControl>
    </form>
  );
}


 // if (value === 'best') {
    //   setHelperText('You got it!');
    //   setError(false);
    // } else if (value === 'worst') {

    //   setHelperText('Sorry, wrong answer!');
    //   setError(true);

    // } else {

    //   setHelperText('Please select an option.');
    //   setError(true);

    // }