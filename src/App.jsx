import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/Card'
import './App.css'

const shuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
const clickedCards = new Set()

function App() {
  const [characters, setCharacters] = useState([])
  const [scores, setScores] = useState({score: 0, bestScore:0})
  // const [lastClicked, setLastClicked] = useState({})
  let lastClicked
  function handleCardClick(character) {
    lastClicked = character
    console.log(character)
  }

  function handleShuffle() {
    let shuffled = [...characters]
    shuffle(shuffled)
    setCharacters(shuffled)
  }

  function handleScore() {
    setScores({...scores, 
      score: scores.score + 1})
  }

  function gameController(character) {
    console.log(character)
    handleCardClick(character)
    console.log(clickedCards)
    console.log(lastClicked)
    if(clickedCards.has(lastClicked.name)) {
      console.log("reset")
    }
    else {
      clickedCards.add(lastClicked.name)
      handleShuffle()
      handleScore()
    }
    console.log(clickedCards)
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
    <h1>Memory Card</h1>
    <div className='score-container'>
      <p>Score: {scores.score}</p>
      <p>Best Score: {scores.bestScore}</p>
    </div>
  <div id='container'>
  
  {characters.map((character) => (
        <Card 
        key={character.name}
        img = {character.image}
        name= {character.name}
        // lastClicked={handleCardClick(character.name)}
        onClick={() => gameController(character)}
        />
      ))}
  </div>
     
    </>
  )
}

export default App
