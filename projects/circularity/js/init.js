var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeRunner = function() {
        
        window.opspark.runner = {};
        var runner = window.opspark.runner;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables //
        var circle;
        var circles = [];
        var directionNumber = Math.random() * 1;

        // TODO 2 : Create a function that draws a circle  //
        var drawCircle = function() {
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas);
            view.addChild(circle);
            circles.push(circle);
            
            // increase velocity by a random number from 0 -> 3.5
            circle.velocityX *= Math.random() * 3.5;
            circle.velocityY *= Math.random() * 3.5;
            
        };
        
        

        // TODO 3 : Call the drawCircle function 5 times //
      

        // TODO 7 : Create a Loop to call drawCircle 100 times
        for (var counters = 0; counters < 550; counters++) {
            drawCircle();
        }
    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        runner.checkCircleBounds = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            

            // if the circle has gone out the right side of the screen then place it off-screen left
            if ( circle.x > canvas.width + circle.radius ) {
                circle.x = 0 - circle.radius;
                //circle.velocityX = -circle.velocityX;
            } 
            // TODO 5a) if the circle has gone out of the left side of the screen then place it off-screen right
            else if ( circle.x < 0 - circle.radius ) {
                circle.x = canvas.width + circle.radius;
                //circle.velocityX = -circle.velocityX;
            } 
            // TODO 5b) if the circle has gone out of the top side of the screen then place it off-screen bottom
            if ( circle.y < 0 - circle.radius ) {
                circle.y = canvas.height + circle.radius;
                //circle.velocityY = -circle.velocityY;
            }
            // TODO 5c) if the circle has gone out of the bottom side of the screen then place it off-screen top 
            else if ( circle.y > canvas.height + circle.radius) {
                circle.y = 0 - circle.radius;
                //circle.velocityY = -circle.velocityY;
            }
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        };
    
        var update = function() {
            // TODO 4 : Update the circle's position //
            // TODO 6 : Call checkCircleBounds on your circles.
            for (var i = 0; i < circles.length; i++) {
                runner.checkCircleBounds(circles[i]);
            }
            // TODO 8 : Iterate over the array
            for (var i = 0; i < circles.length; i++) {
                physikz.updatePosition(circles[i]);
            }

        };
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        runner.circle = circle;
        runner.circles = circles;
        runner.drawCircle = drawCircle;
        runner.update = update;
        
        app.addUpdateable(window.opspark.runner);
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
