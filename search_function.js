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

                
        // search_bar.addEvent
        
    }
    else {
        let active_result = document.getElementsByClassName("autocomplete-active")[0]
        let open_id = active_result.id
        window.open('orientation.html'+'?id='+open_id,"_self")
    }
})
// console.log(data[0])
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

