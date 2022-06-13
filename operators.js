//  let time =  true
//  let distance  = false
// if(time === true && distance === true){
//     speed()
// }
// else{
//     console.log("sorry")
// }


//   function speed(){
//       console.log("you reached ur destination")

//   }
//  let time =  true
//  let distance  = false
// if(time === true || distance === true){
//     speed()
// }
// else{
//     console.log("sorry")
// }


//   function speed(){
//       console.log("you reached ur destination")

//   }
// const Bprice = 220
// const discount = 100
// const fullprice = Bprice + discount
// console.log(fullprice)
// let cot  = document.getElementById("container")

// cot.innerHTML = "<button onclick='buy()' >Buy!</button>"
// function buy(){
// //     cot.innerHTML += "<p >Thanks for purchasing!</p>"
// // }

// // let player = "Per"
// // let opponent = "Nick"
// // let game = "AmazingFighter"
// // let points = 0
// // let hasWon = false

// // points = 100
// // hasWon = true

// // if(hasWon){
// //     console.log(`${player} got ${points} points and won the ${game} game!`)

// // }
// // else{
// //     console.log("jbhfhbcbbbbb")
// // }
function generatesentence(desc, arr) {
    let basestring = `the ${arr.length} ${desc} are`
    const lastindex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastindex) {
            basestring += arr[i]
        }
        else{
            basestring += arr[i] +","
        }
    }
return basestring
}


 const sentence = generatesentence("tttttttttt",["yyy jjjj","K2"])
console.log(sentence)




















