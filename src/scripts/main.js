console.log("You got this!")

// Create an array for each of these record labels.

const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

// Create array for each of the artist to their genres

const countryArtists = [
    { name: "Bruce Atkins", genre: "Country", age: 23 },
    { name: "Avilee Dallas", genre: "Country", age: 19 }
]
console.log("Country", countryArtists)

const bluegrassArtists = [
    { name: "Bartholomew Danielson", genre: "Bluegrass", age: 23 }
]
console.log("Bluegrass", bluegrassArtists);

const rapArtists = [
    { name: "Dusta Grimes", genre: "Rap", age: 21 },
    { name: "Loyoncé Branis", genre: "Rap", age: 27 }
]
console.log("Rap", rapArtists)

const funkArtists = [
    { name: "Dre Funkz", genre: "Funk", age: 25 }
]
console.log("Funk", funkArtists)

const popArtists = [
    { name: "Jensen Brown", genre: "Pop", age: 20 },
    { name: "Austin Kinkaid", genre: "Pop", age: 22 }
]
console.log("Pop", popArtists)

// Create a factory function for each of the artist's genre.

let createBluegrassArtist = (name, age) => {
    return {
        name: name,
        genre: "Bluegrass",
        age: age
    }
}

let bluegrassObj = createBluegrassArtist("Bartholomew Danielson", 23);
chattenRecords.push(bluegrassObj)

let createCountryArtist = (name, age) => {
    return {
        name: name,
        genre: "Country",
        age: age
    }
}

let countryObj = createCountryArtist("Bruce Atkins", 23);
let othercountryObj = createCountryArtist("Avilee Dallas", 19);
chattenRecords.push(countryObj, othercountryObj);
console.log("Chatten Records", chattenRecords)

let createFunkArtist = (name, age) => {
    return {
        name: name,
        genre: "Funk",
        age: age
    }
}

let funkObj = createFunkArtist("Dre Funkz", 25);
jumpStopRecords.push(funkObj);

let createRapArtist = (name, age) => {
    return {
        name: name,
        genre: "Rap",
        age: age
    }
}

let rapObj = createRapArtist("Dusta Grimes", 21);
let otherRapObj = createRapArtist("Loyoncé Branis", 27);
jumpStopRecords.push(rapObj, otherRapObj);
console.log("Jump Stop Records", jumpStopRecords);

let createPopArtist = (name, age) => {
    return {
        name: name,
        genre: "Pop",
        age: age
    }
}

let popObj = createPopArtist("Jensen Brown", 20);
let otherPopObj = createPopArtist("Austin Kinkaid", 22);
polarRecords.push(popObj, otherPopObj);
console.log("Polar Records", polarRecords);
