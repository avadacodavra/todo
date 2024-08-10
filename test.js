 let arr = [
    {
        car: "AUDI",
        model: "G12"
    },
    {
        car: "TOYOTA",
        model: "A2"
    },
    {
        car: "BHUGATI",
        model: "IP3"
    }
]//by default the name of the objects is the index of this array

arr.forEach((el)=> {
    return console.log(el.model);
})

let new_Arr = arr.map(function(el) { //creates a new array
    return "Model "+ el.model;
})


let nums = [1, 2, 3, 4, 5, 6, 7];
let even = nums.filter((num)=> (num % 2==0));
//here callback function is (num)=> (num % 2==0) and calling fucntion is .filter method

let new_Arr2 = arr.filter((num)=> {
    return num.model.length==3;
}
);

console.log(nums.every((el)=>(el%2==0))); // every method will take every element


console.log(nums.some((el)=>(el%2==0))); //gives true even if some elements give true
console.log(nums.reduce((res, el)=> (res+el))); //gives 18 as a result
console.log(nums.reduce((res, el) => {
    if(el % 2 === 0) {
        return res + el;
    }
    return res;
},0)); //here 0 is the initial value of res

let result = nums.reduce((res, el) => {
    return el > res ? el : res;
}, nums[0]);


nu = [10, 20 , 2 , 30, 70, 9];
console.log(nu.every((el)=>(el%10==0))); //TO FIND IF ALL ELEMENTS ARE MULTIPLES OF 10

let MIN = nu.reduce((min, el)=> el<min?el:min);  //TO FIND MINIMUM



//Rest

function sum(...args) {
    for(let i =0; i<args.length; i++){
        console.log("You gave us:", args[i]);
    }
}

function min(){ //doesn't matter if we use arguments here bcz we have used arguments keyword down below
    console.log(arguments); //here arguments is pre defined collection of the arguments passed
    console.log("The length is: ", arguments.length);
    ///arguments is not an array thus can't use array methods on it 
}


function max(msg, ...args){ //creates array //to rest means to collect in an array
    console.log("The array is: ", args);
    console.log(msg);
    return args.reduce((max, el)=> el>max?el:max);
}

//DESTRUCTING

let names = ["tony", "Raj", "Kavitha", 1, 2, "Shri"];

// let n1 = names[0];
// let n2 = names[1];

let [n1, n2, n3, ...others]= names;

//Similarly, we could do destructing in objects as well
const std = {
    name: "Akrish",
    age: 14,
    clas: 9,
    subjects: ["English", "Hindi", "math", "Science"],
    username: "akrishxd",
    password: "abcd",
    city: "Pune",
    food: "Paneer"
}


// let username = std.username;
// let name = std.name;

//we could rather use destructing

let {username: USER , password} = std;
//we can also store the key values in other variables

let { age: A, subjects: sub, city: place ="Mumbai", food="chicken"} = std; //this doesn't change the object in anyway



//problem 1
let sqsmav = (...arr) => {
    const square =arr.map((el) =>
        el*el);
    console.log(square);
    const sum = arr.reduce((sum, el)=>
        sum+=el, 0);
    console.log(`The sum is: ${sum}`);

    let getavg = sum/arr.length;
    console.log(`The avg is: ${getavg}`);

}

let arr = [1, 2, 3]

//problem 2
let new_arr = arr.map((el)=> el+5);

//problem 3
let arr2 = ["akrish", "Rahil", "Shyam"];
// let new_arr2 = arr2.map((el)=> el.toUpperCase());
//we can also make a function
function upper(...arr) {
    let new_arr2 = arr.map((el) => el.toUpperCase());
    return new_arr2;
}

//problem 4
const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
];
doubleAndReturnArgs([1,2,3],4,4);//[1,2,3,8,8]
doubleAndReturnArgs([2],10,4);//[2,20,8]
//problem 5

const mergeobj = (obj1, obj2) => ({
    ...obj1,
    ...obj2
})

let obj = mergeobj({a: 24, b: 56}, {c: 4, c: 6});


