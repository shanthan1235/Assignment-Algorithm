const numbers =  [47,84,75,21,14,14,79];

// Median
function median(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  return arrSorted.length % 2 === 0 ? (arrSorted[arrSorted.length/2 - 1] + arrSorted[arrSorted.length/2]) / 2 : arrSorted[Math.floor(arrSorted.length/2)];
}
const flatten =(values)=>values.reduce(
  (acc, item, index, Array)=> acc.concat(
    Array.isArray(item)? flatten(item)
    : item
  ),[]
)

 //highest value
let maximum =-Infinity
for(let number of numbers){
  if(number>maximum)
  maximum=number
}
  
  
// Mode
function mode(arr) {
  const frequencyTable = {};
  arr.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1);

  let modes = [];
  let maxFrequency = 0;
  for(const key in frequencyTable) {
    if(frequencyTable[key] > maxFrequency) {
  		modes = [Number(key)];
  		maxFrequency = frequencyTable[key];
  	}
  	else if(frequencyTable[key] === maxFrequency) {
  		modes.push(Number(key));
  	}
  }
  
  if(modes.length === Object.keys(frequencyTable).length) modes = [];

  return modes;
}


//findprimes
function findprimes(arr){
    let sortArray = [];
    arr.forEach((num)=>{
      let factor = 0;
      for(let i = 0; i <= num;i++){
        if((num%i) === 0 ){
            factor++

        }
      }
      if(factor === 2){
        sortArray.push(num)
      }
    })
    console.log(sortArray);
}






console.log(`Data: ${numbers}`);
console.log(`Median: ${median(numbers)}`);
console.log(maximum)
console.log(`Mode: ${mode(numbers)}`);
findprimes([47, 84, 75, 21, 14, 14, 79])

