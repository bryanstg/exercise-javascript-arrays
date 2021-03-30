let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(arraysOfNumbers) {
    let odd = [];
    let even = [];
    let isArray = Array.isArray(arraysOfNumbers);
    if ( isArray ) {
        for ( integer of arraysOfNumbers ) {
            if ( integer % 2 == 0 ) {
                even.push(integer);
            } else {
                odd.push(integer)
            }
        }
    }
    let organizedArray = odd.concat(even);
    return organizedArray;
}
console.log(mergeTwoList(list_of_numbers));
