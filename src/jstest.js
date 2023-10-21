// /**
//  Write a function "transformer()" that will take in a JSON and do the following transformations
//    1. If the key ends with "_price",
//       a. If the value is string that can be converted to a number, do the conversion and divide by 100
//       b. If not a number or a string that cannot be converted to a number, leave it as such
//    2. If the value is a string, suffix "String" to the key in the resultant JSON
//    3. If the value is an object and the keys are numbers, convert it to an array. Assume that if one of the keys is a
//    number, all of them will be numbers.
//    4. If the value is an array, convert it into an object with "value" as the array and "length" as the length of
//    the array

//  The checks should be done in the order given. The first rule that matches in the above list is applied to the
//  transformation.
//  The transformer should do a deep transformation by going through all the keys in the JSON i.e. if during parsing an
//  array/object is encountered, each element/property of that array/object should be further parsed based on the above
//  rules
//  */
//  function transformer(json) {}

//  /** Test case execution * */
//  const testCase = {
//    name: "Men's shirt",
//    total_price: "10000",
//    discounted_price: 9000,
//    text_price: "Nine thousand only",
//    variants: ["M", "S", "XL", "XXL"],
//    colors: {
//      0: "red",
//      1: "blue",
//      2: "green",
//    },
//    details: [
//      {
//        title: "Shirt for Men",
//        line_price: "10000",
//      },
//    ],
//  };
 
//  const expectedResult = {
//    nameString: "Men's shirt",
//    total_price: 100,
//    discounted_price: 90,
//    text_price: "Nine thousand only",
//    variants: {
//      value: ["M", "S", "XL", "XXL"],
//      length: 4,
//    },
//    colors: ["red", "blue", "green"],
//    details: {
//      value: [
//        {
//          titleString: "Shirt for Men",
//          line_price: 100,
//        },
//      ],
//      length: 1,
//    },
//  };
 
//  // Should print true
//  console.log(
//    JSON.stringify(transformer(testCase)) === JSON.stringify(expectedResult)
//  );


const testCase = {
       name: "Men's shirt",
       total_price: "10000",
       discounted_price: 9000,
       text_price: "Nine thousand only",
       variants: ["M", "S", "XL", "XXL"],
       colors: {
         0: "red",
         1: "blue",
         2: "green",
       },
       details: [
         {
           title: "Shirt for Men",
           line_price: "10000",
         },
       ],
     };
     
console.log(testCase)
const isPriceFiled = (key)=>{
    if(typeof key === 'string' && key.slice(key.length-6, key.length)==='_price'){
            return true
    }
}
const isObjectWithNumAsKey = (obj)=>{

    const keys = Object.keys(obj)
    return isNaN(typeof obj[keys[0]]) 
}
const transformer=(obj)=>{
    const keys  = Object.keys(obj)
    keys.forEach(key=>{
        
        if(isPriceFiled(key, obj[key])){
            const val = +obj[key]
            if(!isNaN(val)){
                obj[key] = obj[key]/100
            }
            // return obj
        }else if(typeof obj[key] === 'string' && isNaN(+key)){
            obj[key+'Sring'] = obj[key]
            delete obj[key]
            // return obj
        }else if(obj[key].constructor === Object && isObjectWithNumAsKey(obj[key])){
            console.log(key, obj[key], obj[key].constructor, typeof(obj[key]))
                obj[key] = Object.keys(obj[key]).map(_key=>{
                    return obj[key][_key]
                })
                // return obj
                
        }else if(Array.isArray(obj[key])){
            obj[key] = {
                value: obj[key],
                length: obj[key].length
            }
        }else if(typeof obj[key] === 'object'){
             transformer(obj[key])
        }
    })
    //
    // if(typeof value === 'Object'){
    //     const keys = Object.keys(value)
    //     console.log(key, value)
    //     for(let x=0; x<keys.length-1;x++){
    //         const _key = keys[x]
    //         const _value =  value[key]
    //         return transformer(_key, _value)
    //     } 
    // }
    return obj
}

console.log(transformer(testCase))

function calculateWithTimeout(n, timeoutInMs) {
        const timeoutPromise = new Promise((res,rej)=>{
            rej('time out')
        },timeoutInMs)
        return new Promise((res, reject)=>{
            Promise.race([timeoutPromise, calculate(n)]).then((val)=>{
                console.log('race', n, timeoutInMs)
                res(val)
            }).catch(e=>reject(e))
        })
         
}

// // Test cases
// // 1. Logs 200 after 1 second because calculate takes 1 second to calculate and the timeout given is 3000 ms = 3 seconds
// calculateWithTimeout(10, 3000)
//   .then(console.log);

// // 2. Logs "timed out" 500ms because calculate takes 1 second to calculate and the timeout given is 500 ms
// calculateWithTimeout(10, 500)
//   .catch(console.log);

// // 3. Logs "not a number"
// calculateWithTimeout("ten", 100)
//   .catch(ex => console.error(ex.message));


function calculate(n) {
    return new Promise((resolve,reject)=>{
        if(typeof n !== 'number'){
            reject({message:'Not aNumber'})
        }else{
            setTimeout(()=>{
                resolve(200)
            },1000)
        }
    })
}

// // Test cases
// // 1. Logs 200 after 1 second
// calculate(10)
//   .then(console.log);

// // // 2. Logs "Not a number"
// calculate("ten")
//   .catch(ex => console.error(ex.message));