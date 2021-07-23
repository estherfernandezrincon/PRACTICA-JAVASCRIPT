import teams from "./teams.js";
import shuffle from "./tools/extra.js";



//El programa comenzará indicando con un mensaje que “comienza el torneo”.

const message = "¡¡Comienza el torneo!! Los equipos que se disputan la Eurocopa son:";
console.log(message);

for (let i in teams) {
    const team = teams[i];
    
    console.log(`${team}`);
    
}   
console.log(`=========================`);

//quien juega con quien
 
const mixedTeam = shuffle(teams);

const team1 = mixedTeam.slice(0,2)
const team4 = mixedTeam.slice(6,8)
const team5 = mixedTeam.slice(8,10);
const team6 = mixedTeam.slice(10,12);
const team7 = mixedTeam.slice(12,14);
const team8 = mixedTeam.slice(14,);
const team3 = mixedTeam.slice(4,6)
const team2 = mixedTeam.slice(2,4)


//equipos del team1 juegan
//const goals =  Math.floor(Math.random() * 3); 

//function play(arr) {}














    












//● A continuación se deberán mostrar los resultados de los partidos en las diferentes rondas
//TODO octavos 



//cuartos de final y semifinales), indicando qué equipos se clasifican para
//la siguiente ronda (esto se mostrará desde octavos de final hasta semifinales).
//● Opcional: Una vez finalizadas las semifinales, se mostrará el resultado del partido de
//tercer y cuarto puesto (que se juega entre equipos no clasificados para la final).
//● Tras esto, se mostrará el resultado del partido de la final, anunciando posteriormente el
//equipo ganador como campeón del mundo