var level01 = function(window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game, app) {
        // some useful constants 
        var groundY = game.groundY;
        var canvasWidth = app.canvas.width;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                { type: 'flyingSpike', x: 500, y: groundY - 105 },
                { type: 'flyingSpike', x: 800, y: groundY - 105 },
                { type: 'flyingSpike', x: 1100, y: groundY - 30 },
                { type: 'beartrap', x: 1400, y: groundY }
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);
        
        
        /*
        save the actual
        
        */

        // BEGIN EDITING YOUR CODE HERE
        for (var i = 0; i < levelData.gameItems.length; i++) {
            if (levelData.gameItems[i].type === 'flyingSpike') {
                var obstacle = createFlyingSpike(levelData.gameItems[i].x, levelData.gameItems[i].y)
                levelData.gameItems.obstacle = obstacle;
            }
            if (levelData.gameItems[i].type === 'beartrap') {
                createBearTrap(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }
        }

        function createFlyingSpike(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 20;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/flyingSpike.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            return myObstacle;
        }

        function createBearTrap(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 50;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/bearTrap.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -50;
            obstacleImage.y = -50;
        }


        var enemy = game.createGameItem('enemy', 25);

        function createEnemy(x, y) {

            var enemyImage = draw.bitmap('img/axe.png')
            enemy.addChild(enemyImage);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            enemy.rotationalVelocity = -10;
        }
        createEnemy(650, groundY - 50);

        enemy.onPlayerCollision = function() {
            console.log('The enemy has hit Halle');
            game.changeIntegrity(-20);

        }

        enemy.onProjectileCollision = function() {
            console.log('Halle has hit the enemy');
            game.increaseScore(100);
            enemy.fadeOut();
        }

        

        function createReward(x, y) {
            console.log("reward made")
            var rewardImage = draw.bitmap('img/trophy.png');
            var reward = game.createGameItem('reward', 10);
            reward.addChild(rewardImage);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -2;
            reward.onPlayerCollision = function() {
                reward.fadeOut();
                game.increaseScore(9900);
                console.log('Halle got the reward');
            };
        }
        createReward(1800, groundY - 150);


        // function update() {
        //     for (var i = 0; i < levelData.gameItems.length; i++) {

        //         var gameItem = levelData.gameItems[i];

        //         if (gameItem.x < -300) {
        //             gameItem.x = canvasWidth;
        //         }
        //     }
        // }
        // setInterval(50, update);

    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}