var results = window.localStorage.getItem("quiz_data")
results = JSON.parse(results)


let realistic = 0       // mod 6 = 0
let investigative = 0   // mod 6 = 1          
let artistic = 0        // mod 6 = 2
let social = 0          // mod 6 = 3
let enterprising = 0    // mod 6 = 4
let conventional = 0    // mod 6 = 5

for (let i = 0; i < results.length;i++) {
    if (i % 6 == 0) {realistic += results[i]}
    if (i % 6 == 1) {investigative += results[i]}
    if (i % 6 == 2) {artistic += results[i]}
    if (i % 6 == 3) {social += results[i]}
    if (i % 6 == 4) {enterprising += results[i]}
    if (i % 6 == 5) {conventional += results[i]}
}

let points = document.getElementsByClassName("points")
points[0].textContent = realistic
points[1].textContent = investigative
points[2].textContent = artistic
points[3].textContent = social
points[4].textContent = enterprising
points[5].textContent = conventional
