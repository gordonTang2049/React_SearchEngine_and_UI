// test all those function 
//  I may need to rebase it to 00 00 00 time 

export const todayDate = () => {

    const now = Date.now()
    
    const dateNow = new Date(now); 

    const year = dateNow.getFullYear()
    const month = dateNow.getMonth() + 1
    const date = dateNow.getDate()

    return `${year}-${month}-${date}`
  }


export const oneYearAgoDate = () => {
    
    const now = Date.now()
    const oneYearAgoMiliSec = now - 31556952000
    const oneYearAgoDateObj = new Date(oneYearAgoMiliSec); 

    const year = oneYearAgoDateObj.getFullYear()
    const month = oneYearAgoDateObj.getMonth() + 1
    const date = oneYearAgoDateObj.getDate()

    return `${year}-${month}-${date}`
}

export const threeMonthsAgoDate = () => {

    const now = Date.now()
    const threeMonthsAgoMiliSec = now - (2592000000 * 3)
    const threeMonthsAgoDateObj = new Date(threeMonthsAgoMiliSec); 

    const year = threeMonthsAgoDateObj.getFullYear()
    const month = threeMonthsAgoDateObj.getMonth() + 1
    const date = threeMonthsAgoDateObj.getDate()

    return `${year}-${month}-${date}`
}

export const twoMonthsAgoDate = () => {

    const now = Date.now()
    const twoMonthsAgoMiliSec = now - (2592000000 * 2)
    const twoMonthsAgoDateObj = new Date(twoMonthsAgoMiliSec); 

    const year = twoMonthsAgoDateObj.getFullYear()
    const month = twoMonthsAgoDateObj.getMonth() + 1
    const date = twoMonthsAgoDateObj.getDate()

    return `${year}-${month}-${date}`


}

export const oneMonthAgoDate = () => {

    const now = Date.now()
    const oneMonthAgoMiliSec = now - 2592000000
    const oneMonthAgoDateObj = new Date(oneMonthAgoMiliSec); 

    const year = oneMonthAgoDateObj.getFullYear()
    const month = oneMonthAgoDateObj.getMonth() + 1
    const date = oneMonthAgoDateObj.getDate()

    return `${year}-${month}-${date}`
}

 
export const oneWeekAgoDate = () => {

    const now = Date.now()
    const oneWeekDateAgoMiliSec = now - (86400000 * 7)
    const oneWeekAgoDateObj = new Date(oneWeekDateAgoMiliSec); 

    const year = oneWeekAgoDateObj.getFullYear()
    const month = oneWeekAgoDateObj.getMonth() + 1
    const date = oneWeekAgoDateObj.getDate()

    return `${year}-${month}-${date}`
}

export const oneDayAgoDate = () => {

    const now = Date.now()
    const oneDayAgoDateMiliSec = now - 86400000
    const oneDayAgoDateObj = new Date(oneDayAgoDateMiliSec); 

    const year = oneDayAgoDateObj.getFullYear()
    const month = oneDayAgoDateObj.getMonth() + 1
    const date = oneDayAgoDateObj.getDate()

    return `${year}-${month}-${date}`
}



