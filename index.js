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

});

console.log ('ººººº RESULTADOS  OCTAVOS ººººº')

function generateGoal() {
    return Math.floor(Math.random() * 8); 
}


octavos.forEach(octavo => {
    const goalsA = generateGoal();
    const goalsB = generateGoal();

    const quarterTeam = [];
    if(goalsA > goalsB){
        quarterTeam.push(octavo[0])
    }else {
        quarterTeam.push(octavo[1])
    }
    console.log(`${octavo[0]} ${goalsA}  vs ${octavo[1]} ${goalsB} => The winner is ${quarterTeam} `);

    
    console.log(quarterTeam);
});

console.log(`********** CUARTOS DE FINAL**********`);










//function play(array) {
//    const goalsA = generateGoal();
//    const goalsB = generateGoal();
//    return {
//        teamA : goalsA,
//        teamB : goalsB
//    }
//}
//
//const players = play(octavos)
//
//function getWinner(array) {
//    const teamA = octavos[0];
//    const teamB = octavos[1];
//    octavos.sort(function (teamA, teamB) {
//        if(teamA.goalsA > teamB.goalsB){
//            return -1
//        }else {
//            return 1
//        }
//        
//    })
//    return octavos
//}
//
//const winner = getWinner(players).map(octavos => Object.assign({} , octavos));
//console.log(winner)




//● A continuación se deberán mostrar los resultados de los partidos en las diferentes rondas
// octavos 
//cada equio debe mostrar los goles por consola, y de ahi el ganador


//for ( const newResult of octavos){
//    const results = {
//        A : goals1,
//        B : goals2
//    }
//    console.log(results)
//    }











//cuartos de final y semifinales), indicando qué equipos se clasifican para
//la siguiente ronda (esto se mostrará desde octavos de final hasta semifinales).
//● Opcional: Una vez finalizadas las semifinales, se mostrará el resultado del partido de
//tercer y cuarto puesto (que se juega entre equipos no clasificados para la final).
//● Tras esto, se mostrará el resultado del partido de la final, anunciando posteriormente el
//equipo ganador como campeón del mundo