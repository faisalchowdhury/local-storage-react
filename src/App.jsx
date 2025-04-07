import './App.css'
import {ErrorBoundary} from 'react-error-boundary';
import { Suspense, useState } from 'react';
import Bottles from './Bottles/Bottles'

function App() {
 
  const fetchBottles = fetch('./bottle.json').then(res => res.json()) 


  return (
    <>
     <h2>Products</h2>
     <ErrorBoundary fallback={<h2>Server Error  </h2>}>
      <Suspense fallback={<h2> Loading..... </h2>}>
         <Bottles fetchBottles={fetchBottles}></Bottles>
      </Suspense>
     </ErrorBoundary>
    </>
  )
}

export default App
