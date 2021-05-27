talk = prompt("Tu veux quoi?");

if (talk.slice(-1) === "?") {
    console.log("Ouais Ouais ...");
} else if (talk === talk.toUpperCase() && talk.length > 1) {
    console.log("Pwa, calme-toi...");
} else if (talk.includes("fortnite")) {
    console.log("on s'fait une partie soum-soum ?");
} else if (talk === "") {
    console.log("t'es en PLS ?");
} else {
    console.log("Balek");
}