// Base a ser utilizada
const alunosDaEscola = [{
    nome: "Henrique",
    notas: [],
    cursos: [],
    faltas: 5
}, {
    nome: "Edson",
    notas: [],
    cursos: [],
    faltas: 2
}, {
    nome: "Bruno",
    notas: [10, 9.8, 9.6],
    cursos: [],
    faltas: 0
}, {
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
}, {
    nome: "Carlos",
    notas: [],
    cursos: [],
    faltas: 0
}, {
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "UX",
        dataMatricula: new Date
    }],
    faltas: 0
}];

const adicionarAluno = (nome) => {

    alunosDaEscola.push({
        nome: nome,
        notas: [],
        cursos: [],
        faltas: 0
    });

    console.log(`O(A) aluno(a) ${nome} foi adicionado com sucesso`);
    
}


const listarAlunos = (alunos) => {
    console.log("---Alunos da escola---");
    for (let aluno in alunos) {
        console.log(`------------------
        Nome: ${alunos[aluno].nome}
        Faltas: ${alunos[aluno].faltas}
        Notas: ${alunos[aluno].notas}`);
        for (let curso in alunos[aluno].cursos) {
            console.log(`
        Curso: ${alunos[aluno].cursos[curso].nomeDoCurso}
        Matricula: ${alunos[aluno].cursos[curso].dataMatricula}`);
        }
    }


    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
}

adicionarAluno("Anderson")
listarAlunos(alunosDaEscola);