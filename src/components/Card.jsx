import '../style/Card.css'

export default function Card( {img} ) {
    return (
        <>
        <div className="card">
        <img src={img} alt="Avatar"/>
        <div className="container">
            <h4><b>Mb</b></h4>
        </div>
        </div>
        </>
    )
}