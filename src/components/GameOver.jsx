import '../style/GameOver.css'

export default function GameOver( {score} ) {
    return (
        <div className="gameover-message">
            <p>Game Over</p>
            <p>Your Score is {score}</p>
        </div>
    )
}