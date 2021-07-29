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
    return Math.floor(Math.random() * 7); 
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
    const goalsA = generateGoal()
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
q.reverse();


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


const w ={}

for (let i = 0; i < a.length; i++) {
    const r =[]
    r.push(a[i])
    r.push(q[i])
    w[`partido${i+1}`] = r

    console.log(`${r[0]} vs ${r[1]}`)
}

console.log(`********** RESULTADOS DE CUARTOS DE FINAL**********`);

const goalsQuarter = []
for(let i = 1; i < 5; i++){
    w[`partido${i}`] 
    let u = w[`partido${i}`] 

    const goalsA = generateGoal();
    const goalsB = generateGoal();
    const goals = [];
    if(goalsA > goalsB){
        goals.push(u[0])
    }else {
        goals.push(u[1])
    }
    goalsQuarter.push(goals)

    console.log(`${u[0]} ${goalsA } vs ${u[1]} ${goalsB}  => The winner is ${goals}`)
}

console.log(`********** SEMIFINALES **********`);

const semif = []
for(let i = 0; i < goalsQuarter.length ; i++){
    let h = goalsQuarter.splice(i,1)
    semif.push(h)           
}
const goalsZ = generateGoal();
const goalsC = generateGoal();
const g = []
const y = []
if(goalsZ > goalsC){
    g.push(semif[0])
    y.push(semif[1])
   
}else{
    g.push(semif[1]) 
    y.push(semif[0])
     
}

console.log(`${semif[0]} ${goalsZ} vs ${semif[1]} ${goalsC}  => the winner is ${g}`)

const goalsA = generateGoal();
const goalsB = generateGoal();
const f = []
const j = []
if(goalsA > goalsB){
    f.push(goalsQuarter[0])
    j.push(goalsQuarter[1])

}else{
    f.push(goalsQuarter[1])
    j.push(goalsQuarter[0])
}
console.log(`${goalsQuarter[0]} ${goalsA} vs ${goalsQuarter[1]} ${goalsB} => the winner is ${f}`)

console.log(`********** TERCER Y CUARTO PUESTO **********`);

const goalsV = generateGoal();
const goalsE = generateGoal();
const av = []
if(goalsV > goalsE) {
    av.push(y)
}else{
    av.push(j)
}
console.log(`${y}  ${goalsV } vs ${j}  ${goalsE} => the winner is ${av}`);
//console.log(`${goalsQuarter[0]} ${goalsA} vs ${goalsQuarter[1]} ${goalsB} => the winner is ${j}`)


console.log(`********** FINAL **********`);

const goalsP = generateGoal();
const goalsM = generateGoal();
const n = []
if(goalsP > goalsM) {
    n.push(g)
}else{
    n.push(f)    
}

console.log(`${g} ${goalsP} vs ${f} ${goalsM} => The winner is ${n}`)

console.log(`============================================`);
console.log(` ¡¡¡ ${n} champions EURO League!!! `);
console.log(`============================================`);












//cuartos de final y semifinales), indicando qué equipos se clasifican para
//la siguiente ronda (esto se mostrará desde octavos de final hasta semifinales).
//● Opcional: Una vez finalizadas las semifinales, se mostrará el resultado del partido de
//tercer y cuarto puesto (que se juega entre equipos no clasificados para la final).
//● Tras esto, se mostrará el resultado del partido de la final, anunciando posteriormente el
//equipo ganador como campeón del mundo