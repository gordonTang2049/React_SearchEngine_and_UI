## Search Engine

### 23.6.2020 

     try to build a custom hook for search, to arrange the code be cleaner and easiler to follow

     potential bug: 

        1. After the entering the search value, at the same time, 
           not click the search button, but choose date and apply date filter instead,
           it may cause issues.
           
        2. After searching the one word(enter the value and finish to click the search button), 
           immediately, enter another word, but choose date and apply date filter instead. 
     
        3. After the search, search value would disappear on the input box
            => I knew what cause the issues, it is caused by render of loading component, 
               and rerender parent component, 
               to solve it, I would use CSS to cover the whole page with index 
            but I want to finish my custom hook finish

        4. When the same word being type in the search input box, rather have no visual effect,
           after pressing search button, it should have the loading effect, 
           even it won't fetch the same infor again.

     extra things wanna build:

        1. I believe our user would mainly corporate or government client,
           they would like to search for previous cases/project pdf/excel infor, 
           as reference of their current cases/project. 
           I would like to build a preview panel for those pdf/excel, 
           it allows us to preview before downloading the documents.

            

### 21.6.2020 Working Log

    DidYouMean has finished, but I haven't yet style it like clickable ahref link for  
    post request to the API. I will pronbably fix it after writing test case.

    - Successfully wrote my first react test case, test render SearchBar 


### 20.6.2020 Working Log

    After a day of testing and console.log, the Lifecycle problem have solved. 
    When the date get selected and submit it will fire the filtered search. 
    Unfortunately, the search query have some issues. It doesnt allow me to search 
    even I pass the whole date range string with double quote, I need to ask and understand 
    how it works. 

### 19.6.2020 Working Log
    Hi Guys, This is a search engine version 0. I am trying to build a search engine that connects to an API,
    it can filter by date and preview documents(extra feature wanted to provide), 
    such as pdf and excel on the web portal.
    it should also include did you mean, when your search keyword doesnot make sense to the API.
    Pagination shall also be provided due to below issues.
    Test case shall also be testing the return correct values of dateFn's functions.

# issues
    I stuck in the inter component state, when I choose and submit apply date filter,
    it suppose to change the dateRange state in searchContext, I am still investigating the issues.
    In addition, search input box does not prevent default behaviour, so that the search keyword 
    would disappear you press search, I am also looking for the solution. I suspect it is 
    due to re-render the searchBar item.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
