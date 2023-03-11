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


function generateResume() {
    let nameField = document.getElementById("nameField").value;

    let nameTem1 = document.getElementById("nameTem1");
    nameTem1.innerHTML = nameField;
    // contacts

    document.getElementById("emailTem").innerHTML = document.getElementById("emailField").value;
    document.getElementById("numberTem").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressTem").innerHTML = document.getElementById("addressField").value;
    document.getElementById("linkdinTem").innerHTML = document.getElementById("linkedInField").value;
    document.getElementById("disTem").innerHTML = document.getElementById("disField").value;
    // work-experience
    let workExperience = document.getElementsByClassName("workField");
    let str = "";
    for (let e of workExperience) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("workExperienceTem").innerHTML = str;
    // academic-qualifications
    let eduField = document.getElementsByClassName("eduField");
    let strEdu = "";
    for (let i of eduField) {
        strEdu = strEdu + `<li> ${i.value} </li>`;
    }
    document.getElementById("academicQTem").innerHTML = strEdu;
    // skill
    document.getElementById("workExperienceTem").innerHTML = str;
    // academic-qualifications
    let skillField = document.getElementsByClassName("skillField");
    let strSkill = "";
    for (let i of skillField) {
        strSkill = strSkill + `<li> ${i.value} </li>`;
    }
    document.getElementById("skillSection").innerHTML = strSkill;
}



var doc = new jsPDF();


function saveDiv(divId, title) {
    doc.fromHTML(`<html><head><title>${title}</title></head><body>` + document.getElementById(divId).innerHTML + `</body></html>`);
    doc.save('div.pdf');
}
