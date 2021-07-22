import teams from "./teams.js";


//El programa comenzará indicando con un mensaje que “comienza el torneo”.

const message = "¡¡Comienza el torneo!! Los equipos que se disputan la Eurocopa son:";
console.log(message);

for (let i in teams) {
    const team = teams[i];
    console.log(` ${ team}`);
    
}   
console.log(`=========================`);

//quien juega con quien
const team1 = [];
const team2 = [];
const team3 = [];
const team4 = [];
const team5 = [];
const team6 = [];
const team7 = [];
const team8 = [];


const newTeam = Math.floor(Math.random()*(15-0) +0); 
for (let i in teams) {
    team1.push(teams[newTeam]); 

    console.log(team1);
}











    












//● A continuación se deberán mostrar los resultados de los partidos en las diferentes rondas
//TODO octavos 



//cuartos de final y semifinales), indicando qué equipos se clasifican para
//la siguiente ronda (esto se mostrará desde octavos de final hasta semifinales).
//● Opcional: Una vez finalizadas las semifinales, se mostrará el resultado del partido de
//tercer y cuarto puesto (que se juega entre equipos no clasificados para la final).
//● Tras esto, se mostrará el resultado del partido de la final, anunciando posteriormente el
//equipo ganador como campeón del mundo