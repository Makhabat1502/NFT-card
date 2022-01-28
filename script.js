alert("Я оцениваю свою работу на 90 баллов")

const div = document.getElementById("wrapper");
const card = document.createElement("div");
const cardTitle = document.createElement("h3");
const cardDescr = document.createElement("p");
const cardEth = document.createElement("p");
const date = document.createElement("p");
const img = document.createElement("img");
const creatorName = document.createElement("span");

document.body.append(div);
document.body.style.backgroundColor = `hsl(217, 54%, 11%)`;

wrapper.append(card);
card.style.background = `hsl(215, 32%, 27%)`;
card.style.cssText = `
    margin: 0 auto;
    padding: 25px;
    width: 400px;
    height: 700px;
    border-radius: 20px;
    font-family: "Outfit";
    font-size: 18px;
`

card.append(img);
img.src = "../images/image-equilibrium.jpg";
img.style.cssText = `
    margin-bottom: 25px;
    width: 100%;
    align-items: center;
    border-radius: 20px;
`

card.append(cardTitle);
cardTitle.textContent = "Equilibrium #3429";
cardTitle.style.cssText = `
    font-size: 22px;
    color: rgba(250, 250, 250, 0.9);
`

card.append(cardDescr);
cardDescr.textContent = "Our Equilibrium collection promotes balance and calm";
cardDescr.style.cssText = `
    font-size: 20px;
    color: rgba(250, 250, 250, 0.4);
`

const icons = document.createElement("img");
card.append(icons);
icons.style.cssText = `
    display: flex;
    flex-direction: row;
`

const ethIcon = document.createElement("img");
card.append(ethIcon);
ethIcon.src = "../images/icon-ethereum.svg";
ethIcon.style.cssText = `
    width: 10px;
    display: flex;
    flex-direction: row;
`


card.append(cardEth);
cardEth.textContent = "0.041ETH";
cardEth.style.cssText = `
    color: rgb(50, 215, 210);
    flex-direction: row;
`

const iconClock = document.createElement("img");
card.append(iconClock);
iconClock.src = "../images/icon-clock.svg";

card.append(date);
date.textContent = "3 days left";
date.style.cssText = `
    color: rgba(250, 250, 250, 0.4);
`

const line = document.createElement("hr");
card.append(line);

const avatar = document.createElement("img");
card.append(avatar);
avatar.src = "../images/image-avatar.png";

card.append(creatorName);
creatorName.textContent = "Creation of Jules Wyvern"
creatorName.style.cssText = `
    color: rgba(250, 250, 250, 0.4);
`