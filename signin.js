// Get all users data 
let allUsers = localStorage.getItem("usersdata")
allUsers = JSON.parse(allUsers)

function formSubmit(event){
    event.preventDefault();
    // Get email and password after submitting
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Get current user from localStorage
    let currentUser = localStorage.getItem("currentUser")

    // Find user account
    for (let i=0;i<allUsers.length;i++) {
        let user = allUsers[i]
        if (user.email == email & user.password == password) {
            currentUser = user

            localStorage.setItem("results",JSON.stringify(currentUser.testResult))
            localStorage.setItem("currentUser",JSON.stringify(currentUser))

            window.open("index.html","_self")
        }
    }

    // If not found
    if (currentUser == "{}") {
        let form = document.getElementsByTagName("form")[0]
        form.reset()
        alert("You're email or password is incorrect please try again")
    }
}