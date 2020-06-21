import React, {
       useMemo,
       useState,
       useEffect,
       createContext
} from 'react'
import { makeStyles } from '@material-ui/core/styles';
const axios = require('axios')


export const SearchValContext = createContext(null)
export const ResultContext = createContext(null)
export const DateRangeContext = createContext(null)
export const didYouMeanContext = createContext(null)

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


    const [searchResult, setSearchResult] = useState(null);
     
    const [isLoading, setIsLoading] = useState(false)

    const [dateRange, setDateRange] = useState(null);
    const dateRangeProvider = useMemo(()=> ({dateRange, setDateRange}), [dateRange, setDateRange])

    const [didYouMean, setDidYouMean] = useState(null);
    const didYouMeanProvider = useMemo(()=> ({dateRange, setDateRange}), [dateRange, setDateRange])

    
// General search operator 
useEffect(()=>{

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
        console.log('===========================================')
        console.log('dateRange && searchVal are true')        
        console.log('===========================================')
        console.log(typeof dateRange)
        console.log(dateRange)
        console.log(searchVal)
        console.log('===========================================')
        SearchWithDateRangeOperator(searchVal, dateRange)

    }else if(searchVal){
        console.log('===========================================')
        console.log('searchVal is true')


        
        SearchOperator(searchVal) 
    }

    console.log('parent mount')
    console.log('Parent searchVal is' + searchVal)
    console.log('Parent dateRange is' + dateRange)
    

    return () => {
        console.log('parent unmount')
        console.log('Parent searchVal is' + searchVal)
        console.log('Parent dateRange is' + dateRange)
    }

},[searchVal, dateRange]) 
    

    if(isLoading){
        return <h1>Loading...</h1>
    } 

// ========================================================================================================

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
                        <didYouMeanContext.Provider
                            value={didYouMeanProvider}
                        >
                      <div>
                        {children}
                      </div>  
                      </didYouMeanContext.Provider>                        
                    </ResultContext.Provider>
                </SearchValContext.Provider>   
            </DateRangeContext.Provider>

    )
}


