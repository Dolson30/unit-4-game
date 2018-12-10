var finalNumber = 0;
var userNumber = 0;
var rubyValue = "0";
var sapphireValue = "0";
var emeraldValue = "0";
var diamondValue = "0";
var gameOver = true;
var wins=0;
var losses=0;


$(document).ready(function(){


function newGame()
{
    finalNumber = Math.floor(Math.random() * 101) + 19;
    rubyValue = Math.floor(Math.random() * 12) + 1;
    $("#ruby").val(rubyValue);
    sapphireValue = Math.floor(Math.random() * 12) + 1;
    $("#sapphire").val(sapphireValue);
    emeraldValue = Math.floor(Math.random() * 12) + 1;
    $("#emerald").val(emeraldValue);
    diamondValue = Math.floor(Math.random() * 12) + 1;
    $("#diamond").val(diamondValue);
    $("#matchNum").text(finalNumber.toString());
    userNumber = 0;
    $("#score").text(userNumber);
    gameOver = false;


}

$(".jewel").click(function()
{
    if(gameOver === true)
    {
        newGame();
    
    }
    else
    {
        userNumber = userNumber + parseInt($(this).val());
        $("#score").text(userNumber.toString());
    }

    if(userNumber === finalNumber)
    {
        $("#matchNum").text("You Win! Click a jewel to restart the game!");
        wins = wins + 1;
        $("#wins").text("Your Wins: " + wins);
        gameOver = true;
    }
    else if(userNumber > finalNumber)
    {
        $("#matchNum").text("You Lose! Click a jewel to restart the game!");
        losses = losses + 1;
        $("#losses").text("Your Losses: " + losses);
        gameOver = true;
    }
    else
    {

    }


})



})