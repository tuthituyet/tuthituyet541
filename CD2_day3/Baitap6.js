let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}
// let add = programming.push("go");
// console.log(add)
// // let add = Object.keys(languages = "go")
// // console.log(add)
let tag = Object.assign({difficulty: 7, programming})
console.log(tag)
console.log(Object.keys(programming))
console.log(Object.values(programming))