import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([-1,3,50,23,7,9,8])
// const sorter = new Sorter(numbersCollection)

const charactersCollection = new CharactersCollection('Xaaayb')
const sorter = new Sorter(charactersCollection)
sorter.sort();
console.log(charactersCollection.data)