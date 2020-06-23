import React, {
    useContext,
    useEffect
} from 'react';
import  { useStyles } from './styles'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import {ResultContext} from './searchContext'

export default function ResultContent(){

    const classes = useStyles();
    const searchResult = useContext(ResultContext)


    return (
        <>
            {searchResult
                ? (
                    // it should be a component that would passing props
                    searchResult.results.map((result, key)=>{
                      
                    const title = result.title
                    const lastModifiedDate = result.lastModified.split("T")[0]
                    const content = result.body.replace(/<b>|<\/b>/g,'')
                    const url = result.url

                    return (
                    <div className={classes.paperRoot} key={key}>
                        <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                            {/* ===================== */}
                            <Avatar
                            className={classes.avaYellow}
                            >
                                {title.charAt(0)}
                            </Avatar>
                            {/* ==================== */}
                            </Grid>
                            <Grid item xs>
                            <Typography 
                                className={classes.searchContentBody}
                            >
                                <a href={url}   className={classes.searchContentLInk}>{title}</a>
                            </Typography>

                            <Typography 
                                className={classes.searchContentBody}
                            >
                                {content}
                            </Typography>

                            <Typography 
                                className={classes.searchContentBody}
                            >
                                Last Modified date : {lastModifiedDate}
                            </Typography>

                            </Grid>
                        </Grid>
                        </Paper>              
                    </div>
                    )
                })
                ) 
                : (
                <h5> No search has been initialised</h5>
                )
            }
    </>
    )

}


