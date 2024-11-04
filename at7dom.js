// Le DOM (Document Object Model)

// Exercice 1 : Documentation
// 1-- Qu'est-ce que le DOM en JavaScript ?
/*
Le DOM (Document Object Model) en JavaScript est une interface de programmation qui représente la structure d'un document HTML ou XML sous forme d'un arbre. Dans cet arbre, chaque élément HTML (comme les balises, le texte, les attributs) est représenté par un nœud ou un objet, ce qui permet aux langages de programmation comme JavaScript d'interagir avec et de manipuler les pages web de manière dynamique.
*/

// Exercice 2 : Le DOM
// 2-- Sélectionnez un élément HTML à l'aide de son ID et affichez-le dans la console.
let element = document.getElementById("monElement");

console.log(element);

// 3-- Modifiez le contenu d'un élément HTML à l'aide de son ID.
element.innerText = "Bonsoir la famille";

// 4- Créez un nouvel élément HTML (par exemple, un paragraphe) et ajoutez-le à la page web.
let p = document.getElementById("newElement");

console.log(p);

