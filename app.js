// console.log("hallo")

// let x = "aaaaa";
// if (x == "admin") {
//   console.log("you are admin");
// } else {
//   console.log("you are user");
// }

// const username = "admin";
// let password = "admin";
// if (username == "admin" && password == "admin") {
//   console.log("you have Accsses");
// } else {
//   console.log("dont Accssec");
// }

// let x = 0;

// if (x == 0) {
//   console.log("zero");
// }
// else if (x > 0) {
//   console.log("posetive");
// }
// else {
//   console.log("negativ");
// }

// else {
//   console.log("negativ");
// }

// let username ="shima";
// let lastname ="salehi";
// console.log(username+" "+lastname);

// let x = 4
// let y = 5
// console.log(x+y);

// let x = 10
// let name ="shadi"
// console.log(x+" "+name);
////////////////////////////////////////

// for (i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

// for (i = 1; i <= 50; i++) {
//   console.log(2*i);
// }

// 2n
// for (i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

//2n-1
// for (i = 1; i <= 50; i++) {
//   console.log(2*i-1);
// }

// for (i = 0; i <= 100; i += 5) {///20
//   console.log(i);
// }

//5n
// for (i = 1; i <=20; i++) {////20
//   console.log(5*i);
// }

// for (i = 1; i <= 100; i++) {  ///100
//   if (i % 5 == 0) {  ///100
//    console.log(i);
//   }
// }

// let numbers = [2, 4, 6, 8, 5, 4];
// // console.table(numbers);
// let s =0
// for (let i = 0; i < numbers.length; i++) {
//      s += numbers[i];  /// numbers[0]-->2 , numbers[1]-->4
// }
// console.log(s);

/// best practice

/////////////////////
// let names = ["shadi", "shIma", "marY", "mati", "Zari"];
// let searchTerm = "ShiMa";

// let lowerCaseNames = names.map((item) => item.toLowerCase());
// let lowerCaseSearchTerm = searchTerm.toLowerCase();

// if (lowerCaseNames.includes(lowerCaseSearchTerm)) {
// // if (names.includes(searchTerm)) {
//   console.log("I FIND THE NAME");
// } else {
//   console.log("I DONT FIND THIS NAME");
// }

//////////////////////////////////////////////////////
// const library = [
//   {
//     name: "Things Fall Apart",
//     author: "Chinua Achebe",
//     country: "Nigeria",
//     language: "English",
//     pages: 209,
//     releaseYear: 1958,
//     readingStatus: true,
//   },
//   {
//     name: "Fairy tales",
//     author: "Hans Christian Andersen",
//     country: "Denmark",
//     language: "Danish",
//     pages: 784,
//     releaseYear: 1836,
//     readingStatus: true,
//   },
//   {
//     name: "The Divine Comedy",
//     author: "Dante Alighieri",
//     country: "Italy",
//     language: "Italian",
//     pages: 928,
//     releaseYear: 1315,
//     readingStatus: false,
//   },
//   {
//     name: "The Epic Of Gilgamesh",
//     author: "Unknown",
//     country: "Sumer and Akkadian Empire",
//     language: "Akkadian",
//     pages: 160,
//     releaseYear: -1700,
//     readingStatus: false,
//   },
//   {
//     name: "The Book Of Job",
//     author: "Unknown",
//     country: "Achaemenid Empire",
//     language: "Hebrew",
//     pages: 176,
//     releaseYear: -600,
//     readingStatus: false,
//   },
//   {
//     name: "One Thousand and One Nights",
//     author: "Unknown",
//     country: "India/Iran/Iraq/Egypt/Tajikistan",
//     language: "Arabic",
//     pages: 288,
//     releaseYear: 1200,
//     readingStatus: false,
//   },
//   {
//     name: "Nj\u00e1l's Saga",
//     author: "Unknown",
//     country: "Iceland",
//     language: "Old Norse",
//     pages: 384,
//     releaseYear: 1350,
//     readingStatus: true,
//   },
//   {
//     name: "Pride and Prejudice",
//     author: "Jane Austen",
//     country: "United Kingdom",
//     language: "English",
//     pages: 226,
//     releaseYear: 1813,
//     readingStatus: false,
//   },
//   {
//     name: "Le P\u00e8re Goriot",
//     author: "Honor\u00e9 de Balzac",
//     country: "France",
//     language: "French",
//     pages: 443,
//     releaseYear: 1835,
//     readingStatus: false,
//   },
//   {
//     name: "Molloy, Malone Dies, The Unnamable, the trilogy",
//     author: "Samuel Beckett",
//     country: "Republic of Ireland",
//     language: "French, English",
//     pages: 256,
//     releaseYear: 1952,
//     readingStatus: false,
//   },
//   {
//     name: "The Decameron",
//     author: "Giovanni Boccaccio",
//     country: "Italy",
//     language: "Italian",
//     pages: 1024,
//     releaseYear: 1351,
//     readingStatus: false,
//   },
//   {
//     name: "Ficciones",
//     author: "Jorge Luis Borges",
//     country: "Argentina",
//     language: "Spanish",
//     pages: 224,
//     releaseYear: 1965,
//     readingStatus: false,
//   },
//   {
//     name: "Wuthering Heights",
//     author: "Emily Bront\u00eb",
//     country: "United Kingdom",
//     language: "English",
//     pages: 342,
//     releaseYear: 1847,
//     readingStatus: false,
//   },
//   {
//     name: "The Stranger",
//     author: "Albert Camus",
//     country: "Algeria, French Empire",
//     language: "French",
//     pages: 185,
//     releaseYear: 1942,
//     readingStatus: false,
//   },
//   {
//     name: "Poems",
//     author: "Paul Celan",
//     country: "Romania, France",
//     language: "German",
//     pages: 320,
//     releaseYear: 1952,
//     readingStatus: true,
//   },
//   {
//     name: "Journey to the End of the Night",
//     author: "Louis-Ferdinand C\u00e9line",
//     country: "France",
//     language: "French",
//     pages: 505,
//     releaseYear: 1932,
//     readingStatus: false,
//   },
//   {
//     name: "Don Quijote De La Mancha",
//     author: "Miguel de Cervantes",
//     country: "Spain",
//     language: "Spanish",
//     pages: 1056,
//     releaseYear: 1610,
//     readingStatus: false,
//   },
//   {
//     name: "The Canterbury Tales",
//     author: "Geoffrey Chaucer",
//     country: "England",
//     language: "English",
//     pages: 544,
//     releaseYear: 1450,
//     readingStatus: false,
//   },
//   {
//     name: "Stories",
//     author: "Anton Chekhov",
//     country: "Russia",
//     language: "Russian",
//     pages: 194,
//     releaseYear: 1886,
//     readingStatus: true,
//   },
//   {
//     name: "Nostromo",
//     author: "Joseph Conrad",
//     country: "United Kingdom",
//     language: "English",
//     pages: 320,
//     releaseYear: 1904,
//     readingStatus: true,
//   },
//   {
//     name: "Great Expectations",
//     author: "Charles Dickens",
//     country: "United Kingdom",
//     language: "English",
//     pages: 194,
//     releaseYear: 1861,
//     readingStatus: true,
//   },
//   {
//     name: "Jacques the Fatalist",
//     author: "Denis Diderot",
//     country: "France",
//     language: "French",
//     pages: 596,
//     releaseYear: 1796,
//     readingStatus: true,
//   },
//   {
//     name: "Berlin Alexanderplatz",
//     author: "Alfred D\u00f6blin",
//     country: "Germany",
//     language: "German",
//     pages: 600,
//     releaseYear: 1929,
//     readingStatus: false,
//   },
//   {
//     name: "Crime and Punishment",
//     author: "Fyodor Dostoevsky",
//     country: "Russia",
//     language: "Russian",
//     pages: 551,
//     releaseYear: 1866,
//     readingStatus: false,
//   },
//   {
//     name: "The Idiot",
//     author: "Fyodor Dostoevsky",
//     country: "Russia",
//     language: "Russian",
//     pages: 656,
//     releaseYear: 1869,
//     readingStatus: false,
//   },
//   {
//     name: "The Possessed",
//     author: "Fyodor Dostoevsky",
//     country: "Russia",
//     language: "Russian",
//     pages: 768,
//     releaseYear: 1872,
//     readingStatus: true,
//   },
//   {
//     name: "The Brothers Karamazov",
//     author: "Fyodor Dostoevsky",
//     country: "Russia",
//     language: "Russian",
//     pages: 824,
//     releaseYear: 1880,
//     readingStatus: false,
//   },
//   {
//     name: "Middlemarch",
//     author: "George Eliot",
//     country: "United Kingdom",
//     language: "English",
//     pages: 800,
//     releaseYear: 1871,
//     readingStatus: true,
//   },
//   {
//     name: "Invisible Man",
//     author: "Ralph Ellison",
//     country: "United States",
//     language: "English",
//     pages: 581,
//     releaseYear: 1952,
//     readingStatus: true,
//   },
//   {
//     name: "Medea",
//     author: "Euripides",
//     country: "Greece",
//     language: "Greek",
//     pages: 104,
//     releaseYear: -431,
//     readingStatus: false,
//   },
//   {
//     name: "Absalom, Absalom!",
//     author: "William Faulkner",
//     country: "United States",
//     language: "English",
//     pages: 313,
//     releaseYear: 1936,
//     readingStatus: false,
//   },
//   {
//     name: "The Sound and the Fury",
//     author: "William Faulkner",
//     country: "United States",
//     language: "English",
//     pages: 326,
//     releaseYear: 1929,
//     readingStatus: true,
//   },
//   {
//     name: "Madame Bovary",
//     author: "Gustave Flaubert",
//     country: "France",
//     language: "French",
//     pages: 528,
//     releaseYear: 1857,
//     readingStatus: true,
//   },
//   {
//     name: "Sentimental Education",
//     author: "Gustave Flaubert",
//     country: "France",
//     language: "French",
//     pages: 606,
//     releaseYear: 1869,
//     readingStatus: true,
//   },
//   {
//     name: "Gypsy Ballads",
//     author: "Federico Garc\u00eda Lorca",
//     country: "Spain",
//     language: "Spanish",
//     pages: 218,
//     releaseYear: 1928,
//     readingStatus: false,
//   },
//   {
//     name: "One Hundred releaseYears of Solitude",
//     author: "Gabriel Garc\u00eda M\u00e1rquez",
//     country: "Colombia",
//     language: "Spanish",
//     pages: 417,
//     releaseYear: 1967,
//     readingStatus: false,
//   },
//   {
//     name: "Love in the Time of Cholera",
//     author: "Gabriel Garc\u00eda M\u00e1rquez",
//     country: "Colombia",
//     language: "Spanish",
//     pages: 368,
//     releaseYear: 1985,
//     readingStatus: false,
//   },
//   {
//     name: "Faust",
//     author: "Johann Wolfgang von Goethe",
//     country: "Saxe-Weimar",
//     language: "German",
//     pages: 158,
//     releaseYear: 1832,
//     readingStatus: false,
//   },
//   {
//     name: "Dead Souls",
//     author: "Nikolai Gogol",
//     country: "Russia",
//     language: "Russian",
//     pages: 432,
//     releaseYear: 1842,
//     readingStatus: true,
//   },
//   {
//     name: "The Tin Drum",
//     author: "G\u00fcnter Grass",
//     country: "Germany",
//     language: "German",
//     pages: 600,
//     releaseYear: 1959,
//     readingStatus: false,
//   },
//   {
//     name: "The Devil to Pay in the Backlands",
//     author: "Jo\u00e3o Guimar\u00e3es Rosa",
//     country: "Brazil",
//     language: "Portuguese",
//     pages: 494,
//     releaseYear: 1956,
//     readingStatus: false,
//   },
//   {
//     name: "Hunger",
//     author: "Knut Hamsun",
//     country: "Norway",
//     language: "Norwegian",
//     pages: 176,
//     releaseYear: 1890,
//     readingStatus: true,
//   },
//   {
//     name: "The Old Man and the Sea",
//     author: "Ernest Hemingway",
//     country: "United States",
//     language: "English",
//     pages: 128,
//     releaseYear: 1952,
//     readingStatus: true,
//   },
//   {
//     name: "Iliad",
//     author: "Homer",
//     country: "Greece",
//     language: "Greek",
//     pages: 608,
//     releaseYear: -735,
//     readingStatus: true,
//   },
//   {
//     name: "Odyssey",
//     author: "Homer",
//     country: "Greece",
//     language: "Greek",
//     pages: 374,
//     releaseYear: -800,
//     readingStatus: true,
//   },
//   {
//     name: "A Doll's House",
//     author: "Henrik Ibsen",
//     country: "Norway",
//     language: "Norwegian",
//     pages: 68,
//     releaseYear: 1879,
//     readingStatus: true,
//   },
//   {
//     name: "Ulysses",
//     author: "James Joyce",
//     country: "Irish Free State",
//     language: "English",
//     pages: 228,
//     releaseYear: 1922,
//     readingStatus: false,
//   },
//   {
//     name: "Stories",
//     author: "Franz Kafka",
//     country: "Czechoslovakia",
//     language: "German",
//     pages: 488,
//     releaseYear: 1924,
//     readingStatus: true,
//   },
//   {
//     name: "The Trial",
//     author: "Franz Kafka",
//     country: "Czechoslovakia",
//     language: "German",
//     pages: 160,
//     releaseYear: 1925,
//     readingStatus: true,
//   },
//   {
//     name: "The recognition of Shakuntala",
//     author: "K\u0101lid\u0101sa",
//     country: "India",
//     language: "Sanskrit",
//     pages: 147,
//     releaseYear: 150,
//     readingStatus: false,
//   },
// ];
// let unreadbooks = library.filter((item) => item.readingStatus==false);
// console.log(unreadbooks);
// ************************************************************

// let releaseYear = library.filter(item =>  item.releaseYear <1800 );
// console.log(releaseYear);

// ##########################################
// let languege = [];
// for (let i = 0; i < library.length; i++);
// if (library.language == German) {

// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// console.log(sum("shadi", "salehi"));


// function sum(firstname, lastname) {
//   return firstname + " " + lastname;
// }
// const sum = (firstname, lastname)=> {
//   return firstname + " " + lastname;
// }

//call
// console.log(sum("shadi", "salehi"));
// console.log(sum("Zahra", "Yazdani"));
// console.log(sum("Mahsa", "Amini"));

// const result1 = sum("Fahimeh", "Saberi");
// console.log(result1);

// const firstname = "Shadi";
// const lastname = "Salehi";
// const result = sum(firstname, lastname);
// console.log(result);

// f(x, y)= 2*x-5*y

// x=2;
// y=1;
// f(x,y)

// const firstname = "shadi";
// const lastname = "salehi";

// function Sum(firstName, lastName) {
//   return firstName + lastName;
// }

// const result = Sum(firstname, lastname);
// console.log(result);
// -------------------------------------------------------------------
// console.log(x);

// const x= 10;
