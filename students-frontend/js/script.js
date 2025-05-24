//Máscaras
$('#inputTelefone').mask('(00) 00000-0000');

//Alunos já cadastrados
var students = [
    // {
    //     id: 1,
    //     nome: 'Pedro Antônio',
    //     email: 'pedro.antonio@abutua.com',
    //     phone: '(15) 9999-9999',
    //     idCurso: 1,
    //     period: 3
    // },
    // {
    //     id: 2,
    //     nome: 'Maria Francisca',
    //     email: 'mariafr@gmail.com',
    //     phone: '(15) 1234-5678',
    //     idCurso: 2,
    //     period: 2
    // }
];

var courses = [
    // {id: 1, nome: 'Java'},
    // {id: 2, nome: 'Angular'},
    // {id: 3, nome: 'SQL'}
];

var periods = [
    // {id: 1, nome: 'Manhã'},
    // {id: 2, nome: 'Tarde'},
    // {id: 3, nome: 'Noite'}
];

//Carregar todos os students
function loadAlunos() {
    $.getJSON('http://localhost:8080/students', (response) => {
        let students = response;
        for(let stud of students)
            addNewRow(stud);
    })
}

loadAlunos();

function save() {
    const addAluno = 
    {
        id: students.length + 1,
        name: document.getElementById('inputNome').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputTelefone').value,
        idCurso: document.getElementById('selectCurso').value,
        period: pegarTurno()
    }

    addNewRow(addAluno);
    students.push(addAluno);

    document.getElementById('formAlunos').reset();
}

function pegarTurno() {
    const period = document.querySelector('input[name="gridRadios"]:checked').value;
    return period;
  }

function addNewRow(aluno) {
    var table = document.getElementById('studentsTable');

    var newRow = table.insertRow();
    
    //inserir id aluno
    var idNode = document.createTextNode(aluno.id);
    newRow.insertCell().appendChild(idNode);

    //inserir name aluno
    var nameNode = document.createTextNode(aluno.name);
    newRow.insertCell().appendChild(nameNode);

    //inserir email aluno
    var emailNode = document.createTextNode(aluno.email);
    var cellEmail = newRow.insertCell();
    cellEmail.className ='d-none d-md-table-cell';
    cellEmail.appendChild(emailNode);

    //inserir phone aluno
    var phoneNode = document.createTextNode(aluno.phone);
    var cellPhone = newRow.insertCell();
    cellPhone.className ='d-none d-sm-table-cell text-nowrap';
    cellPhone.appendChild(phoneNode);

    //inserir curso aluno
    //var courseNode = document.createTextNode(courses[aluno.idCurso - 1].name);
    var courseNode = document.createTextNode(aluno.idCurso);
    var cellCourse = newRow.insertCell();
    cellCourse.className = 'd-none d-sm-table-cell'
    cellCourse.appendChild(courseNode);

    //inserir period aluno
    //var periodNode = document.createTextNode(periods[aluno.period - 1].name);
    var periodNode = document.createTextNode(aluno.period);
    var cellShift = newRow.insertCell();
    cellShift.className = 'd-none d-sm-table-cell'
    cellShift.appendChild(periodNode);
}