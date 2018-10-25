$(function() {
    var penalty = ["APOLOGIZE",
        "SWEAR",
        "SNAP YOUR FINGERS", 
        "CLAP AUDIBLY",
        "MISPRONOUNCE A WORD", 
        "HUM THREE NOTES",
        "SAY THREE CONSECUTIVE WORDS BEGINNING WITH THE SAME LETTER",
        "SAY TWO CONSECUTIVE RHYMING WORDS",
        "SAY THE NUMBER OF FINGERS HELD UP ON YOUR LEFT HAND", 
        "REMAIN SILENT FOR TEN SECONDS",
        "INTERRUPT THE INVESTIGATOR", 
        "SAY YOUR LAST NAME",
        "FAIL TO COMPLETE A SENTENCE", 
        "REPEAT A QUESTION WORD FOR WORD", 
        "SAY 'WHAT'", 
        "SAY AT LEAST THREE CONSECUTIVE LETTERS", 
        "BEGIN A NEW SENTENCE WITH THE LAST WORD SPOKEN" ]   

    var optionid; 
    $('.option').click(function(){
        optionid = $(this).attr('id'); 
        $('.options').fadeOut(1000); 
        $('.title').fadeOut(1000); 
        $('#penalty-board').delay(500).fadeIn(1000); 
    });

    var pick = []; 
    var repeat = false;
    var index = 0; 
    var number = 0; 
    while (pick.length < 3){
        number = Math.floor(Math.random()*penalty.length); 
        for (i=0; i<pick.length; i++){
            if (pick[i] == penalty[number]){
                repeat = true; 
            }
        }
        if (repeat == false){
            pick[index] = penalty[number]; 
            index = index + 1; 
        }
        repeat = false; 
    }
    
    $('.penalty-card h3').each(function(i){
        $(this).html(pick[i]); 
    });

    
    $('.penalty-card').click(function(){
        $(this).css({
            transition : 'background-color 1s ease-in-out', "background-color" : "black"
        });
        $(this, 'h3').css({
            color : 'black'
        }); 
        $(this).removeClass("active")
    }); 
}); 