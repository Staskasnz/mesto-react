import React from 'react';
import { useEffect } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getCardInfo()
        ])
            .then((values) => {
                setUserName(values[0].name)
                setUserDescription(values[0].about)
                setUserAvatar(values[0].avatar);
                setCards(values[1]);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const results = [];

    cards.forEach(item => {
        results.push(
            <Card
                link={item.link}
                name={item.name}
                likes={item.likes}
                onCardClick={props.onCardClick}
                card={item}
            />
        )
    })

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-box">
                    <div className="profile__avatar-pencil" onClick={props.onEditAvatar}></div>
                    <img src={userAvatar} alt="Аватарка" className="profile__avatar" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button aria-label="Редактировать" className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                    <div className="line-break"></div>
                    <p className="profile__vocation">{userDescription}</p>
                </div>
                <button aria-label="Добавить" className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo-grid">
                {results}
            </section>
        </main>
    )
}

export default Main;
