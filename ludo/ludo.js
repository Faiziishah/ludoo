
let player_1= 0;
let player_2=0;
let player1_img=document.getElementById("player_1")
let player2_img=document.getElementById("player_2")
let winner=document.getElementById("winner")
let start=document.getElementById("start_game")
 start.addEventListener("click",()=>{

 player_1=Math.round(Math.random()*6)
 player_1=player_1>0?player_1:1;
 player_2=Math.round(Math.random()*6);
 player_2=player_2>0?player_2:1

   player1_img.src= `./images/dice-${player_1}.png`
   player2_img.src= `./images/dice-${player_2}.png`

if (player_1 <player_2){
    winner.textContent="player _1_wins."
   
}
else if (player_2<player_1){
    winner.textContent="player_2_wins."
}
    else {
winner.textContent="match_level."
}
 })
