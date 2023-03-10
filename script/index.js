const openedButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const profileUserName = document.querySelector('.profile__username');
const profileUserWork = document.querySelector('.profile__user-work');
const popupUserName = popup.querySelector('.popup__input_text_username');
const popupUserWork = popup.querySelector('.popup__input_text_user-work');
const popupForm = popup.querySelector('.popup__container');


const handleOpenedButtonClick = () => {
    popupUserName.value = profileUserName.textContent;
    popupUserWork.value = profileUserWork.textContent;
    popup.classList.add('popup_opened');
}
const handleCloseButtonClick = () => {
    popup.classList.remove('popup_opened');
}
openedButton.addEventListener('click', handleOpenedButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);

function formSubmit(evt){
    evt.preventDefault();
    profileUserName.textContent = popupUserName.value;
    profileUserWork.textContent = popupUserWork.value;
    handleCloseButtonClick();
}
popupForm.addEventListener('submit', formSubmit);
