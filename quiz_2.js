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

// Print question depend on the question number
function printQuestion (q_numb) {
    let question = questionsList[q_numb]
    var q_block = document.getElementById("q-block")
    q_block.textContent = ""
    var contentHTML = `
    <div id="question">${question}</div>
    <div id="input">
        <div class="options" style="border-radius: 0px 20px 0px 0px;"><div class="number" >1</div><div class="label">Hate</div></div>
        <div class="options"><div class="number">2</div><div class="label">Dislike</div></div>
        <div class="options"><div class="number">3</div><div class="label">Neutral</div></div>
        <div class="options"><div class="number">4</div><div class="label">Like</div></div>
        <div class="options" style="border-radius: 0px 0px 20px 0px;"><div id="last" class="number">5</div><div class="label">Love</div></div>
    </div>
    `
    q_block.insertAdjacentHTML("beforeend",contentHTML)
    addRadioEvent()
}

function addRadioEvent () {
    var options = document.getElementsByClassName("options")
    for (var o=0;o<options.length;o++) {
        var option = options[o]
        option.addEventListener("click",function (e) {
            let clicked_btn = e.target
            if (clicked_btn.className != "options") {
                clicked_btn = clicked_btn.parentNode
            }
            console.log(options[0])
            console.log(clicked_btn.getElementsByClassName("number"))
        })
    }
}

printQuestion(q_numb)
