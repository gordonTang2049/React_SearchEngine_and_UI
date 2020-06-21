import React, {
    useContext,
    useEffect
} from 'react';
import  { useStyles } from './styles'

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import {ResultContext} from './searchContext'

export default function DidYouMean(){

    const classes = useStyles();
    const searchResult = useContext(ResultContext)

    useEffect(()=>{
        console.log('result mount')
        
        return ()=>{console.log('result unmount')}
    })
    
    
    return (
        <>
            {searchResult && searchResult.didYouMean[0] !== searchResult.searchDefinition.query.replace(/"/g,'')
                ?  
                    (                   
                    <Typography variant="body1">
                       Did you mean: {searchResult.didYouMean[0]}           
                    </Typography>            
                    ) 
                : 
                    (
                      <></>
                    )
            }
    </>
    )

}


