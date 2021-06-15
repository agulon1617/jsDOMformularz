czym jest DOM

// window.alert("Hans");
// alert("Hans");

// window.prompt("Podaj swoj wiek");
// let age = window.prompt("Podaj swoj wiek")
// console.log(`Masz ${age} lat`);

// window.confirm("Akceptuje umowe");
// let accept = window.confirm("Akceptuje umowe");
// if (accept) {
//     console.log(`Umowa zaakceptowana`);
// } else {
//     console.log(`Umowa NIEzaakceptowana`);
// }

// console.log(`Wewnetrzna wysokosc okna przegladarki wynosi ${window.innerHeight}`);
// console.log(`Zewnetrzna wysokosc okna przegladarki wynosi ${window.outerHeight}`);

// window.document.write(`<h2>Hans<h2>`);

// var number = 108;
// console.log(window);

// OBIEKT document

// console.log(window.document);
// console.log(document);

// console.log(document.location);

// console.log(document.doctype);

// console.log(document.head);

// console.log(document.title);

// console.log(document.body);

// console.log(document.getElementsByTagName(`body`));

// console.log(document.documentElement);
// console.log(document);


console.log("Dostep do elementow DOM");

//Metody zwracajace pojedynczy `element`
let articles = document.getElementsByTagName(`articles`);
console.log(articles);

let paragraph = document.querySelector(`.content`);
console.log(paragraph);

//metody zwracajace kolekcje `HTMLCollection`

let paragraphs = document.getElementsByClassName(`content`);
console.log(paragraphs[0]);  // [1,2 czyli ktory parametr wyswietli]

let allParagraphs = document.getElementsByTagName(`p`);
console.log(allParagraphs);

let paragraphsContent = document.querySelectorAll(`p.content`);
console.log(paragraphsContent);







