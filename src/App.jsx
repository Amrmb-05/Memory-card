import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/Card'
import WinMessage from './components/WinMessage'
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
  let gameWon = false
  let lastClicked;

  // check if player won
  if(scores.score === 10) {
    gameWon = true
    
  }

  function handleCardClick(character) {
    lastClicked = character
  }

  function handleShuffle() {
    let shuffled = [...characters]
    shuffle(shuffled)
    setCharacters(shuffled)
  }

  function handleScore() {
    if(scores.score === scores.bestScore) {
      setScores({
        score: scores.score + 1,
        bestScore: scores.bestScore + 1
      })
    }
    else {
      setScores({...scores, 
      score: scores.score + 1})
      }
  }
  
  function handleScoreReset() {
    setScores({...scores,
    score: 0})
  }

  
  function gameController(character) {
    handleCardClick(character)
    if(clickedCards.has(lastClicked.name)) {
      handleScoreReset()
      clickedCards.clear()
    }
    else {
      clickedCards.add(lastClicked.name)
      handleShuffle()
      handleScore()
    }

    
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
    <h1> <span className='title-left'>Mem<span className='title-left o'>o</span>ry</span>
    <span className='title-right'> Card</span></h1>
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
        onClick={() => gameController(character)}
        />
      ))}
  </div>
     {gameWon && <WinMessage/>}
    </>
  )
}

export default App
