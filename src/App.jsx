import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [img, setImg] = useState(null)
  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?name=trunks', {mode: 'cors'}).then(function(response) {
      console.log(response.json)
      return response.json()
    })
    .then(function(response){
      console.log(response[0].image)
      setImg(response[0].image)
    })
  })
  return (
    <>
    
    {img &&  <Card
    img = {img}
     />}
    </>
  )
}

export default App
