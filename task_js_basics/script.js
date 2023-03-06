function spinalCase(str) {
  return str.split(/[ -/_]+|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

console.log(spinalCase('This Is Spinal Tap'))




function translatePigLatin(str) {
  let local = str;
  if(['a','o', 'i', 'e', 'u'].includes(local[0])){
    local+='way';
    }else{
      if(local[0]>='a' && local[0]<='z'){
        let letters = local.split('');
        let pos = 0, firstVowel = true;
        letters.forEach(el => {
          if(['a','o', 'i', 'e', 'u'].includes(el)){
            firstVowel= false;
          }
          if(firstVowel) pos++;
        })
        local = local.slice(pos,local.length)+local.slice(0,pos)+'ay';
      }
    };
  return local;
}

console.log(translatePigLatin("cfgonsonant"));


function myReplace(str, before, after) {
  if(before[0].match(/[A-Z]/)){
    after= after[0].toUpperCase()+after.slice(1);
  }else {
    after= after[0].toLowerCase()+after.slice(1);
  };  
  return str.replace( before, after);
}
let before = "sitting";
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));



function pairElement(str) {
  let arr = str.split(''), arrStr = [];
  const DNA = [['C','G'],['G','C'],['A','T'],['T','A']];
  arr.forEach(el => {
    DNA.forEach( pair => {
      if (el == pair[0] ){
         arrStr.push(pair);
      }
    } )
   
  });
  return arrStr;
}

console.log(pairElement("GCG"));


function fearNotLetter(str) {
  let missedLetters, alphabet = str.charCodeAt(0);
  let i = 0;
  do{
    if (str.charCodeAt(i)!= alphabet){
      missedLetters= String.fromCharCode(alphabet);
      alphabet++;
    }else {
      i++; alphabet++
    }

  } while(i<str.length);
  
  return missedLetters;
}

console.log(fearNotLetter("abce"));

function uniteUnique(arr) {
  let local = [...arguments], newArr = [];
  console.log(local);
  local.forEach(el => {
    el.forEach(num => {
      if (!newArr.includes(num)){
        newArr.push(num);
      }
    })
  })
  return newArr;
}

function uniteUnique2() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


function convertHTML(str) {
  const entities = {
    "&": "&amp",
    ">": "&lt",
    "<": "&rt",
    "\"": "&quot",
  }
  for (const [key, value] of Object.entries(entities)) {
    if(str.includes(key)){
      str = str.replaceAll(key, value);
    }
  };
  return str;
}

console.log(convertHTML("Dolce & > Gabbana"));

