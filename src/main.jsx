import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import './index.css'
import Themeals from './Firstweb/The_Meals'
import Cocktails from './Secondweb/Cocktails'
import Bankdetails from './Fourthweb/Bank_Details'
import Books_detail from './Thiredweb/Books_details'
import Aboutus from './Aboutus'
import Navbar from './Navbar'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
    <Route path='/' element={<Navbar/>}>
      <Route path='' element={<Aboutus/>}/>
      <Route path='meals' element={<Themeals/>}/>
      <Route path='cocktails' element={<Cocktails/>}/>
      <Route path='books' element={<Books_detail/>}/>
      <Route path='bankdetails' element={<Bankdetails/>}/>
    </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
