import '../style/Card.css'

export default function Card( {img, name} ) {
    return (
        <>
        <div className="card">
        <img src={img} alt={name}/>
        <div className="container">
            <h4><b>{name.toUpperCase()}</b></h4>
        </div>
        </div>
        </>
    )
}