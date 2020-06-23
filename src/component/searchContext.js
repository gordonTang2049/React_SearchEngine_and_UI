import React, {
       useMemo,
       useState,
       useEffect,
       createContext,
       useRef
} from 'react'
import Paper from '@material-ui/core/Paper';
import {useSearch} from '../hooksAndFn/useSearch'
import { makeStyles } from '@material-ui/core/styles';

const axios = require('axios')


export const SearchValContext = createContext(null)
export const ResultContext = createContext(null)
export const DateRangeContext = createContext(null)


// export const isSearchContext = createContext(null)
// I should have worked out a loading in here

const useStyles = makeStyles((theme) => ({
    loadingScreen :{

    }
  }));


export const SearchContext = ({children}) =>{
    const classes = useStyles();
    // search Value
    const [searchVal, setSearchVal] = useState(null);
    const searchValProvider = useMemo(()=> ({searchVal, setSearchVal}), [searchVal, setSearchVal]) 

//=========Search Result================================= 
    const [searchResult, setSearchResult] = useState(null);
//=========Search Result=================================
     
    const [isLoading, setIsLoading] = useState(false)

    const [dateRange, setDateRange] = useState(null);
    const dateRangeProvider = useMemo(()=> ({dateRange, setDateRange}), [dateRange, setDateRange])

// ===================================================
    // const {searchResult, loading} = useSearch(searchVal, {searchResult : null, loading : true})
    // console.log(searchResult)   
    // const searchResultRef = useRef(searchResult)
// ======================================================
    // useEffect(()=>{
    //     console.log('=================')
    //     console.log('parent mounted '+searchResult )
    //     console.log('=================')
    //     return ()=>{
    //         console.log('=================')
    //         console.log('parent unmounted '+searchResult )
    //         console.log('=================')
    //     }
    // })

    



// General search operator 
// =================================================================================================47 - 135
useEffect(()=>{
    console.log(isLoading)

    const SearchOperator = async (val) => {

        setIsLoading(true)
        try{
    
            const resp = await axios.post('https://ds365api.search365.ai/search', {
                "filterData": "",
                "page": "",
                "pageSize": "10",
                "sort": "modified",
                "didYouMean": "",
                "advancedQuery": "",
                "profile": "all",
                "query": `"${val}"`
            })  
        
            const dataBody = resp.data.body

            console.log(dataBody)

            setSearchResult(dataBody)
            
            
        }catch(error){

            console.log(error);

        }finally{
            setIsLoading(false)

            // setSearchVal(null)
            // setDateRange(null)
        }
    }


    const SearchWithDateRangeOperator = async (val, date) => {

        setIsLoading(true)

        try{
            console.log(date)
            // issues with the query 
            // even I was putting double in the string filter but it does not work
            // However I can't place a variable between double quote what should I do?
            const resp = await axios.post('https://ds365api.search365.ai/search', {
                "filterData": "",
                "page": "",
                "pageSize": "10",
                "sort": "modified",
                "didYouMean": "",
                "advancedQuery": "",
                "profile": "all",
                "query": `"${val}"`
            })  
        
            const dataBody = resp.data.body

            console.log(dataBody)

            setSearchResult(dataBody)
            
    
        }catch(error){

            console.log(error);

        }finally{
            setIsLoading(false)

            // setSearchVal(null)
            // setDateRange(null)
        }
    }

    if(dateRange && searchVal){

        SearchWithDateRangeOperator(searchVal, dateRange)

    }else if(searchVal){
        
        SearchOperator(searchVal) 
    }

},[searchVal, dateRange]) 
// ========================================================================================================


    // if(isLoading){
    //     return <h1>Loading...</h1>
    // } 


    return (
        
            <DateRangeContext.Provider
                value={dateRangeProvider}
            >
                <SearchValContext.Provider
                    value={searchValProvider}
                >
                    <ResultContext.Provider
                        
                        value={searchResult}
                    >
                      <div >
                        {children}
                      </div>  
                       
                      <Paper  elevation={9} square={false}  style={ isLoading ? {
                        position:'absolute',
                        width: '100%',
                        height: '100%',
                        background: '#1a1a24',
                        top:'0',
                        left:'0',
                        bottom:'0',
                        right:'0',
                        zIndex: '10000000',
                        

                        } : {

                        display:'none'

                        }}> 
                        
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: 'column',
                                justifyContent: 'spaceAround',
                                alignItems: 'center'
                            }}>
                                    
                                    <img src="https://media.giphy.com/media/11ASZtb7vdJagM/giphy.gif" style={{
                                                height: "150px",
                                                width: "10rem"
                                    }}/>
                                    
                                    <img src="https://media.giphy.com/media/26xBsIMM0dcRKbXQk/giphy.gif" style={{
                                        
                                    }}/>

                            </div>
                       </Paper> 
                    </ResultContext.Provider>
                </SearchValContext.Provider>   
            </DateRangeContext.Provider>

    )
}


