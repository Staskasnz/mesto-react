function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="photo-grid__element">
            <button aria-label="Удалить" className="photo-grid__delete-button" type="button"></button>
            <img className="photo-grid__photo" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <div className="photo-grid__blok">
                <h2 className="photo-grid__title">{props.card.name}</h2>
                <div className="photo-grid__likes-blok">
                    <button aria-label="Поставить лайк" className="photo-grid__like" type="button"></button>
                    <p className="photo-grid__likes-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;