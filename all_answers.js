
var quiz_data = window.localStorage.getItem("quiz_data")
quiz_data = JSON.parse(quiz_data)

var answers_container = document.getElementById("answers-container")


for (var q=0;q<10;q++) {
    for (var i=0;i<6;i++) {
        var interest = quiz_data[i]
        var question = interest["questions"][q]
        var answer = interest["results"][q]
        var ques_numb = q*6+i+1
        var answer_lineHTML = `
        
        <div class="answer-line row" style="margin:1px;width: 720px;height: 20px;">
            <div style="width:20px;text-align:right;margin-right:5px">${ques_numb}</div>
            <div class="row" style="border: solid black 0.5px;width: 100%;height: 20px;">    
                <div id="${ques_numb}" class="input-container row"style="width:240px;height: 100%;border-right: solid black 0.5px; justify-content: space-around;align-items: center">
                    <input type="radio" name="q${ques_numb}" style="margin:0px;">
                    <input type="radio" name="q${ques_numb}" style="margin:0px;">
                    <input type="radio" name="q${ques_numb}" style="margin:0px;">
                    <input type="radio" name="q${ques_numb}" style="margin:0px;">
                    <input type="radio" name="q${ques_numb}" style="margin:0px;">    
                </div>      
                <div style="padding-left: 20px;width = 100%;">${question}</div>
            </div>    
        </div>
        `
        answers_container.insertAdjacentHTML("beforeend",answer_lineHTML)
    
        var answers = document.getElementsByName(`q${ques_numb}`)
        answers[answer].checked = true


        }
    }

for (var q=0;q<10;q++) {
    for (var i=0;i<6;i++) {
        var input_container = document.getElementById(`${q*6+i+1}`)
        input_container.addEventListener("click",function (e) {
            input_container = e.target
            if (input_container.hasAttribute("name")) {
                input_container = e.target.parentNode
            }
            var input_list = input_container.getElementsByTagName("input")
            var ques_numb = Number(input_container.id)
            var interest_i = (ques_numb-1)%6
            var question_i = (ques_numb - 1 - interest_i) / 6
            for (var input_i = 0;input_i<input_list.length;input_i++) {
                if (input_list[input_i].checked == true) {
                    quiz_data[interest_i].results[question_i] = input_i
                }
            }            
        })            
    }        
}


var submitHTML = '<button id="submit-btn" style="margin-top: 13px;">Submit</button>'
answers_container.insertAdjacentHTML("beforeend",submitHTML)

var submit_btn = document.getElementById("submit-btn")
submit_btn.addEventListener("click",function () {       
    window.localStorage.setItem("quiz_data",JSON.stringify(quiz_data))
    window.open("result.html","_self")
})