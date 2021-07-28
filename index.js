import teams from "./teams.js";
import shuffle from "./tools/extra.js";



//El programa comenzará indicando con un mensaje que “comienza el torneo”.

const message = "¡¡Comienza el torneo!! Los equipos que se disputan la Eurocopa son:";
console.log(message);

for (let i in teams) {
    const team = teams[i];  
    console.log(`${team}`);

    
}   
console.log(`============================================`);
console.log(`====COMIENZO DE LA FASE DE ELIMINATORIAS====`);
console.log(`============================================`);

console.log(`**********OCTAVOS DE FINAL**********`);


function generateGoal() {
    return Math.floor(Math.random() * 8); 
}

//quien juega con quien

const mixedTeam = shuffle(teams);
const copyMixedTeam = [
    ...mixedTeam
]

const octavos = [];
for (let i = 0; i < mixedTeam.length / 2 ; i++) {
    const match = []
    for (let j = 0; j < 2 ; j++) { 
        match.push(copyMixedTeam.pop());
    }
    octavos.push(match)
    
}

octavos.forEach(octavo => {
    console.log (`${octavo[0]}  vs ${octavo[1]} `);
  })

console.log(`**********RESULTADOS DE OCTAVOS DE FINAL**********`);

const winner = [];
octavos.forEach(octavo => {
    const goalsA = generateGoal();
    const goalsB = generateGoal();
    const quarterTeam = [];
//TODO cuando haya empate tienen que volver a jugar
    if(goalsA > goalsB){
        quarterTeam.push(octavo[0])
    }else{
    
        quarterTeam.push(octavo[1])
        
    }
    winner.push(quarterTeam)
    console.log(`${octavo[0]} ${goalsA}  vs ${octavo[1]} ${goalsB} => The winner is ${quarterTeam} `);  
    
});


console.log(`********** CUARTOS DE FINAL**********`);

const a = [];
const q = []; 
for (let i = 0; i < winner.length ; i++) {
    if(i > 3){
        q.push(winner[i][0]);
    }else{
        a.push(winner[i][0]);
    }
  

}
console.log(a);

q.reverse();
console.log(q);



const t = [
    ...a,
    ...q
]
function cuartos(array1, array2) {
    return {
        A : array1,
        Q : array2
    }
}
cuartos(a,q)
console.log(cuartos(a,q))

const w ={}

for (let i = 0; i < a.length; i++) {
    const r =[]
    r.push(a[i])
    r.push(q[i])
    w[`partido${i+1}`] = r
}


for(let i = 1; i < 5; i++){
    w[`partido${i}`] 
    let u = w[`partido${i}`] 
    console.log(`${u[0]} vs ${u[1]}`)
}











//cada equio debe mostrar los goles por consola, y de ahi el ganador












//cuartos de final y semifinales), indicando qué equipos se clasifican para
//la siguiente ronda (esto se mostrará desde octavos de final hasta semifinales).
//● Opcional: Una vez finalizadas las semifinales, se mostrará el resultado del partido de
//tercer y cuarto puesto (que se juega entre equipos no clasificados para la final).
//● Tras esto, se mostrará el resultado del partido de la final, anunciando posteriormente el
//equipo ganador como campeón del mundo