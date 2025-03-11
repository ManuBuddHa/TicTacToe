const GameBoard = {
   gameboard: 
     ["","","",
      "","","",
      "","",""]
}
const result=document.querySelector(".result")
let marker="O";
let over=false;
const cells=document.querySelectorAll(".cell");
cells.forEach(cell => {
   cell.addEventListener("click",display);
});
function display(event){
   if(over) return;
      const index=event.target.dataset.index;
      const target=event.target;
      if(GameBoard.gameboard[index]==""){
         marker = marker === "X" ? "O" : "X";
         GameBoard.gameboard[index]=marker;
         target.textContent=marker;
         target.style.color= marker ==="O"? "red":"green";
         if(checkWin()){
            result.textContent=`${marker} wins`;
            over=true;
         }
         else if(GameBoard.gameboard.every(cell=>cell!=="")){
            result.textContent=`It's a Draw`;
            over=true;
         }
      }
}
const winningCombinations = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];
function checkWin(){
   for(const combination of winningCombinations){
      if(combination.every(y=>GameBoard.gameboard[y]==="X")){
         return true;
      }
      else if(combination.every(y=>GameBoard.gameboard[y]==="O")){
         return true;
      }
   }
}