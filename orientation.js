let id = window.location.search.substring(4)
let job = {}
for (let i=0;i<data.length;i++) {
    if (data[i].id == id) {
        job = data[i]
        break
    }
}

name = job.job
let title = document.getElementById("title")
title.textContent = name
description = job.description
tasks = job.tasks
tasksHTML = ""
for (let i=0;i<tasks.length;i++) {
    tasksHTML += `<div><li>${tasks[i]}</div> </li>`
}

let requirements = job.requirements

let knowledge = requirements.knowledge
let knowledgeHTML = ""
for (let i=0;i<knowledge.length;i++) {
    knowledgeHTML +=
    `<div style="width:100%;"><b style="color: #660066;">${Object.keys(knowledge[i])[0]}</b></div>`
    for (let j=0;j<Object.values(knowledge[i])[0].length;j++) {
        knowledgeHTML += `<li>${Object.values(knowledge[i])[0][j]}</li>`
    }
    // knowledgeHTML += "</ul>"
}

let skills = requirements.skills
let skillsHTML = ""
for (let i=0;i<skills.length;i++) {
    skillsHTML +=
    `<b style="color: #cc5200;text-align:center;width:100%">${Object.keys(skills[i])[0]}</b>`
    for (let j=0;j<Object.values(skills[i])[0].length;j++) {
        skillsHTML += `<li>${Object.values(skills[i])[0][j]}</li>`
    }
}

let abilities = requirements.abilities
let abilitiesHTML = ""
for (let i=0;i<abilities.length;i++) {
    abilitiesHTML +=
    `<b style="color: #000080;text-align:center;width:100%">${Object.keys(abilities[i])[0]}</b>`
    for (let j=0;j<Object.values(abilities[i])[0].length;j++) {
        abilitiesHTML += `<li>${Object.values(abilities[i])[0][j]}</li>`
    }
}

let contentHTML = `    
<div style="display:flex;justify-content: center;color: #004488;margin:20px"><h1 style="font-size:50px"><b id="accountants"> ${name}</b></h1></div> 
<div class="row" style="justify-content:center;margin-top:50px;">
    <div id="description-container" class="rectangle" style="margin-right:20px">
        <p> <div> <b> Description </b> </div> 
            ${description}
        </p>
    </div>
    <div id="tasks-container" class="rectangle" style="margin-left:20px">
        <div> <b id="task">Tasks</b> </div> 
        <ul>
            ${tasksHTML}
        </ul>
    </div>
</div>

<div id="square-container">
    <div class="square" style="border-color:#660066">
        <h1 id="title" style="font-family: 'Amatic SC', cursive; color:#660066;text-align:center">KNOWLEDGE</h1>
        ${knowledgeHTML}
    </div>
    <div class="square" style="border-color:#cc5200">
        <h1 style="font-family: 'Amatic SC', cursive; color: #cc5200;text-align:center">SKILLS</h1>
        ${skillsHTML}
    </div>    
    
    <div class="square" style="border-color:#000080">
        <h1 style="font-family: 'Amatic SC', cursive; color: #000080;text-align:center">ABILITIES</h1>
        ${abilitiesHTML}
    </div>

</div>

`

var content = document.getElementById("details-content")
content.insertAdjacentHTML("beforeend",contentHTML)