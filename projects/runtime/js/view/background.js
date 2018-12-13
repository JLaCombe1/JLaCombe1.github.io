var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        
        // Add any variables that will be used by render AND update here:
        var tree;
        var jungleTreeGuard = [];
        var movingBackgroundArray = [];
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,ground.y,'white');
            background.addChild(backgroundFill);
            
            // Moving Background Image
            var movingBackground;
            var movingBackgroundHeight = 240;
            for (var i = 0; i < canvasWidth; i++) {
                movingBackground = draw.bitmap("img/infinateLoopImage.jpg");
                movingBackground.x = 415*i;
                movingBackground.y = 0;
                movingBackground.scaleY = groundY / movingBackgroundHeight;
                background.addChild(movingBackground);
                movingBackgroundArray.push(movingBackground);
            }
            
            
            // TODO: 5 - Add jungleTreeGuard!     Q: This is before TODO 4 for a reason! Why?
            var treeGuardHeight = 300;
            var treeGuard;
            for(var i=0;i<(canvasWidth/190);++i) {
                treeGuard = draw.bitmap("img/jungleTreeGuard.png");
                treeGuard.x = 200*i;
                treeGuard.y = groundY-treeGuardHeight + 10;
                background.addChild(treeGuard);
                jungleTreeGuard.push(treeGuard);
            }
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/jungleTree.png');
            tree.x = 0;
            tree.y = groundY - 170;
            background.addChild(tree);
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1;
            
            if(tree.x < -300) {
            tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < movingBackgroundArray.length; i++) {
                movingBackgroundArray[i].x--;
                if(movingBackgroundArray[i].x < -415) {
                    movingBackgroundArray[i].x = canvasWidth;
                }
            }
            
            
            for (var i = 0; i < jungleTreeGuard.length; i++) {
                jungleTreeGuard[i].x--; 
                if(jungleTreeGuard[i].x < -230){
                    jungleTreeGuard[i].x = canvasWidth;
                }
            }
        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
