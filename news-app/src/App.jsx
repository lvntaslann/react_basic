import { useState } from 'react'
import './App.css'
import MyNavBar from './Components/MyNavBar'
import NewsBoard from './Components/NewsBoard'

function App() {
  const [category,setCategory]=useState("general");


  return (
    <>
      <MyNavBar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </>
  )
}

export default App
