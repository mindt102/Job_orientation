const quiz_data = [
    {   "interest" : "realistic",
        "questions" : [
            "Build kitchen cabinets",
            "Lay brick or tile",
            "Repair household appliances",
            "Raise fish in a fish hatchery",
            "Assemble electronic parts",
            "Drive a truck to deliver packages to offices and homes",
            "Test the quality of parts before shipment",
            "Repair and install locks",
            "Set up and operate machines to make products",
            "Put out forest fires",],
        "results" : []
    },
    {
        "interest" : "investigative",
        "questions" : [
            "Develop a new medicine",
            "Study ways to reduce water pollution",
            "Conduct chemical experiments",
            "Study the movement of planets",
            "Examine blood samples using a microscope",
            "Investigate the cause of a fire",
            "Develop a way to better predict the weather",
            "Work in a biology lab",
            "Invent a replacement for sugar",
            "Do laboratory tests to identify diseases",],
        "results" : [],
    },
    {
        "interest" : "artistic",
        "questions" : [
            "Write books or plays",
            "Play a musical instrument",
            "Compose or arrange music",
            "Draw pictures",
            "Create special effects for movies",
            "Paint sets for plays",
            "Write scripts for movies or television shows",
            "Perform jazz or tap dance",
            "Sing in a band",
            "Edit movies",],
        "results" : [],
    },
    {
        "interest" : "social",
        "questions" : [
            "Teach an individual an exercise routine",
            "Help people with personal or emotional problems",
            "Give career guidance to people",
            "Perform rehabilitation therapy",
            "Do volunteer work at a non-profit organization",
            "Teach children how to play sports",
            "Teach sign language to people who are deaf or hard of hearing",
            "Help conduct a group therapy session",
            "Take care of children at a day-care center",
            "Teach a high-school class"],
        "results" : [],
    },
    {
        "interest" : "enterprising",
        "questions" : [
            "Buy and sell stocks and bonds",
            "Manage a retail store",
            "Operate a beauty salon or barber shop",
            "Manage a department within a large company",
            "Start your own business",
            "Negotiate business contracts",
            "Represent a client in a lawsuit",
            "Market a new line of clothing",
            "Sell merchandise at a department store",
            "Manage a clothing store"],
        "results" : [],
            
    },
    {
        "interest" : "conventional",
        "questions" : [
            "Develop a spreadsheet using computer software",
            "Proofread records or forms",
            "Install software across computers on a large network",
            "Operate a calculator",
            "Keep shipping and receiving records",
            "Calculate the wages of employees",
            "Inventory supplies using a hand-held computer",
            "Record rent payments",
            "Keep inventory records",
            "Stamp, sort, and distribute mail for an organization"],
        "results" : [],
    },
]

// Print question depend on the question number
function printQuestion (q_numb) {
    let question = questionsList[q_numb]
    var q_block = document.getElementById("q-block")
    q_block.textContent = ""
    var contentHTML = `
    <div class="question">${question}</div>
    <div id="choices" class="input">
        <div id="opt0" class="options" style="border-radius: 0px 20px 0px 0px;"><div class="number" >1</div><div class="label">Hate</div></div>
        <div id="opt1" class="options"><div class="number">2</div><div class="label">Dislike</div></div>
        <div id="opt2" class="options"><div class="number">3</div><div class="label">Neutral</div></div>
        <div id="opt3" class="options"><div class="number">4</div><div class="label">Like</div></div>
        <div id="opt4" class="options" style="border-radius: 0px 0px 20px 0px;"><div id="last" class="number">5</div><div class="label">Love</div></div>
    </div>
    `
    q_block.insertAdjacentHTML("beforeend",contentHTML) 
    addRadioEvent(q_numb)

    let next_div = document.getElementById("flow-index1")
    next_div.textContent = ""
    if (q_numb < 59) {
        let next_question = questionsList[q_numb + 1]
        let next_contentHTML= `
        <div class="question">${next_question}</div>
        <div style="display: flex;flex-flow: column;" class="input">
            <div class="number">1</div>
            <div class="number">2</div>
            <div class="number">3</div>
            <div class="number">4</div>
            <div class="number">5</div>
        </div>
        `
        next_div.style.opacity = "0.3"
        next_div.insertAdjacentHTML("beforeend",next_contentHTML)
    }

    let last_div = document.getElementById("flow-index-1")
    last_div.textContent = ""
    if (q_numb > 0) {
        let last_question = questionsList[q_numb - 1]
        let last_contentHTML= `
        <div class="question">${last_question}</div>
        <div style="display: flex;flex-flow: column;" class="input">
            <div class="number">1</div>
            <div class="number">2</div>
            <div class="number">3</div>
            <div class="number">4</div>
            <div class="number">5</div>
        </div>
        `
        last_div.insertAdjacentHTML("beforeend",last_contentHTML)
        last_div.style.opacity = "0.3"
        let choiceList = last_div.getElementsByClassName("number")
        let answer = choiceList[results[q_numb-1]]
        answer.style.backgroundColor = "#ef6c77 "
    }



    
}

// Add function to add results after choosing an option
function addRadioEvent (q_numb) {
    var options = document.getElementsByClassName("options")
    for (var o=0;o<options.length;o++) {
        var option = options[o]
        option.addEventListener("click",function (e) {
            let clicked_btn = e.target
            if (clicked_btn.className != "options") {
                clicked_btn = clicked_btn.parentNode
            }

            let point = parseInt(clicked_btn.getElementsByClassName("number")[0].textContent) - 1
            // console.log(q_numb)
            // console.log(results.length)
            if (q_numb < results.length) {
                results[q_numb] = point
            }
            else {results.push(point)}
            nextFunction()
        })
    }
}

// Print progress
function printProgress(q_numb) {
    var progress = document.getElementById("progress")
    progress.textContent = ""
   
    let percentage = Math.floor(q_numb/60*100)
    progress.textContent = `: ${percentage}%`

    let white_space = document.getElementById("white-space")
    white_space.style.height = `${percentage}%`
}

// After finish all
function finishAllQuestions () {
    // var q_container = document.getElementById("q-sequence")
    // q_container.textContent = ""
    // var contentHTML = `
    // <div id="finish-container">
    //     <h2>You have finish all questions.</h2>
    //     <h4 style="margin: 0px;font-weight: lighter;">If you are ready use the submit button to see your results:</h4>
    //     <div id="submit-container"><button id="submit-btn">Submit</button></div>
    // </div>
    // `
    // q_container.insertAdjacentHTML("beforeend",contentHTML)

    // var submit_btn = document.getElementById("submit-btn")
    // submit_btn.addEventListener("click",function () {
        window.localStorage.setItem("quiz_data",JSON.stringify(results))
        window.open("result.html","_self")
    // })
}


function nextFunction () {
    q_numb ++ 
    if (q_numb < questionsList.length) {
        printQuestion(q_numb)
        printProgress(q_numb)
    }
    else {
        printProgress(q_numb)
        finishAllQuestions()
    }
}
//  Create a list of question from the data
let questionsList  = []
for (let q=0; q < 10; q++) {
    for (let i=0; i < 6;i++) {
        questionsList.push(quiz_data[i].questions[q])
    }
}
// Initialize the results
let results = []

// Start from 0
let q_numb = 0
printQuestion(q_numb)
printProgress(q_numb)
var next_btn = document.getElementById("next-btn")
next_btn.addEventListener("click",function() {
    if (q_numb < results.length) {
        nextFunction()
    }
    else {
        results[q_numb] = 2
        nextFunction()
    }
})

var back_btn = document.getElementById("back-btn")
back_btn.addEventListener("click",function () {
    if (results.length > 0) {
        q_numb--
        printQuestion(q_numb)
        printProgress(q_numb)
    }
})