let results = localStorage.getItem("results")
results = JSON.parse(results)

// Get current user
let currentUser = localStorage.getItem("currentUser")

// Get change all users data
let allUsers = localStorage.getItem("usersdata")
allUsers = JSON.parse(allUsers)

if (currentUser != "{}") {
    currentUser = JSON.parse(currentUser)
    currentUser.testResult = results
    for (let i=0;i<allUsers.length;i++) {
        let user = allUsers[i]
        if (user.email == currentUser.email) {
            allUsers[i] = currentUser
        }
    }

    localStorage.setItem("currentUser",JSON.stringify(currentUser))
    localStorage.setItem("usersdata",JSON.stringify(allUsers))
}


let points = document.getElementsByClassName("points")
points[0].textContent = results.realistic
points[1].textContent = results.investigative
points[2].textContent = results.artistic
points[3].textContent = results.social
points[4].textContent = results.enterprising
points[5].textContent = results.conventional
