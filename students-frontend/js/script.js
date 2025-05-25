//Masks
$('#inputPhone').mask('(00) 00000-0000');

//Elements already registered
let students = [];

let courses = [];

let periods = [];

//Load functions
function loadCourses() {
    $.ajax({
        url: 'http://localhost:8080/courses',
        type: 'GET',
        async: false,
        success: (response) => {
            courses = response;
            addCourses(courses);
        }
    })
}

function addCourses(courses) {
    for(let course of courses)
       document.getElementById('selectCourse').innerHTML += `<option value="${course.id}">${course.name}</option>`;
}

function loadPeriods() {
    $.ajax({
        url: 'http://localhost:8080/periods',
        type: 'GET',
        async: false,
        success: (response) => {
            periods = response;
            addPeriods(periods);
        }
    })
}

function addPeriods() {
    for(let period of periods)
        document.getElementById('radioOptions').innerHTML += `
     <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="${period.id}" value="${period.id}" checked>
        <label class="form-check-label" for="gridRadios1">${period.name}</label>
    </div>
    `
}

function loadStudents() {
    $.getJSON('http://localhost:8080/students', (response) => {
        students = response;
        for(let student of students)
            addNewRow(student);
    })
}

//load all students
loadCourses();
loadPeriods();
loadStudents();

function save() {
    const addStudent = 
    {
        id: students.length + 1,
        name: document.getElementById('inputName').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputPhone').value,
        idCourse: document.getElementById('selectCourse').value,
        period: catchTurn()
    }

    addNewRow(addStudent);
    students.push(addStudent);

    document.getElementById('studentForm').reset();
}

function catchTurn() {
    const period = document.querySelector('input[name="gridRadios"]:checked').value;
    return period;
  }

function addNewRow(student) {
    let table = document.getElementById('studentsTable');

    let newRow = table.insertRow();
    
    //insert student id 
    let idNode = document.createTextNode(student.id);
    newRow.insertCell().appendChild(idNode);

    //insert student name
    let nameNode = document.createTextNode(student.name);
    newRow.insertCell().appendChild(nameNode);

    //insert student email
    let emailNode = document.createTextNode(student.email);
    let cellEmail = newRow.insertCell();
    cellEmail.className ='d-none d-md-table-cell';
    cellEmail.appendChild(emailNode);

    //insert student phone
    let phoneNode = document.createTextNode(student.phone);
    let cellPhone = newRow.insertCell();
    cellPhone.className ='d-none d-sm-table-cell text-nowrap';
    cellPhone.appendChild(phoneNode);

    //insert student course
    let courseNode = document.createTextNode(courses[student.idCourse - 1].name);
    let cellCourse = newRow.insertCell();
    cellCourse.className = 'd-none d-sm-table-cell'
    cellCourse.appendChild(courseNode);

    //insert student period
    let periodNode = document.createTextNode(periods[student.idPeriod - 1].name);
    let cellShift = newRow.insertCell();
    cellShift.className = 'd-none d-sm-table-cell'
    cellShift.appendChild(periodNode);
}