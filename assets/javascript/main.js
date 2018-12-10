var finalNumber = 0;
var userNumber = 0;
var rubyValue = "0";
var sapphireValue = "0";
var emeraldValue = "0";
var diamondValue = "0";
var gameOver = true;
var wins=0;
var losses=0;
var options = [1,2,3,4,5,6,7,8,9,10,11,12];


$(document).ready(function(){


function newGame()
{
    options = [1,2,3,4,5,6,7,8,9,10,11,12];

    finalNumber = Math.floor(Math.random() * 101) + 19;

    index = Math.floor(Math.random() * 11);
    rubyValue = options[index];
    $("#ruby").val(rubyValue);
    options.splice(index, 1);


    index = Math.floor(Math.random() * 10);
    sapphireValue = options[index];
    $("#sapphire").val(sapphireValue);
    options.splice(index, 1);


    index = Math.floor(Math.random() * 9);
    emeraldValue = options[index];
    $("#emerald").val(emeraldValue);
    options.splice(index, 1);


   index = Math.floor(Math.random() * 8);
   diamondValue = options[index];
    $("#diamond").val(diamondValue);
    options.splice(index, 1);


    $("#matchNum").text(finalNumber.toString());
    $('#banner').removeClass('bg-danger').addClass('bg-info');
    $('#banner').removeClass('bg-success').addClass('bg-info');
    $("#status").text("Start clicking jewels!");
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
        $("#matchNum").text("You Win!");
        $('#banner').removeClass('bg-info').addClass('bg-success');
        wins = wins + 1;
        $("#wins").text("Your Wins: " + wins);
        $("#status").text("Click a jewel to restart!");
        gameOver = true;
    }
    else if(userNumber > finalNumber)
    {
        $("#matchNum").text("You Lose!");
        $('#banner').removeClass('bg-info').addClass('bg-danger');
        losses = losses + 1;
        $("#losses").text("Your Losses: " + losses);
        $("#status").text("Click a jewel to restart!");
        gameOver = true;
    }
    else
    {

    }


})



})