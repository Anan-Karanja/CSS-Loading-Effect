const cardImages = document.querySelectorAll(".card_image");
const cardTitles = document.querySelectorAll(".card_title");
const cardDescriptions = document.querySelectorAll(".card_description");
const cardMediaIcons = document.querySelectorAll(".media_icons a");
const cardImgs = document.querySelectorAll(".card_image img");
const cardTitleSpans = document.querySelectorAll(".card_title span");
const cardDescSpans = document.querySelectorAll(".card_description span");
const mediaIcons = document.querySelectorAll(".media_icons a i");

const renderCard = () => {
  //remove the skeleton loading effect
  cardImages.forEach((cardImage) => {
    cardImage.classList.toggle("loading");
  });

  cardTitles.forEach((cardTitle) => {
    cardTitle.classList.toggle("loading");
  });

  cardDescriptions.forEach((cardDescription) => {
    cardDescription.classList.toggle("loading");
  });

  cardMediaIcons.forEach((cardMediaIcon) => {
    cardMediaIcon.classList.toggle("loading");
  });

  //Show the hidden html elements
  cardImgs.forEach((cardImg) => {
    cardImg.style.visibility = "visible";
  });

  cardTitleSpans.forEach((cardTitleSpan) => {
    cardTitleSpan.style.visibility = "visible";
  });

  cardDescSpans.forEach((cardDescSpan) => {
    cardDescSpan.style.visibility = "visible";
  });

  mediaIcons.forEach((mediaIcon) => {
    mediaIcon.style.visibility = "visible";
  });
  //Execute renderCard on setTimeout
  setTimeout(() => {
    renderCard();
  }, 4000);
};