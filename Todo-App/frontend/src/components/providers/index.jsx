import React from 'react'
import ReduxProvider from './ReduxProvider'
import { BrowserRouter } from 'react-router-dom'


export default function Providers({children}) {
  return (
    <BrowserRouter>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </BrowserRouter>
  )
}
