// Atividade 1
// let nome = prompt("Digite aqui seu nome: ")

// console.log(nome)

//Atividade 2
// let numero1 = prompt("Digite aqui um número: ")
// let numero2 = prompt("Digite aqui outro número: ")


// console.log(Number(numero1) + Number(numero2))

// Atividade 3
// let idade = prompt("Digite aqui sua idade ")

// let ano_atual = new Date().getFullYear()

// let ano_nascimento = ano_atual - Number(idade)

// console.log(ano_nascimento)

// Atividade 4
// let area = Number(prompt("Digite aqui a área do Círculo: "))

// console.log("A área do Círculo é: " + 3.14 * area ** 2)

// Atividade 5
// let valor = Math.floor(Number(prompt("Digite o valor em dolares: ")))

// console.log(Math.floor(valor / 0.85) + " Euros")

// Atividade 6
// let preco = Number(prompt("Digite o preço aqui: "))
// const desconto = preco * 0.1


// console.log(preco - desconto + " Reais")

// Atividade 7
// let metro = Number(prompt("Digite quantos metros deseja converter para cm: "))

// console.log(metro * 100 + " cm")

// Questão Desafio
// let salario_hora = Number(prompt("Digite aqui seu salário hora: ")) 
// let horas_trabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas no mês: "))
// const desc_inss = (salario_hora * horas_trabalhadas) * 0.05
// const desc_irrf = (salario_hora * horas_trabalhadas) * 0.11
// const desc_sindicato = (salario_hora * horas_trabalhadas) * 0.08

// console.log(`Salário Bruto: ${salario_hora * horas_trabalhadas}`)
// console.log(`Desc.IRRF: ${desc_irrf}`)
// console.log(`Desc.INSS: ${desc_inss}`)
// console.log(`Desc.Sindicato: ${desc_sindicato}`)
// console.log(`Líquido: ${(salario_hora * horas_trabalhadas) - desc_inss - desc_irrf - desc_sindicato}`)
// console.log(`Total dos Descontos é ${desc_inss+desc_irrf+desc_sindicato}`)

// Questão Extra - Calculo de IMC
// let idade = prompt("Qual sua Idade: ")
// let altura = prompt("Qual sua Altura: ")
// let peso = prompt("Qual seu Peso: ")

// let imc = Number(peso) / (Number(altura) ** 2)

// console.log(`Seu IMC é de ${imc.toFixed(1)} kg/m^2.`)