import "./style.scss";

const body = document.body;
const background = document.createElement("div");
background.classList.add("background");
body.appendChild(background);
const title = document.createElement("h1");
title.classList.add("title");
title.innerText = "Food n' Stuff";
body.appendChild(title);
const contactButton = document.createElement("a");
contactButton.classList.add("contact-button");
contactButton.innerText = "Contact Us";
contactButton.href = "../dist/contact.html";
body.appendChild(contactButton);
const menuButton = document.createElement("a");
menuButton.classList.add("menu-button");
menuButton.innerText = "Menu";
menuButton.href = "../dist/menu.html";
body.appendChild(menuButton);
const aboutButton = document.createElement("a");
aboutButton.classList.add("about-button");
aboutButton.innerText = "About Us";
aboutButton.href = "../dist/about.html";
body.appendChild(aboutButton);