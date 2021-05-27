const books = [{
        title: 'Gatsby le magnifique',
        id: 133712,
        rented: 39
    },
    {
        title: 'A la recherche du temps,perdu',
        id: 237634,
        rented: 28
    },
    {
        title: 'Orgueil & Préjugés',
        id: 873495,
        rented: 67
    },
    {
        title: 'Les frères Karamazov',
        id: 450911,
        rented: 55
    },
    {
        title: 'Dans les forêts de Sibérie',
        id: 8376365,
        rented: 15
    },
    {
        title: 'Pourquoi j\'ai mangé mon père',
        id: 450911,
        rented: 45
    },
    {
        title: 'Et on tuera tous les affreux',
        id: 67565,
        rented: 36
    },
    {
        title: 'Le meilleur des mondes',
        id: 88847,
        rented: 58
    },
    {
        title: 'La disparition',
        id: 364445,
        rented: 33
    },
    {
        title: 'La lune seule le sait',
        id: 63541,
        rented: 43
    },
    {
        title: 'Voyage au centre de la Terre',
        id: 4656388,
        rented: 38
    },
    {
        title: 'Guerre et Paix',
        id: 748147,
        rented: 19
    }
];

// ----- Est-ce que tous les livres ont été au moins empruntés une fois ?  -----

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
// On crée une variable vide
let livre_a_ete_emprunte;

books.forEach(book => {
    if (book.rented === 0) {
        livre_a_ete_emprunte = false;
    } else {
        livre_a_ete_emprunte = true
    }
});

if (livre_a_ete_emprunte === true) {
    console.log("Oui");
} else {
    console.log("Non");
};






// ----- Quel est livre le plus emprunté ? -----
console.log("Quel est livre le plus emprunté ?")
let livre_ordre_par_louer = books.sort(function (a, b) {
    return a.rented - b.rented;
});

// On affiche le titre du dernier objet de l'array 
console.log(livre_ordre_par_louer[livre_ordre_par_louer.length - 1].title)

// ----- Quel est le livre le moins emprunté ? -----

console.log("Quel est livre le moins emprunté ?")
console.log(livre_ordre_par_louer[0].title)

// ----- Trouve le livre avec l'ID: 873495 -----

console.log("Quel est livre avec l'ID: 873495 ?")

let livre_ordre_id = books.find(book => {
    return book.id === 873495
})

console.log(livre_ordre_id.title)


// ----- Supprime le livre avec l'ID: 133712 -----

console.log("Supprime le livre avec l'ID: 133712")

let livre_a_supprimer = books.findIndex(book => {
    return book.id === 133712
})

books.splice(livre_a_supprimer, 1)
console.log(books)


// ----- Trie les livres par ordre alphabétique. -----
console.log("Trie les livres par ordre alphabétique")
let livre_ordre_alphabetique = books.sort(function (a, b) {
    return a.title.localeCompare(b.title);
});

console.log(livre_ordre_alphabetique)