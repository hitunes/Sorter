import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort()
console.log(linkedList.print())

const charactersCollection = new CharactersCollection('Xaayb')
charactersCollection.sort();
console.log(charactersCollection.data);

const numbersCollection = new NumbersCollection([1,3,5,2,4,-1,9,-9,11])
numbersCollection.sort();
console.log(numbersCollection.data);
