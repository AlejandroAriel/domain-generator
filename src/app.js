/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let resultado = document.querySelector("#dominio");
  resultado.innerHTML = domin();
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

let result = [];

function domin() {
  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        for (var l = 0; l < extensions.length; l++) {
          result.push(
            "<li>" + pronoun[i] + adj[j] + noun[k] + extensions[l] + "</li>"
          );
        }
      }
    }
  }
  return result.join("");
}
