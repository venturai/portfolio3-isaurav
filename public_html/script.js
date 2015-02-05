/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * this line of code is the color of the background
 * 
 */

$('document').ready(function(){
    
    $('.what').css('background-color', 'brown');
    
    $('div:last p:nth-child(3)').css('background-color', 'pink');
    
    $('p:last').css('color', 'blue');
    
    $('p:gt(1)').css('border-style', 'solid');
    
    $('p:first').css({'background-color':'brown', 'color':'brown'});
    
    $('h1').bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
    
    $('h1').bind('click',mouseClick);
    
    $('replaceWText').bind('click',replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
});

/* 
 * this line of code tells 
 */

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>Hallo</p>');
}

function replaceWText(){
    $('#replaceWText').text('Poooooo!!!');
}

function mouseOverMe(){
    $('h1').html('haaayy (;');
}

function mouseOutMe(){
    $('h1').html('lana del rey is bae!');
}

function mouseClick(){
    
    $('p').html('DO U LIKE IT?');
} 



