let reponse_utilisateur = prompt("Combien d'étages aura ta pyramide ?");
let etage = "H"
let blank = " "
for (var point_depart = 1; point_depart <= reponse_utilisateur; point_depart++) {
    etages = blank.repeat(reponse_utilisateur - point_depart) + etage.repeat(point_depart)
    console.log(etages)
}   