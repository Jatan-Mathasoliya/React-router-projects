import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import './index.css'
import Themeals from './Firstweb/The_Meals'
import Cocktails from './Secondweb/Cocktails'
import Bankdetails from './Fourthweb/Bank_Details'

import Aboutus from './Aboutus'
import Fullrecipe from './Firstweb/Fullrecipe'
import CategoryPage from './Firstweb/CategoryPage'
import Cocktail_details from './Secondweb/Cocktail_details'
import Navbar from './Navbar'
import Layout from './Thiredweb/Layout'
import Potter_books from './Thiredweb/Potter_books'
import Potter_char from './Thiredweb/Potter_char'
import Potter_houses from './Thiredweb/Potter_houses'
import Potter_spells from './Thiredweb/Potter_spells'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path='/' element={<Navbar />}>
        <Route path='' element={<Aboutus />} />
        <Route path='meals' element={<Themeals />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path='/:category/:name' element={<Fullrecipe />} />
        <Route path='/:category' element={<Cocktails />} />
        <Route path="/Cocktails/:name" element={<Cocktail_details />} />
        <Route path="harry_potter/:language" element={<Layout />}>
          <Route path="books" element={<Potter_books />} />
          <Route path="characters" element={<Potter_char />} />
          <Route path="houses" element={<Potter_houses />} />
          <Route path="spells" element={<Potter_spells />} />
        </Route>
        <Route path='bankdetails' element={<Bankdetails />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
