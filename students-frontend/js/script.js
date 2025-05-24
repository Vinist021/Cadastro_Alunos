//Máscaras
$('#inputTelefone').mask('(00) 00000-0000');

//Alunos já cadastrados
var students = [
    // {
    //     id: 1,
    //     name: 'Pedro Antônio',
    //     email: 'pedro.antonio@abutua.com',
    //     phone: '(15) 9999-9999',
    //     idCurso: 1,
    //     idPeriod: 3
    // },
    // {
    //     id: 2,
    //     name: 'Maria Francisca',
    //     email: 'mariafr@gmail.com',
    //     phone: '(15) 1234-5678',
    //     idCurso: 2,
    //     idPeriod: 2
    // }
];

var courses = [
    {id: 1, name: 'Java'},
    {id: 2, name: 'Angular'},
    {id: 3, name: 'SQL'}
];

var periods = [
    {id: 1, name: 'Manhã'},
    {id: 2, name: 'Tarde'},
    {id: 3, name: 'Noite'}
];



//Carregar todos os students
// function loadCourses() {
//     $.ajax({
//         url: 'http://localhost:8080/courses',
//         type: 'GET',
//         async: 'false',
//         success: (response) => {
//             courses = response;
//             addCourses(courses);
//         }
//     })
// }

// function addCourses(courses) {
//     for(let course of courses)
//        document.getElementById('selectCurso').innerHTML += `<option value="${course.id}">${course.name}</option>`;
// }

function loadStudents() {
    $.getJSON('http://localhost:8080/students', (response) => {
        let students = response;
        for(let stud of students)
            addNewRow(stud);
    })
}

loadStudents();
// loadCourses();

function save() {
    const addStudent = 
    {
        id: students.length + 1,
        name: document.getElementById('inputNome').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputTelefone').value,
        idCurso: document.getElementById('selectCurso').value,
        period: pegarTurno()
    }

    addNewRow(addStudent);
    students.push(addStudent);

    document.getElementById('formAlunos').reset();
}

function pegarTurno() {
    const period = document.querySelector('input[name="gridRadios"]:checked').value;
    return period;
  }

function addNewRow(student) {
    var table = document.getElementById('studentsTable');

    var newRow = table.insertRow();
    
    //inserir id student
    var idNode = document.createTextNode(student.id);
    newRow.insertCell().appendChild(idNode);

    //inserir name student
    var nameNode = document.createTextNode(student.name);
    newRow.insertCell().appendChild(nameNode);

    //inserir email student
    var emailNode = document.createTextNode(student.email);
    var cellEmail = newRow.insertCell();
    cellEmail.className ='d-none d-md-table-cell';
    cellEmail.appendChild(emailNode);

    //inserir phone student
    var phoneNode = document.createTextNode(student.phone);
    var cellPhone = newRow.insertCell();
    cellPhone.className ='d-none d-sm-table-cell text-nowrap';
    cellPhone.appendChild(phoneNode);

    //inserir curso student
    var courseNode = document.createTextNode(courses[student.idCurso - 1].name);
    var cellCourse = newRow.insertCell();
    cellCourse.className = 'd-none d-sm-table-cell'
    cellCourse.appendChild(courseNode);

    //inserir period student
    var periodNode = document.createTextNode(periods[student.idPeriod - 1].name);
    var cellShift = newRow.insertCell();
    cellShift.className = 'd-none d-sm-table-cell'
    cellShift.appendChild(periodNode);
}