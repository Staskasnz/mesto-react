import React, { useEffect, useState } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getCardInfo()
        ])
            .then(([userData, cardsData]) => {
                setUserName(userData.name)
                setUserDescription(userData.about)
                setUserAvatar(userData.avatar);
                setCards(cardsData);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

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
                {cards.map((item) => {
                    return (
                    <Card
                        onCardClick={props.onCardClick}
                        card={item}
                        key={item._id}
                    />
                    )
                })}
            </section>
        </main>
    )
}

export default Main;
