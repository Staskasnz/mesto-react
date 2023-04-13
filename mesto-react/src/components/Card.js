function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }


    return (
        <div class="photo-grid__element">
            <button aria-label="Удалить" class="photo-grid__delete-button" type="button"></button>
            <img class="photo-grid__photo" src={props.link} alt={props.name} onClick={handleClick} />
            <div class="photo-grid__blok">
                <h2 class="photo-grid__title">{props.name}</h2>
                <div class="photo-grid__likes-blok">
                    <button aria-label="Поставить лайк" class="photo-grid__like" type="button"></button>
                    <p class="photo-grid__likes-counter">{props.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;