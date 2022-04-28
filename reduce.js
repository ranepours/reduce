const arr = [ 
    {name: 'Elie'}, 
    {name: 'Tim'}, 
    {name: 'Matt'}, 
    {name: 'Colt'}
];

//1
function extractValue(arr, key){
    return arr.reduce(function(acc, n){
        acc.push(n[key]);
        return acc;
    }, []);
}
console.log(extractValue(arr,'name'));

//2
function vowelCount(str){
    const vowels = "aeiou";
    let letters = str.split('');

    return letters.reduce(function(acc, n){
        let anyCase = n.toLowerCase();
        if (vowels.indexOf(anyCase) !== -1){
            if(acc[anyCase]){
                acc[anyCase]++;
            } acc[anyCase] = 1;
        } return acc;
    }, {});
}
console.log(vowelCount("WHAT'S GOING ON"));
console.log(vowelCount("aeIOu and sometimes y"));

//3
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, n, input){
        acc[input][key] = value;
        return acc;
    }, arr);
}
console.log(addKeyAndValue(arr, 'title', 'Instructor'));


//4 - the fluff to make sure it works
const numsArr = [1,2,3,4,5,6,7,8,9];
const namesArr = ['Rane', 'Araya', 'Jack', 'Jake', 'Dan'];
function isEven(val){
    return val % 2 === 0;
}
function longerNames(val){
    return val.length > 3;
}
//the actual thing i need for q4 lol
function partition(arr, callback){
    return arr.reduce(function(acc, n){
        if(callback(n)){ //if true
            acc[0].push(n); //push into first array
        } else {
            acc[1].push(n); //f = push to second
        }
        return acc;
    }, [[],[]]);
}
console.log(partition(numsArr, isEven));
console.log(partition(namesArr, longerNames));