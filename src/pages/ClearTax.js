// // create set interval that runs callback after given time
// //
// //
// // =[settimeout1, ]

// import { prototype } from "events"

// function mySetInterval(callback, timeout){
//     console.log('mySetInterval',this)
//     let timerId = setTimeout(()=>{
//         callback && callback.apply(this)
//         clearTimeout(timerId)
//         timerId = mySetInterval(callback, timeout)
//     }, timeout)
//     return timerId
// }

// function clearMySetInterval(timerId){
//     clearTimeout(timerId)
// }


// let globalCount = 0
// const f1 = () => {
//     globalCount++
//     console.log('f1',this)
// }
// const intervalId = mySetInterval(f1, 1*1000, )
// console.log(intervalId)
// if(globalCount === 4){
//     clearMySetInterval(intervalId)
// }
// // settimeout - 0sec - macro Q // callstack 
// // promise - 0sec - microQ
// // forloop - 5sec - 

// prototype =
// __proto__ = Array
// const x = []

// const myPromose = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('myPromose')
//     }, 5*1000)
// })
// myPromose.then((data)=>{
//     console.log(data)
// })
// // for loop for 5 sec


// // func1{
// //     var x = 4
// //     funct2
// // }
// function memoMyFunc(functionToMemo){
//     const cache= {}
//     const key = genKey(functionToMemo)
//     if(key){
//         cache[key]
//     }else{
//         const val = functionToMemo.apply(contex)
//         cache[key] = val
//     }
//     return function(params){
//         val
//     }
// }

// csr
// indexed.html
// commonbundles 
// pagebundles
// widgetbundles

// ssr 


// function genKey(){}


// module a 
//     module b
//         module c
//     module c


