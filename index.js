console.log("hello i am hashir mehmoood");

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
const aa = [1, 2, 3, 4, 5].myMap((num, i, arr) => {
  return num * 3;
});
console.log(aa);

//  FIlter polyfill
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};
const bb = [1, 2, 3, 4, 5].myFilter((num) => {
  return num < 3;
});
console.log("filter", bb);

const reducerValue = [45, 32, 213, 45].reduce((accum, currentValue) => {
  return accum + currentValue;
});

console.log("reducerValue", reducerValue);

//reducer pollyfill

Array.prototype.myReducer = function (cb, initivalValue) {
  var accumulator = initivalValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};
const CustomReducer = [45, 32, 213, 45].myReducer((acm, currentValue) => {
  return acm + currentValue;
}, 0);
console.log("CustomReducer", CustomReducer);

// call method in js
let userDetails = {
  name: "hashir",
  age: 25,
  printDetails: function () {
    console.log(this.name);
  },
};
let userDetails2 = {
  name: "hashir21221",
  age: 212112,
};
userDetails.printDetails.call(userDetails2);

const str = "hasah";
let newStr = str.split("").reverse().join("");
console.log(newStr == str);

//by custom logic not using build in function
function isPal(palString) {
  let right = palString.length - 1;
  let left = 0;
  while (left < right) {
    if (palString[left] !== palString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log("dasi", isPal("hasah"));

// Find max occuring character in given string // Hello World

function maxOccuringfun(maxString) {
  const str = maxString.split("");
  let count = 0;
  let result = {};
  let max = 1;
  let char = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        ++count;
      }
    }
    result[str[i]] = count;
    count = 0;
    if (max < result[str[i]]) {
      max = result[str[i]];
      char = str[i];
    }
  }
  return char;
}
console.log("maxOccuringfun", maxOccuringfun("HellopWorlldddddd"));

// find frist sum is zero
//[-3,-5-,5,-2,3,1,0]
// firstly we sorted
function sorted(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      array[i], (array[j + 1] = array[j + 1]), array[i];
    }
  }
  return array;
}
const sortedArray = sorted([-3, -5, 5, -2, 3, 1, 0, 21]);
function fristSum(array) {
  console.log("array", array);
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return array[i], array[j];
      }
    }
  }
}
console.log(fristSum(sortedArray));

// string anagram
// hello -> elloh

// function AnaGram(str1, str2) {
//   if (str1.length === str2.length) {
//     for (var i = 0; i < str1.length; i++) {
//       for (var j = 0; j < str2.length; j++) {
//         if (str1[i] === str2[j]) {
//           var a = true;
//         }
//       }
//       if (!a) {
//         return false;
//       }else{
//         return a;
//       }
//     }
//   } else {
//     return false;
//   }
// }
function AnaGram(str1, str2) {
  if (str1.length === str2.length) {
 let counter={}
    for (var i of str1) {
      counter[i] = (counter[i] || 0) + 1;
    }
    for( let j of str2){
      if(!counter[j]){
        return false;
      }
      counter[j]-=1;
    }
     return true;
  } else {
    return false;
  }
 
}
console.log("--->", AnaGram("hello", "ellho"));

let vehicle = {
  wheels: '4',
  fuelType: 'Gasoline',
  color: 'Green'
}
let carProps = {
  type: {
    value: 'Volkswagen'
  },
  model: {
    value: 'Golf'
  }
}
console.log(car);
var car = Object.create(vehicle, carProps);
console.log(car);
// var let const
function test(){
  // let a="hello";
  let b="hi";
   
  if(true){
    let a= "123";
    // var b="345";
    console.log(a);
    console.log(b);
  }
}
test();