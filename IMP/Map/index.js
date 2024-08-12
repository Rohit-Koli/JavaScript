/*
It is a collection that store key value pair.
Where Key and Value can be of any data types.
*/


//Creation of MAP type 01

let myMap= new Map([
    //Key   , Value
    ['name','Rohit'],
    ['age',22],
    ['gender','Male'],
    [true,'Yes']
]);

//Accesing Elements of MAP's 
console.log(myMap.get('name')) //Rohit

console.log(myMap.get('gender')) //Male

console.log(myMap.get('age')) //22

//Inserting ELement and key in MAP

myMap.set('Occupation','SDE');

console.log(myMap.get('Occupation')) //SDE

//Checking for keys

console.log(myMap.has('Occupation')) //true

//Deletion in MAP

myMap.delete('Occupation')

console.log(myMap)
/*
Map(4) {
  'name' => 'Rohit',
  'age' => 22,
  'gender' => 'Male',
  true => 'Yes'
}
*/

//Remove all key value pairs from map's
let mp = new Map([
    ['aknk','jnbkd'],
    ['frgv','fref'],
    [true,false]
])

console.log(mp) //Map(3) { 'aknk' => 'jnbkd', 'frgv' => 'fref', true => false }

mp.clear()
console.log(mp) //Map(0) {}