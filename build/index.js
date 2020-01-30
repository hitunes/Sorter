"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([-1,3,50,23,7,9,8])
// const sorter = new Sorter(numbersCollection)
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaaayb');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
