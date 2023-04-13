import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';
import { Fragment } from 'react';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

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
    setSelectedCard(false);
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
      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
        children={<Fragment><input type="text" id="name" placeholder="Имя" className="popup__input" minlength="2" maxlength="40"
          required />
          <span className="name-error popup__input-error"></span>
          <input type="text" id="vocation" placeholder="О себе" className="popup__input" minlength="2"
            maxlength="200" required />
          <span className="vocation-error popup__input-error"></span>
          <button className="popup__save-button" type="submit">Сохранить</button></Fragment>} />

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
        children={<Fragment><input type="url" id="avatar" placeholder="Ссылка на аватар" className="popup__input popup__input_avatar" minlength="2"
          maxlength="300" required />
          <span className="avatar-error popup__input-error"></span>
          <button className="popup__save-button" type="submit">Сохранить</button></Fragment>} />

      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        children={<Fragment><input type="text" id="title" className="popup__input popup__input_type_title"
          placeholder="Название" minlength="2" maxlength="30" required />
          <span className="title-error popup__input-error"></span>
          <input type="url" id="link" className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку" required />
          <span className="link-error popup__input-error"></span>
          <button className="popup__save-button" type="submit">Создать</button></Fragment>} />

      <PopupWithForm name="delete" title="Вы уверены?" isOpen=""
        children={<Fragment><input type="url" id="avatar" placeholder="Ссылка на аватар" className="popup__input popup__input_avatar" minlength="2"
          maxlength="300" required />
          <button className="popup__save-button popup__delete-card-button" type="button">Да</button></Fragment>} />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
