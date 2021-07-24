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


console.log (`${octavos[0][0]} vs ${octavos[0][1]}`)
const A = octavos[0][0]
const B = octavos[0][1]


//● A continuación se deberán mostrar los resultados de los partidos en las diferentes rondas
// octavos 
//cada equio debe mostrar los goles por consola, y de ahi el ganador

const goals1 =  Math.floor(Math.random() * 3); 
console.log(goals1)
const goals2 =  Math.floor(Math.random() * 3); 
console.log(goals2)

function octavos() {
    this.nameTeam1 = nameTeam1;
    this.goals1 = goals1;
    this.nameTeam2 = nameTeam2;
    this.goals2 = goals2;

    octavos.setResult = function (nameTeam1) {
        this.nameTeam1 = nameTeam1;
        this.goals1 = goals1;
    }

    octavos.setResult = function (nameTeam2) {
        this.nameTeam2 = nameTeam2;
        this.goals2 = goals2;
    }
}

for ( const A of octavos){
    const results = {
        A : goals1,
        B : goals2
    }
    console.log(results)
}











//cuartos de final y semifinales), indicando qué equipos se clasifican para
//la siguiente ronda (esto se mostrará desde octavos de final hasta semifinales).
//● Opcional: Una vez finalizadas las semifinales, se mostrará el resultado del partido de
//tercer y cuarto puesto (que se juega entre equipos no clasificados para la final).
//● Tras esto, se mostrará el resultado del partido de la final, anunciando posteriormente el
//equipo ganador como campeón del mundo