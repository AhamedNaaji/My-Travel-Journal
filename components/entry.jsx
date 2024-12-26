export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="info-container">
                <img className="marker" src="../img/location.png" alt="" />
                <span className="country">{props.country}</span>
                <a href="">View on Google</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    );
}