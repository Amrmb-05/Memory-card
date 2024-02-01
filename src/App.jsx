import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/Card'
import './App.css'

// const names = ['goku', 'vegeta', 'trunks', 'bulma']
const shuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
function App() {
  const [characters, setCharacters] = useState([])

  function handleShuffle() {
    let shuffled = [...characters]
    shuffle(shuffled)
    setCharacters(shuffled)
  }
  useEffect(() => {
    
    fetch(`https://dragonball-api.com/api/characters?limit=10`, {mode: 'cors'}).then(function(response) {
      console.log(response.json)
      return response.json()
    })
    .then(function(response){
      console.log(response.items)
      shuffle(response.items)
      setCharacters(
        response.items
      )

  })
  },[])
  return (
    <>
  <div id='container'>
  
  {characters.map((character) => (
        <Card 
        key={character.name}
        img = {character.image}
        name= {character.name}
        onClick={handleShuffle}
        />
      ))}
  </div>
     
    </>
  )
}

export default App
