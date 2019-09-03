function formSubmit(event){
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    if(password == confirmPassword) {
        // Reset users data
        // localStorage.setItem("usersdata",JSON.stringify([]))


        // Get all users data from local storage
        let usersData = localStorage.getItem("usersdata")
        if (usersData == null) {
            usersData = "[]"
            localStorage.setItem("usersdata",usersData)
        }
        usersData = JSON.parse(usersData)

        // Check if email has already been used
        let usedEmail = false
        for (let i=0;i<usersData.length;i++) {
            let user = usersData[i]
            if (user.email == email) {
                let form = document.getElementsByTagName("form")[0]
                form.reset()
                alert("Your email has already existed!")
                usedEmail = true
            }
        }

        if (!usedEmail ) {
            // Create new user
            let newUser = {
                email : email,
                password : password,
                testResult : [],
            }

            // Create the current user
            localStorage.setItem("currentUser",JSON.stringify(newUser))

            // Add new user to local storage
            usersData.push(newUser)
            localStorage.setItem("usersdata",JSON.stringify(usersData))

            // Check local storage after adding
            usersData = localStorage.getItem("usersdata")
            usersData = JSON.parse(usersData)

            // Return home after signing up successfully
            window.open("index.html","_self")
        }
    }
    else {
        alert("Your password and confirmation password are not the same!");
    }
}