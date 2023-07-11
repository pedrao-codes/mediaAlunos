function IsAverageEnough (studentName, firstTestGrade, secondTestGrade) {
  let message
  let average = (firstTestGrade + secondTestGrade) / 2

  if (average >= 7) {
    message = `${studentName} teve média de ${average} e foi aprovado(a) no concurso. Parabéns!`
  } else {
    message = `${studentName} teve média de ${average} e não foi aprovado(a) no concurso. \n\nContinue tentando, ${studentName}!`
  }

  return message
}

let students = [
  {
    name: "Pedro",
    firstTestGrade: 8,
    secondTestGrade: 6
  },
  {
    name: "José",
    firstTestGrade: 4,
    secondTestGrade: 3
  },
  {
    name: "Ákila",
    firstTestGrade: 9,
    secondTestGrade: 10
  }
]

let userOption

while (userOption != 3) {

  userOption = prompt("O que você deseja fazer? (Digite o número referente à opção)\n\n 1. Cadastrar um novo aluno\n 2. Ver as médias dos alunos cadastrados\n 3. Sair do programa\n")

  if (userOption == 1) {

    let studentName = prompt("Digite o nome do aluno: ")
    let firstTestGrade = prompt("Digite a nota da primeira prova: ")
    let secondTestGrade = prompt("Digite a nota da segunda prova: ")

    students.push({
      name: studentName,
      firstTestGrade: Number(firstTestGrade),
      secondTestGrade: Number(secondTestGrade)
    })

  } else if (userOption == 2) {

    for (let student of students) {
      alert(IsAverageEnough(student.name, student.firstTestGrade, student.secondTestGrade))
    }

  } else if (userOption == 3) {

    alert("Obrigado por utilizar o programa. Até mais!")

  } else {

    alert("Por favor, digite uma opção válida.")

  }
}