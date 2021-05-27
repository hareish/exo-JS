const entrepreneurs = [{
        first: 'Steve',
        last: 'Jobs',
        year: 1955
    },
    {
        first: 'Oprah',
        last: 'Winfrey',
        year: 1954
    },
    {
        first: 'Bill',
        last: 'Gates',
        year: 1955
    },
    {
        first: 'Sheryl',
        last: 'Sandberg',
        year: 1969
    },
    {
        first: 'Mark',
        last: 'Zuckerberg',
        year: 1984
    },
    {
        first: 'Beyonce',
        last: 'Knowles',
        year: 1981
    },
    {
        first: 'Jeff',
        last: 'Bezos',
        year: 1964
    },
    {
        first: 'Diane',
        last: 'Hendricks',
        year: 1947
    },
    {
        first: 'Elon',
        last: 'Musk',
        year: 1971
    },
    {
        first: 'Marissa',
        last: 'Mayer',
        year: 1975
    },
    {
        first: 'Walt',
        last: 'Disney',
        year: 1901
    },
    {
        first: 'Larry',
        last: 'Page',
        year: 1973
    },
    {
        first: 'Jack',
        last: 'Dorsey',
        year: 1976
    },
    {
        first: 'Evan',
        last: 'Spiegel',
        year: 1990
    },
    {
        first: 'Brian',
        last: 'Chesky',
        year: 1981
    },
    {
        first: 'Travis',
        last: 'Kalanick',
        year: 1976
    },
    {
        first: 'Marc',
        last: 'Andreessen',
        year: 1971
    },
    {
        first: 'Peter',
        last: 'Thiel',
        year: 1967
    }
];


// ----- la liste les entrepreneurs qui sont nés dans les années 70 -----

console.log("Liste des entrepreneurs nés dans les années 70:")
entrepreneurs.forEach(entrepreneur => {
    if (entrepreneur.year >= 1970 && entrepreneur.year < 1980)
        console.log(`- ${entrepreneur.first} ${entrepreneur.last}`);
});

entrepreneur_nom_list = [];

entrepreneurs.forEach(entrepreneur => {
    entrepreneur_nom_list.push(`${entrepreneur.first} ${entrepreneur.last}`);
});

console.log("--- Array de prenoms et noms de tous les entrepreneurs: ---- ")
console.log(entrepreneur_nom_list)




console.log("--- L'age que les entrepreneurs auraient aujourd'hui ---- ")

entrepreneurs.forEach(entrepreneur => {
    let age = 2021 - entrepreneur.year;
    console.log(`- ${entrepreneur.first} ${entrepreneur.last} aurait ${age} ans aujourd'hui.`);
});


console.log("--- Les entrepreneurs par ordre alphabétique du nom de famille ---- ")

entrepreneur_ordre_nom = [];
entrepreneurs.forEach(entrepreneur => {
    entrepreneur_ordre_nom.push(`${entrepreneur.last} ${entrepreneur.first}`);
});

console.log(`- ${entrepreneur_ordre_nom.sort().join("\n- ")}`);