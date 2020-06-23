import React from 'react';
// react testing library
import { 
  render,
  fireEvent,
  cleanup,
  waitForElement,
  waitForDomChange
} from '@testing-library/react';
import App from './App';
import SearchBar from './component/searchBar'
import {SearchContext} from './component/searchContext'

afterEach(cleanup)
// look at the doc 
// React testing Library => example


// watch what is <ApolloMockedProvider></ApolloMockedProvider>
// mock Apollo Request => for grapQL


// describe General test case name
// describe("", ()=>{
//   // More specific name for test 
//   test("is Searchbar submit working",()=>{

//   })

//   // it => test the same
//   it("",()=>{

//   })
// })


test('Render Search Bar', () => {

  const {debug} = render(
    <SearchContext>
      <SearchBar />
    </SearchContext>
  )

  debug()
});

// test whether placeholder is the string of ...

// async
// test('test placeHolder string name is?', async () => {

//   // you can get more to test
//   const {getAllByPlaceholderText, getAllByDisplayValue, getAllByText ,debug} = render(
//     <SearchContext>
//       <SearchBar />
//     </SearchContext>
//   )


//   const searchBarInput = getAllByPlaceholderText('xyz')

//   // react would fire the event and test is that work 
//   // const inputBox = getTestId("xyz")
//   // fireEvent.click(inputBox)

//   // It will await when clicks a button, and then dom change
//     await waitForDomChange()

//     getByText('required')
//   // debug to see what is like 
//   // debug()
// });


// // When you want to fill up form 

// test('test placeHolder string name is?', async () => {

//   // test fill up form
//   const {getAllByPlaceholderText, getAllByDisplayValue, getAllByText ,debug} = render(
//     <SearchContext>
//       <SearchBar />// you can get more to test
//     </SearchContext>
//   )
//   await waitForDomChange()

//   getByText('required')
    
//   // when you fill up the input value
//   fireEvent.change(todoInput, {target: {value : 'go to store'}})

//   // and then submit a form 
//   fireEvent.click(submitButton)


//   // When you type the text, 
//   //  wait for the element to show up
//   await waitForElement(()=>getAllByText('go to store'))

// });

