const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Andre', 'Marjorie',
'Guilherme', 'Aline', 'Carlos', 'Paulo', 
'Bia', 'Vivian', 'Isabela', 'Vinicius', 
'Renan', 'Renata', 'Daisy', 'Camilo', 'Pedro'];

console.log("tamanhos da Array:", nomes.length);
const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);