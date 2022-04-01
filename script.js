function addNewWork() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workField");
    newNode.classList.add("add-more-work");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Example: Sales Manager at BBC company Ltd. (2019 - 2021)");
    newNode.style.backgroundColor = "#3D4153";
    newNode.style.color = "#ffffff";
    let workE = document.getElementById("workE");
    let addworkbtn = document.getElementById("addworkbtn");

    workE.insertBefore(newNode, addworkbtn);
}

function addNewEdu() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eduField");
    newNode.classList.add("add-more-edu");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Example: High School Of Design (2000 - 2015) with GPA: 5");
    newNode.style.backgroundColor = "#3D4153";
    newNode.style.color = "#ffffff";
    let edu = document.getElementById("edu");
    let addEdu = document.getElementById("addEdu");

    edu.insertBefore(newNode, addEdu);
}

function addNewSkill() {
    console.log("hocce");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillField");
    newNode.classList.add("add-more-skill");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Type Here");
    newNode.style.backgroundColor = "#3D4153";
    newNode.style.color = "#ffffff";
    let skill = document.getElementById("skills");
    let addSkill = document.getElementById("addSkills");

    skill.insertBefore(newNode, addSkill);
}

