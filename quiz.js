var quiz_data = [
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

function addRadioEvent () {
    var options = document.getElementsByClassName("options")
    for (var o=0;o<options.length;o++) {
        var option = options[o]
        option.addEventListener("click",function (e) {
            if (e.target.hasAttribute("name") == false) {
                e.target.firstElementChild.checked = true
            }
        })
    }
}

function printResults() {
    for (var i = 0; i<6;i++) {
        console.log(quiz_data[i]["interest"],":",quiz_data[i]["results"])
    }
    console.log("")
}
function printQuestion (question) {
    var content = document.getElementById("content")
    content.textContent = ""
    var contentHTML = `
    <div id="question">${question}</div>
    <div id="input">
        <div class="options"><input type="radio" name="opt" checked="true">Hate</div>
        <div class="options"><input type="radio" name="opt">Dislike</div>
        <div class="options"><input type="radio" name="opt">Neutral</div>
        <div class="options"><input type="radio" name="opt">Like</div>
        <div class="options"><input type="radio" name="opt">Love</div>
    </div>
    `
    content.insertAdjacentHTML("beforeend",contentHTML)
    addRadioEvent()
}

function finishAllQuestions () {
    var q_sequence = document.getElementById("q-sequence")
    q_sequence.textContent = ""
    var contentHTML = `
    <div id="finish-container">
        <h2>You have finish all questions.</h2>
        <h4 style="margin: 0px;font-weight: lighter;">You can change your answers with the button below:</h4>
        <div id="view-all-container"><button id="view-all-btn">View all answers</button></div>
        <h4 style="margin: 0px;font-weight: lighter;">If you are ready use the submit button to see your results:</h4>
        <div id="submit-container"><button id="submit-btn">Submit</button></div>
    </div>
    `
    q_sequence.insertAdjacentHTML("beforeend",contentHTML)
    var view_all_btn = document.getElementById("view-all-btn")
    view_all_btn.addEventListener("click",function() {
        window.localStorage.setItem("quiz_data",JSON.stringify(quiz_data))
        window.open("all_answers.html","_self")
    })

    var submit_btn = document.getElementById("submit-btn")
    submit_btn.addEventListener("click",function () {
        window.localStorage.setItem("quiz_data",JSON.stringify(quiz_data))
        window.open("result.html","_self")
    })
}

function checkAnswered (int,ques) {
    if (quiz_data[int]["results"].length >= ques + 1) {
        return true
    }
    return false
}

function printProgress(i,q) {
    var progress = document.getElementById("progress")
    progress.textContent = ""
    var question_numb = q*6+i+1
    var progressHTML = `
        ${question_numb}/60
    `
    progress.insertAdjacentHTML("beforeend",progressHTML)
}

// Set question
var q = 0 //question index
var i = 0 //interest index
var question_div = document.getElementById("question")
var input_div = document.getElementById("input")
var question = quiz_data[i]["questions"][q]

printQuestion(question)
printProgress(i,q)
var next_btn = document.getElementById("next-btn")
next_btn.addEventListener("click",function () {
    if (q < 10) {
        var score = 0
        var  options = document.getElementsByName("opt")
        var checked = false
        for (var opt=0;opt<options.length;opt++ ) {
            if (options[opt].checked) {
                checked = true
                score = opt
                break
            }
        }
        if (checked) {
            var results = quiz_data[i]["results"]
            if (checkAnswered(i,q)) {results[q] = score}
            else {results.push(score)}
            i++
            if (i == quiz_data.length) {
                i = 0
                q++
            }
            if (q < 10) {
                
                question = quiz_data[i]["questions"][q]
                printQuestion(question)
                printProgress(i,q)
                if (checkAnswered(i,q) == true) {
                    var opt = quiz_data[i]["results"][q]
                    var options = document.getElementsByName("opt")
                    options[opt].checked = true
                }
            }
            else {finishAllQuestions()}
        }
        else {alert("Please answer the question!")}        
    }
    
})    

var back_btn = document.getElementById("back-btn")
back_btn.addEventListener("click",function () {
    if (i != 0 || q != 0) {

        i--
        if (i < 0) {
            i = quiz_data.length - 1
            q--
        }
        question = quiz_data[i]["questions"][q]
        printQuestion(question)
        printProgress(i,q)
        var opt = quiz_data[i]["results"][q]
        var  options = document.getElementsByName("opt")
        options[opt].checked = true
    }
})
