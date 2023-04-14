import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page__container">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" id="name" placeholder="Имя" className="popup__input" minLength="2" maxLength="40"
          required />
          <span className="name-error popup__input-error"></span>
          <input type="text" id="vocation" placeholder="О себе" className="popup__input" minLength="2"
            maxLength="200" required />
          <span className="vocation-error popup__input-error"></span>
          </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input type="url" id="avatar" placeholder="Ссылка на аватар" className="popup__input popup__input_avatar" minLength="2"
          maxLength="300" required />
          <span className="avatar-error popup__input-error"></span>
          </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" id="title" className="popup__input popup__input_type_title"
          placeholder="Название" minLength="2" maxLength="30" required />
          <span className="title-error popup__input-error"></span>
          <input type="url" id="link" className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку" required />
          <span className="link-error popup__input-error"></span>
          </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" isOpen="">
        <input type="url" id="avatar" placeholder="Ссылка на аватар" className="popup__input popup__input_avatar" minLength="2"
          maxLength="300" required />
          <button className="popup__save-button popup__delete-card-button" type="button">Да</button></PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
