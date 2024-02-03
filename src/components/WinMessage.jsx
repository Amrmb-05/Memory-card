import '../style/Win.css'

export default function WinMessage( {onClick} ) {
    return (
        <div className="win-message">
            <p>Winner!</p>
            <p>
                Congratulations!
                You saved planet Namek
            </p>
            <button className='restart' onClick={onClick}>Restart</button>
        </div>
    )
}