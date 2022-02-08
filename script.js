
var currentPlayer = "x";
var board = document.createElement("div");
board.style.width = "900px";
// board.style.height = "400px";
// board.style.backgroundColor ="green";
board.style.display = "flex";
board.style.flexWrap = "wrap";
board.style.flexDirection = "row";

board.style.position = "absolute";
board.style.top = "10%";
board.style.left = "10%";

var pos = 0;
var positions = [];
//   var ypositions = [];
var win = " ";
for (var i = 1; i <= 9; i++) {
    var box = document.createElement("div")
    box.style.width = "250px"
    box.style.height = "200px"
    box.style.background = "yellow"
    box.style.margin = "2px"
    box.style.border = "1px solid red"
    box.style.textAlign = "center"
    box.style.fontSize = "750%";
    box.setAttribute("id", i);
    box.addEventListener('click', function () 
    {
        //  console.log(typeof this.innerText);
        if (this.innerText == "") 
        {
            if (currentPlayer == "x") 
            {
                this.style.color = "blue";
                this.innerText = currentPlayer;
                positions[this.id] = currentPlayer;
                console.log("x position  " + this.id);
                currentPlayer = "o";
            }
            else
            {
                this.style.color = "red";
                this.innerText = currentPlayer;
                positions[this.id] = currentPlayer;
                console.log("O position  " + this.id);
                currentPlayer = "x";
            }
            if (pos >= 4)
            {
                 if (winnerCheck(positions) == "x") { console.log(" X is winner ");output("x"); setTime(() => { window.close();}, 2000); }
                 else
                 if(winnerCheck(positions) == "o") { console.log(" O is winner ");output("o");setTimeout(() => {window.close();  }, 2000); }
            }
            pos = pos + 1;
            if (pos==9 && (winnerCheck(positions) != "x") && (winnerCheck(positions) != "o"))
            { console.log(" Match draw ");output("Draw");setTimeout(() => {window.close(); }, 2000);  }
        }
    });

    board.appendChild(box);
};
document.body.appendChild(board);

function winnerCheck(positions)
{
    var iter = "x";
    for(var temp=0;temp<2;temp++)
    {
        if (positions[1] == iter)
        {
        if ((positions[2] == iter && positions[3] == iter ) || (positions[4] == iter  && positions[7] == iter ) || (positions[5] == iter  && positions[9] == iter ))
            return (iter);
        }
        if (positions[2] == iter  && positions[5] == iter && positions[8] == iter )
            return (iter );
        if(positions[3] == iter )
        {
            if ((positions[6] == iter  && positions[9] == iter ) || (positions[5] == iter  && positions[7] == iter ))
             return (iter );
        }
        if ((positions[4] == iter && positions[5] == iter && positions[6] == iter ) || (positions[7] == iter  && positions[8] == iter  && positions[9] == iter ))
            return (iter);
        iter='o';
    }
}

    function output(value) {
        var outDiv = document.createElement("div");
        outDiv.style.width = "500px";
        outDiv.style.height = "100px";
        outDiv.style.backgroundColor = "green";
      outDiv.style.position = "absolute";
     outDiv.style.top = "45%";
       outDiv.style.left = "20%";
        outDiv.style.color = "yellow";
        outDiv.style.fontSize = "350%";
        outDiv.style.textAlign ="center"
        if (value =='x' || value =='o')
            outDiv.innerHTML = "The Winner is " + value ;
        else
        outDiv.innerHTML = "Match is draw";
        document.body.appendChild(outDiv)
    }
