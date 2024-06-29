let alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 5.0 },
    { nome: 'Ana', nota: 6.5 },
    { nome: 'Pedro', nota: 4.0 },
    { nome: 'Lucas', nota: 8.0 }
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

let alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
