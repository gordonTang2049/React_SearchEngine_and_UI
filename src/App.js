import React from 'react';

import {SearchContext} from './component/searchContext'
import SearchBar from './component/searchBar'
import ResultsContent from './component/resultsContent'
import DateFilter from './component/dateFilter'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  filterAndResultBlock: {
    display: 'inline-flex',
    margin: theme.spacing(1, 1, 0, 0),
  },
  resultblock :{
    display: 'flex',
    flexDirection: 'column'
  }
}));



function App() {
  const classes = useStyles()
  return (
      <>
        <SearchContext>
            <SearchBar />
          <div className={classes.filterAndResultBlock}> 
            <DateFilter />
            <div> 
            <ResultsContent  className={classes.resultblock} />
            </div> 
          </div> 
        </SearchContext>
      </>
  );
}

export default App;
