function sumFibs(num) {
  let fib1 = 0, buf = 0, fib2 = 1, sum = 0;
  while(num >= fib2){
    if( fib2 % 2 != 0) sum += fib2; 
    buf = fib2;
    fib2 = fib1 + fib2;
    fib1 = buf;
  };
  return sum;
}

console.log(sumFibs(4));

//*****************************************************
function sumPrimes(num) {
  let flag = true, sum = 0;
  for(let i = 2; i <= num; i++){
    flag = true;
    for(let j=2; j < i; j++){
      if(i % j == 0){
        flag = false;
      }
    }
    if(flag){
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrimes(10));

//*****************************************************
function isPrime(num){
  let flag = true;
    for(let j=2; j < num; j++){
      if( num% j == 0){
        flag = false;
      }
    }
    
    return flag;
}

function smallestCommons(arr) {
  let factors = {};
  let num, 
    minArr = Math.min(arr[0], arr[1]),
    maxArr = Math.max(arr[0], arr[1]),
    primeArr = {};
  let primeFactors = [];
  for(let i = 2; i <=maxArr; i++){
    if (isPrime(i)) {
      primeFactors.push(i);
    }
  }
  for(let i = minArr; i <= maxArr; i++){
    factors = {};
      num = i;
    for(let j = 0; primeFactors[j] <= num; j++){
      while (num % primeFactors[j] === 0) {
            factors[primeFactors[j]] = (factors[primeFactors[j]]) ? factors[primeFactors[j]] + 1 : 1;
            num /= primeFactors[j];
      }
    }
    for (let prime in factors) {
      // Add factor to set or update number of occurrences
      if (!primeArr[prime] || factors[prime] > primeArr[prime]) {
        primeArr[prime] = factors[prime]
      }
    }
  }
  //console.log(primeArr);
  let multiple = 1;
  for (let prime in primeArr) {
    multiple *= prime ** primeArr[prime];
  }
  return multiple;
}

console.log(smallestCommons([2,10]));

//*****************************************************

/*Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/


function dropElements(arr, func) {
  let local = [];
  arr.every( (item, index) => {
    if (func(item)){
      console.log(item +' '+index);
      local =  arr.slice(index);
      return false;
    }
    return true;
  })
  

  return local;
}

function dropElements2(arr, func) {
  return arr.length > 0 && !func(arr[0])
    ? (dropElements(arr.slice(1), func))
    : arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
//*****************************************************

//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  const local = [];
  arr.forEach(item => {
      //console.log(flatten(item));
      //local.push(flatten(local,item));
    flatten(local,item)
  })
  return local;
}

function flatten(arr, item){
  if(Array.isArray(item) ){
    //console.log('array ',...item);
    return item.forEach( v => flatten(arr, v));
  }else {
    //console.log('not array', item);
    return  arr.push(item);
  }
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));


//**********************************************
// Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.


function binaryAgent(str) {
  let strLocal ;
  strLocal = str.split(' ').map(v => v = String.fromCharCode(parseInt(v, 2))).join('');
  return strLocal;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

//*************************************************

// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.


function truthCheck(collection, pre) {
  let flag = true;
  collection.forEach(item => {if(!item[pre]) flag = false} )
  return flag;
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
