import React, {
       useMemo,
       useState,
       useEffect,
       createContext
} from 'react'
const axios = require('axios')


export const SearchValContext = createContext(null)
export const ResultContext = createContext(null)
export const DateRangeContext = createContext(null)
export const IsDateFitlerAppliedContext = createContext(null)
// export const isSearchContext = createContext(null)
// I should have worked out a loading in here



export const SearchContext = ({children}) =>{

    // search Value
    const [searchVal, setSearchVal] = useState(null);
    const searchValProvider = useMemo(()=> ({searchVal, setSearchVal}), [searchVal, setSearchVal]) 


    const [searchResult, setSearchResult] = useState(null);
     
    const [isLoading, setIsLoading] = useState(false)

    const [dateRange, setDateRange] = useState(null);
    const dateRangeProvider = useMemo(()=> ({dateRange, setDateRange}), [dateRange, setDateRange])

    const [isDateFitlerApplied, setIsDateFitlerApplied] = useState(false);
    const isDateFitlerAppliedProvider = useMemo(()=> ({isDateFitlerApplied, setIsDateFitlerApplied}), [isDateFitlerApplied, setIsDateFitlerApplied]) 

    
// General search operator 
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
        }
    }

    const SearchWithDateOperator = async (val, date) => {

        setIsLoading(true)
        try{
    
            const resp = await axios.post('https://ds365api.search365.ai/search', {
                "filterData": `"${date}"`,
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
        }
    }


// ========================================================================================================
// Warning message for entering search value

    useEffect(()=>{

        if(isDateFitlerApplied && dateRange && searchVal){
            console.log(`${searchVal}`)
            console.log(`${dateRange}`)
            console.log(`${isDateFitlerApplied}`)

            SearchWithDateOperator(searchVal, dateRange)
            setIsDateFitlerApplied(false)
        }else if(searchVal){
            console.log(`${searchVal}`)
            console.log(`${dateRange}`)
            console.log(`${isDateFitlerApplied}`)
            SearchOperator(searchVal)
        }
        
        



    },[searchVal, dateRange, isDateFitlerApplied])

// ===================================================================================================

    // Search with date Filter
    // useEffect(()=>{

    //     const SearchWithDateFilterOperator = async (val, date) => {

    //         setIsLoading(true)
    //         try{
        
    //             const resp = await axios.post('https://ds365api.search365.ai/search', {
    //                 "filterData": "",
    //                 "page": "",
    //                 "pageSize": "10",
    //                 "sort": "modified",
    //                 "didYouMean": "",
    //                 "advancedQuery": "",
    //                 "profile": "all",
    //                 "query": `"${val}"`
    //             })  
            
    //             const dataBody = resp.data.body

    //             console.log(dataBody)

    //             setSearchResult(dataBody)
                
        
    //         }catch(error){
    
    //             console.log(error);
            
    //         }finally{
    //             setIsLoading(false)
    //         }
    //     }

    //      console.log(searchVal)
    //      console.log(dateRange)
        
    //     if(searchVal && isDateFitlerApplied){
            

    //         // SearchWithDateFilterOperator(searchVal, dateRange)
            
    //         setIsDateFitlerApplied(false)
    //     }


    // },[searchVal, ])


    // Loading Image
    if(isLoading){
        return <h1>Loading...</h1>
    } 

// ========================================================================================================

    return (
        
    <DateRangeContext.Provider
       value={dateRangeProvider}
    >
        <IsDateFitlerAppliedContext.Provider
            value={isDateFitlerAppliedProvider}
        >
            <SearchValContext.Provider
                value={searchValProvider}
            >
                <ResultContext.Provider
                    value={searchResult}
                >
                    {children}
                </ResultContext.Provider>
            </SearchValContext.Provider>
        </IsDateFitlerAppliedContext.Provider>
    </DateRangeContext.Provider>

    )
}
