const headerHTML = 
`
<div id="header" class="row">
    <div id="top_left" class="row icon">
        <a href="home_page.html"  id="Logo" ></a>
        <div id="search" class="row">
            <a href="#" class="icon" id="search_btn">
                    <i class="fas fa-search fa-3x" style="color:#3e85d6;"></i>
            </a>
        </div>
    </div>
    <div id="align-icons">
        <a href="quiz.html" class="icon">
            <i class="far fa-play-circle fa-3x" style="color:#3e85d6;"></i>
        </a>
        <a href="#ABOUT" class="icon">
            <i class="far fa-question-circle fa-3x" style="color:#3e85d6;"></i>
        </a>
        <a href="#" class="icon">
            <i class="far fa-user-circle fa-3x" style="color:#3e85d6;"></i>
        </a>
    </div>
</div>
`

const footerHTML = 
`
<div id="footer">
    <div style="width:100%;text-align:center;margin-bottom: 50px"><h1>ABOUT US</h1></div>
    <div id="ABOUT">
        <div class ="align-smaller-abouts">
            <div style="width:100%;display:flex;flex-flow:row;justify-content:space-around">
                <i class="fas fa-bolt fa-3x" style="color:black;"></i>
                <h3>Responsive</h3>
            </div>
            <h5 class ="text-align">Our team will response to your questions and problems ASAP !</h5>
        </div>
        <div class ="align-smaller-abouts">
            <div style="width:100%;display:flex;flex-flow:row;justify-content:space-around">
                <i class="far fa-heart fa-3x" style="color:black;"></i>
                <h3>Relationship</h3>
            </div>
            <h5 class ="text-align smaller-abouts">We believe that it’s the relationship that we build with you that will enable you to gain traction in the career that you’re pursuing.  We think of each of our clients as colleagues and want a long-term career partnership with you.</h5>
        </div>
        <div class ="align-smaller-abouts">
            <div style="width:100%;display:flex;flex-flow:row;justify-content:space-around">
                <i class="fas fa-user-tie fa-3x"></i>
                <h3>Professional</h3>
            </div> 
            <h5 class ="text-align">We’re not perfect and that’s okay with us; however, we are committed to doing everything to your satisfaction and high quality. We want you to leave every interaction with Clear Career with the sense that you’ve been treated like our most important client.</h5>
        </div>
    </div>
</div>
`

var content = document.getElementById("content")

// Add header before content
content.insertAdjacentHTML("beforebegin",headerHTML)

// Add search function to header
let search_btn = document.getElementById("search_btn")
let search_div = document.getElementById("search")

search_btn.addEventListener("click",function(){
    if (search_div.childElementCount == 1) {
        let search_barHTML= '<div><input type="text" id="search_bar"><div id="autocomplete-container"></div></div>'
        search_div.insertAdjacentHTML("beforeend",search_barHTML)

        let search_bar = document.getElementById("search_bar")
        let open_id = ""
        search_bar.addEventListener("input",function() {
            let autocomplete_container = document.getElementById("autocomplete-container")
            let inpString = search_bar.value.toLowerCase()
            autocomplete_container.textContent = ""
            if (inpString != "") {
                let searchResultsHTML =  search(inpString)
                autocomplete_container.insertAdjacentHTML("beforeend",searchResultsHTML)
                let resultsList = document.getElementsByClassName("autocomplete")
                if (resultsList[0].textContent != "No match") {
                    for (var r=0;r<resultsList.length;r++) {
                        resultsList[r].addEventListener("click",function(e) {
                            open_id = e.target.id
                            window.open('orientation.html'+'?id='+open_id,"_self")
                        })
                    }
                    let currentFocus = 0
                    open_id = resultsList[currentFocus].id
                    resultsList[currentFocus].classList.add("autocomplete-active")
                    
                    search_bar.addEventListener("keydown",function (e) {
                        if (e.keyCode == 13) {
                            open_id = resultsList[currentFocus].id
                            window.open('orientation.html'+'?id='+open_id,"_self")
                        }
                            
                        if (e.keyCode == 40) {
                            resultsList[currentFocus].classList.remove("autocomplete-active")
                            currentFocus ++
                            if (currentFocus == resultsList.length) {
                                currentFocus = 0
                            }
                            open_id = resultsList[currentFocus].id
                            resultsList[currentFocus].classList.add("autocomplete-active")                            
                        }   
                        if (e.keyCode == 38) {
                            resultsList[currentFocus].classList.remove("autocomplete-active")
                            currentFocus --
                            if (currentFocus < 0) {
                                currentFocus = resultsList.length - 1
                            }
                            open_id = resultsList[currentFocus].id
                            resultsList[currentFocus].classList.add("autocomplete-active")   
                        }
                    })
                }
                
            }          
            
        })        
    }
    else {
        let active_result = document.getElementsByClassName("autocomplete-active")[0]
        let open_id = active_result.id
        window.open('orientation.html'+'?id='+open_id,"_self")
    }
})

function search(inpString) {    
    let searchResults = ''
    let resultsCount = 0
    for (let i=0;i<data.length;i++) {
        let jobName = data[i].job.toLowerCase()
        if (jobName.startsWith(inpString)) {
            resultsCount ++
            let name = data[i].job 
            let limitLength = 30
            if (name.length >= limitLength) {
                name = name.substring(0,limitLength)
                name += "..."
            }
            searchResults += `<div id=${data[i].id} class="autocomplete">${name}</div>`
            if (resultsCount > 9) {break}
        }
    }
    if (searchResults.length == 0) {searchResults = '<div class="autocomplete">No match</div>'}
    return searchResults
}


// Add footer after content
content.insertAdjacentHTML("afterend",footerHTML)