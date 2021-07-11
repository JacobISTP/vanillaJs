const quotes = [
    {
        quote: "You`re welcome!",
        character: "Moana",
        img: "img/0.jpg"
    },
    {
        quote: "No matter how your heart is grieving, if you keep on believing, dreams that you wish will come.",
        character: "Cindella",
        img: "img/1.jpg"
    },
    {
        quote: "Let it go, let it go. The past is the past.",
        character: "Frozen",
        img: "img/2.jpg"
    },
    {
        quote: "Why down deep inside we`ve got a dream.",
        character: "Tangled",
        img: "img/3.jpg"
    },
    {
        quote: "I want much more than this provincial life.",
        character: "The Beauty and The Beast",
        img: "img/4.jpg"
    },
    {
        quote: "You`re the one that I`ve been looking for.",
        character: "The Little Mermaid",
        img: "img/5.jpg"
    },
    {
        quote: "All I know is I won`t go speechless.",
        character: "Aladdin",
        img: "img/6.jpg"
    },
    {
        quote: "Sometimes the right path is not the easiest one.",
        character: "Pocahontas",
        img: "img/7.jpg"
    },
    {
        quote: "Remember, you are the one who can fill the world with sunshine.",
        character: "Snow White",
        img: "img/8.jpg"
    },
    {
        quote: "Too beautiful to be real!!",
        character: "Sleeping Beauty",
        img: "img/9.jpg"
    },
];
const quote = document.querySelector("#quotes span:first-child");
const character = document.querySelector("#quotes span:last-child");
const img = document.querySelector("#images");
const randomNum = String(Math.floor(Math.random() * quotes.length));

quote.innerText = quotes[randomNum].quote;
character.innerText = quotes[randomNum].character;
img.src = quotes[randomNum].img;