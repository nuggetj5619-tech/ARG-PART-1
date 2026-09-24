/*
The secret text is revealed naturally when the user
highlights/selects it with a mouse or finger.

This file also makes the secret word briefly visible
after it has been selected.
*/

const secret = document.querySelector(".secret-text");

secret.addEventListener("selectstart", () => {
secret.style.color = "#111";
});

document.addEventListener("selectionchange", () => {
const selection = window.getSelection();

if (selection && selection.toString().toLowerCase().includes("pokedex")) {
secret.style.color = "#111";
}
});
