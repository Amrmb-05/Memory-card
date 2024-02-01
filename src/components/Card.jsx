import '../style/Card.css'

export default function Card( {img, name, isClicked = false, onClick} ) {
    return (
        <>
        <div className="card" onClick={onClick}>
        <img src={img} alt={name}/>
        <div className="container">
            <h4><b>{name.toUpperCase()}</b></h4>
        </div>
        </div>
        </>
    )
}