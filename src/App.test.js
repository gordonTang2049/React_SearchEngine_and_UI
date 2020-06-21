import React from 'react';
// react testing library
import { 
  render,
  fireEvent,
  cleanup,
  waitForElement
} from '@testing-library/react';
import App from './App';
import SearchBar from './component/searchBar'
import {SearchContext} from './component/searchContext'
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
