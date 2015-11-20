/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    // 1. Reference to the <canvas> element
    var canvas = document.getElementById('draw-canvas');
    // 2. drawing context
    var ctx = canvas.getContext('2d');
    var mouseClick = false;

    // 3. Add an event listener for the mouseDown
    document.addEventListener('mousedown', function(evt) {
        ctx.beginPath();
        var downY = evt.clientY - canvas.offsetTop;
        var downX = evt.clientX - canvas.offsetLeft;
        ctx.moveTo(downX, downY);
        mouseClick = true;
    });

    // 4. Add an event listener for mouseMove
    document.addEventListener('mousemove', function(evt){
        if(mouseClick) {
            // How do you decide current mouse coordinator?
            var moveY = evt.clientY - canvas.offsetTop;
            var moveX = evt.clientX - canvas.offsetLeft;
            ctx.lineTo(moveX, moveY);
            ctx.stroke();
        }
    });

    // 5. Add an event listener or mouseUp
    document.addEventListener('mouseup', function(evt) {
        mouseClick = false;
        var moveY = evt.clientY - canvas.offsetTop;
        var moveX = evt.clientX - canvas.offsetLeft;
        ctx.lineTo(moveX, moveY);
        ctx.stroke();
    })


}); //DOMContentLoaded
