var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName) {
    let deleteName;
    if(personName) {
        deleteName = personName.toLowerCase();
    }
    let newPeople = people.filter(name => name != deleteName)
    return newPeople;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));