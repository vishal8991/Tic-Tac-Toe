console.log("tictic.js loaded successfully!!");
document.querySelector("body").style.backgroundColor = "#b5b4c4";
var divMenu = document.getElementById("menu");
var divGameMode = document.getElementById("gamemode");
//divMenu.style.backgroundColor = "#A05C1D";
//divGameMode.style.backgroundColor = "#c4c8fe";
var multiButton = document.getElementById("multi");
var computeButton = document.getElementById("compute");
var players = document.getElementById("players");
var battleGround = document.getElementById("battleGround");
battleGround.style.backgroundColor = "#1d1e2f";
battleGround.style.color = "white";
var playersValues = document.querySelectorAll("td");
multiButton.style.color = "white";
computeButton.style.color = "white";
multiButton.style.backgroundColor = "#1d1e2f";
multiButton.style.height = "40px";
computeButton.style.height = "40px";
computeButton.style.backgroundColor = "#1d1e2f";

var realPlayer="";
var isRealPlayerActive = true;
var isComputerPlayerActive = false;
var computerPlayer = "";
multiButton.addEventListener("click", function(){
    var player1 = prompt("Enter 1st player name");
    if(player1 == ""){
        alert("Please enter player1 name!!");
        return;
    }
    var player2 = prompt("Enter 2nd player name");
    if(player2 == ""){
        alert("Please enter player2 name!!");
        return;
    }
    divMenu.style.display = "none";
    divGameMode.style.display = "inline";
    realPlayer = player1;
    computerPlayer = player2;
    playersLog(player1, player2);
    isPlayerReady(); 
});
computeButton.addEventListener("click", function(){
    var player1 = prompt("Enter player name");
    if(player1 == ""){
        alert("Please enter player1 name!!");
        return;
    }
    divMenu.style.display = "none";
    divGameMode.style.display = "inline";
    var player2 = "Blanktek";  //Player name for computer 
    realPlayer = player1;
    computerPlayer = player2;
    playersLog(player1, player2);
    isPlayerReady(); 
});
multiButton.addEventListener("mouseover", function(){
    multiButton.style.backgroundColor = "#211f44";
});
computeButton.addEventListener("mouseover", function(){
    computeButton.style.backgroundColor = "#1d1e2f";
    alert("Computer button is disabled!!\nPlease play with another player right now computer is unavailable!!");
});
multiButton.addEventListener("mouseout", function(){
    multiButton.style.backgroundColor = "#1d1e2f";
});
computeButton.addEventListener("mouseout", function(){
    computeButton.style.backgroundColor = "#1d1e2f";
});
function arrangeMenu(){
    divGameMode.style.display = "none";
    computeButton.style.display = "none";
    //divMenu.style.display = "inline";
}
function playersLog(name1, name2){
    alert(name1+ " VS " + name2);
    players.innerText = name1+ " VS " + name2;
    players.style.color = "#2c6170";
    players.style.textAlign = "center";
    //battleGround.style.backgroundColor = "#c47136";
    //battleGround.style.color = "#ffffff";
    //battleGround.innerText = "";
    for(var i=0; i<playersValues.length; i++){
        playersValues[i].innerText = "";
    }
}
function isPlayerReady(){
    var isPlayerReady = confirm("Are you ready to beat me!!");
    if(isPlayerReady){
        startBattle();
    }
    else{
        players.innerText = "You are such a looser!!";
        return;
    }
}
function startBattle(){
    var countPlayerMoves = 0;
    var countComputerMoves = 0;
    var whoIsWinner = false;
    for(var i=0; i<playersValues.length; i++){
        //console.log("playersValues[i] = "+playersValues[i]);
        playersValues[i].style.width = "66px";
        playersValues[i].style.height = "66px";
        playersValues[i].addEventListener("click", function(){
            //alert("Click by players!!");
            //console.log("playersvalues["+i+"] = "+playersValues[i]);
            if(isRealPlayerActive){
                this.innerText = "X";
                this.style.backgroundColor = "#8d1515";
                countPlayerMoves++;
                if(countPlayerMoves >= 3){
                    //console.log("Moves of X = "+countPlayerMoves);
                    var x=0;

                        for(var j=0; j<3; j++){
                            x = j*3;
                            //console.log("j = "+j);
                            //console.log(playersValues[x].innerText + " =  playersValues["+x+"]");
                            if(playersValues[x++].innerText == "X"){
                                //console.log(playersValues[x].innerText + " =  playersValues["+x+"]");
                                if(playersValues[x++].innerText == "X"){
                                    //console.log(playersValues[x].innerText + " =  playersValues["+x+"]");
                                    if(playersValues[x++].innerText == "X"){
                                        //console.log(playersValues[x].innerText + " =  playersValues["+x+"]");
                                        confirm(realPlayer + " is the winner!!\nDo you want to try again?");
                                        document.location.reload(true);
                                        whoIsWinner = true;
                                        return;
                                    }
                                }  
                            } 
                        }
                        x=0;
                        for(var j=0; j<3; j++){
                            x = j;
                            if(playersValues[x].innerText == "X"){
                                x += 3; 
                                if(playersValues[x].innerText == "X"){
                                    x += 3; 
                                    if(playersValues[x++].innerText == "X"){
                                        confirm(realPlayer + " is the winner!!\nDo you want to try again?");
                                        document.location.reload(true);
                                        whoIsWinner = true;
                                        return;
                                    }
                                }
                                   
                            }
                            
                        }
                        for(var j=0; j<2; j++){
                            //console.log("j3 = "+j);
                            if(playersValues[4].innerText != "X"){
                                //console.log("break!!");
                                break;

                            }
                            x = 2*j;
                            //console.log("x = "+x);
                            if(playersValues[x].innerText == "X"){
                                x = 4; 
                                //console.log("xx = "+x);
                                if(playersValues[x].innerText == "X"){
                                    x = (x+4)-2*j; 
                                    //console.log("xxx = "+x);
                                    if(playersValues[x].innerText == "X"){
                                        //console.log("xxxx = "+x);
                                        confirm(realPlayer + " is the winner!!\nDo you want to try again?");
                                        document.location.reload(true);
                                        whoIsWinner = true;
                                        return;
                                    }
                                }
                                   
                            }
                               
                        }
                }
                isRealPlayerActive = false;
                isComputerPlayerActive = true;
            }
            else if(isComputerPlayerActive){
                //console.log("ComputerPlayerActive");
                this.innerText = "0";
                countComputerMoves++;
                isRealPlayerActive = true;
                isComputerPlayerActive = false;
                //countComputerMoves++;
                if(countComputerMoves >= 3){
                   //console.log("Moves of 0 = "+countComputerMoves);
                    var x=0;

                        for(var j=0; j<3; j++){
                            x=3*j;
                            //console.log("j = "+j);
                            //console.log(playersValues[x].innerText + " =  playersValues["+x+"]");
                            if(playersValues[x++].innerText == "0"){
                                //console.log(playersValues[x].innerText + " =  playersValues["+x+"]");
                                if(playersValues[x++].innerText == "0"){
                                    //console.log(playersValues[x].innerText + " =  playersValues["+x+"]");
                                    if(playersValues[x++].innerText == "0"){
                                        //console.log(playersValues[x].innerText + " =  playersValues["+x+"]");
                                        //alert(computerPlayer + " is the winner!!");
                                        if(confirm(computerPlayer + " is the winner!!Do you want to play again?")){
                                            whoIsWinner = true;                                            
                                            resetGameMode();
                                            document.location.reload(true);
                                            return;
                                        }
                                        document.location.reload(true);

                                    }
                                }  
                            } 
                        }
                        for(var j=0; j<3; j++){
                            x = j;
                            if(playersValues[x].innerText == "0"){
                                x += 3; 
                                if(playersValues[x].innerText == "0"){
                                    x += 3; 
                                    if(playersValues[x++].innerText == "0"){
                                        confirm(computerPlayer + " is the winner!!\nDo you want to try again?");
                                        document.location.reload(true);
                                        whoIsWinner = true;
                                        return;
                                    }
                                }
                                   
                            }
                            
                        }
                        for(var j=0; j<2; j++){
                            if(playersValues[4].innerText != "0"){
                                break;
                            }
                            x = 2*j;
                            if(playersValues[x].innerText == "0"){
                                x = 4; 
                                if(playersValues[x].innerText == "0"){
                                    x = (x+4)-2*j; 
                                    if(playersValues[x].innerText == "0"){
                                        confirm(computerPlayer + " is the winner!!\nDo you want to try again?");
                                        document.location.reload(true);
                                        whoIsWinner = true;
                                        return;
                                    }
                                }
                                   
                            }
                               
                        }
                }
            }
            if(countComputerMoves >= 5 || countPlayerMoves >= 5){
                if(!whoIsWinner){
                    alert("Draw!!\n");
                    
                }
            }
        });
    } 
    
}
function resetGameMode(){
    //prompt("Did you like the game?");
    // divGameMode.remove.innerText="";
    // playersLog(player1, player2);
    //                                         isPlayerReady(); 
                                     //alert("Reset!!");       
}

