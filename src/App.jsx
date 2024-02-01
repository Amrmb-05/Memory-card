import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/Card'
import './App.css'

// const names = ['goku', 'vegeta', 'trunks', 'bulma']
function App() {
  const [img, setImg] = useState([])
  useEffect(() => {
    const shuffle = (array) => {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    };
    fetch(`https://dragonball-api.com/api/characters?limit=10`, {mode: 'cors'}).then(function(response) {
      console.log(response.json)
      return response.json()
    })
    .then(function(response){
      console.log(response.items)
      shuffle(response.items)
      setImg(
        response.items
      )

  })
  },[])
  return (
    <>
  <div id='container'>
  
  {img.map((photo) => (
        <Card 
        key={photo.name}
        img = {photo.image}
        name= {photo.name}
        />
      ))}
  </div>
     
    </>
  )
}

export default App
