import '../style/GameOver.css'

export default function GameOver( {score, onClick} ) {
    return (
        <div className="gameover-message">
            <p>Game Over</p>
            <p>Your Score is {score}</p>
            <button className='restart' onClick={onClick}>Restart</button>
        </div>
    )
}