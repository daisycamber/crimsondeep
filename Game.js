// by Charlotte Grace Harper, 2013-2024
// v0.10101
var game;

var cycles = 0;

var background;
var filter;

var text;
var title;

var newGame;
var loadGame;
var settings;
var about;

var clicker;
class BootScene extends Phaser.Scene {
    // Preload assets for boot
    preload () {
        // For loading screen
        this.load.image('texture', '/ooze.png');
        /*this.load.script('filter', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Tunnel.js');*/
        this.load.image('logo', '/logo.png');
        this.load.image('about', '/credits.png');
        this.load.audio('music', '/soundtrack.mp3');
       // this.load.audio('click', '/click.mp3');        
        // Load neccesary assets
        console.log("Loading...");
        this.load.tilemapTiledJSON('map', '/map1.json');
 //       this.load.tilemap('map', '/map1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('kenney', '/kenney.png');
        this.load.spritesheet('drill', '/drill.png',{ frameWidth: 123, frameHeight: 90 }); // or 123
        this.load.audio('stairway', '/Stairway_To_Heaven.mp3');
        console.log("...done.");
        // All assets loaded
    }
    // Create boot screen
    create() {
        
       // clicker = this.sound.add('click');
        
        // For loading screen
        background = this.add.sprite(0, 0, 'texture');
        background.width = 800;
        background.height = 600;
        /*
        filter = this.add.filter('Tunnel', 800, 600, background.texture);
        */
        //	You have the following value to play with (default value is 2.0):
        filter.origin = 2.0;
        
        background.filters = [filter];
        
        var menuOpen = false;
        
        
        text = this.add.text(this.world.centerX, this.world.centerY, "Holton Studios Presents", { font: "65px Arial", fill: "#ffffff", align: "center" });
        text.anchor.setTo(0.5, 0.5);
        text.alpha = 0;
        
        title = this.add.text(20, 20, "Crimson Deep", { font: "bold 100px Arial", fill: "#ffffff", align: "center"});
        title.alpha = 0;

        this.time.events.add(500, function() {
                             this.add.tween(text).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);
                             }, this);
        this.time.events.add(4000, function() {
         this.add.tween(text).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true);
         }, this);
        
        this.time.events.add(4500, function() {
                             text.text = "A Jasper Holton \nProduction";
                             this.add.tween(text).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);
                             }, this);
        this.time.events.add(7500, function() {
                             this.add.tween(text).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true);
                             }, this);
        
        
        newGame = this.add.text(20, 120, "New Game", { font: "bold 60px Arial", fill: "#ffffff", align: "center"});
        newGame.alpha = 0;
        newGame.inputEnabled = true;
        newGame.events.onInputOver.add(function(){newGame.fill = '#AEAEAE'; if(menuOpen) clicker.play();}, this);
        newGame.events.onInputOut.add(function(){newGame.fill = '#FFFFFF';}, this);
        newGame.events.onInputDown.add(function(){
                                       actionOnClick();
                                       }, this);
        
        loadGame = this.add.text(20, 180, "Load Game", { font: "bold 60px Arial", fill: "#ffffff", align: "center"});
        loadGame.alpha = 0;
        loadGame.inputEnabled = true;
        loadGame.events.onInputOver.add(function(){loadGame.fill = '#AEAEAE';if(menuOpen)clicker.play();}, this);
        loadGame.events.onInputOut.add(function(){loadGame.fill = '#FFFFFF';}, this);
        
        settings = this.add.text(20, 240, "Settings", { font: "bold 60px Arial", fill: "#ffffff", align: "center"});
        settings.alpha = 0;
        settings.inputEnabled = true;
        settings.events.onInputOver.add(function(){settings.fill = '#AEAEAE';if(menuOpen)clicker.play();}, this);
        settings.events.onInputOut.add(function(){settings.fill = '#FFFFFF';}, this);
        
        about = this.add.text(20, 300, "About", { font: "bold 60px Arial", fill: "#ffffff", align: "center"});
        about.alpha = 0;
        about.inputEnabled = true;
        about.events.onInputOver.add(function(){about.fill = '#AEAEAE'; if(menuOpen)credits.alpha = 1;if(menuOpen)clicker.play();}, this);
        about.events.onInputOut.add(function(){about.fill = '#FFFFFF';credits.alpha = 0;}, this);
        about.events.onInputDown.add(function(){
                                     
                                             }, this);
        
        
        var logo = this.add.sprite(540, 430, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.alpha = 0;
        logo.scale.x = .7;
        logo.scale.y = .7;
        
        
        
        
        this.time.events.add(9000, function() {
                             this.add.tween(title).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);
                             this.add.tween(newGame).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);
                             this.add.tween(loadGame).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);
                             this.add.tween(settings).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);
                             this.add.tween(about).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);
                             this.add.tween(logo).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true);
                             menuOpen = true;
                             }, this);
        
        
        
        var credits = this.add.sprite(10, 10, 'about');
        credits.alpha = 0;
        credits.scale.x = 1;
        credits.scale.y = 1;
        
        
        
        // Play music
        music = this.sound.add('music');
        music.addMarker('soundtrack',34,50,1,true);
        music.play('soundtrack');
        
        
        
    }
    // Update boot screen
    update() {
        filter.update();
        
        cycles++;
        if(cycles == 400)
        {
            
        }
    }
    
    
}

function test() {
    
    //text.destroy();
    
}

function actionOnClick () {
    console.log('button clicked, starting main game');
    var config = {
        type: Phaser.AUTO,
        parent: 'tilegame',
        width: 800,
        height: 600,
        scene: GameScene
    };
    
    game = new Phaser.Game(config);
    music.stop();
}

function doSetup()
{
    var config = {
        type: Phaser.AUTO,
        parent: 'tilegame',
        width: 800,
        height: 600,
        scene: BootScene
    };
    
    game = new Phaser.Game(config);
}
doSetup();

class GameScene extends Phaser.Scene {
    // Not needed, game assets already loaded
    preload() {}
    // Create gam
    create() {
        console.log("Create2");
        console.log("Started");
        // Main game setup
        map = this.add.tilemap('map');
        
        map.addTilesetImage('kenney');
        
        layer = map.createLayer('Tile Layer 1');
        
        layer.resizeWorld();
        
        map.setCollisionByExclusion([1,20]);
        
        player = this.add.sprite(260, 1650, 'drill');
        this.physics.enable(player);
        player.body.bounce.set(0.1);
        player.body.tilePadding.set(32);
        player.body.collideWorldBounds = true;
        player.body.setSize(56,60);
        player.body.offset = new Phaser.Point(30,18);
        
        player.animations.add('left', [0, 1, 2, 1], 10, true);
        player.animations.add('right', [47,48,49,48], 10, true);
        
        player.animations.add('drillL', [23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47], 25000/drillingTime, true);
        player.animations.add('drillR', [69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93], 25000/drillingTime, true);
        
        
        this.camera.follow(player);
        
        this.physics.arcade.gravity.y = 300;
        
        cursors = this.input.keyboard.createCursorKeys();
        
        generateOres();
        
        // Play music
        music = this.sound.add('stairway');
        music.play();
        
        inventory = newFilledArray(200,0);
        
    }
    // Update game
    update() {
        
        // Handle collisions
        this.physics.arcade.collide(player, layer);
        
        
        
        // If the up (jump) button is pressed
        if (this.input.keyboard.isDown(Phaser.Keyboard.W) /*&& player.body.onFloor()*/)
        {
            player.body.velocity.y = -300; // Jump
        }
        // If the down (drill) button is pressed, then run this piece of code
        else if (this.input.keyboard.isDown(Phaser.Keyboard.S))
        {
            if(drillStage == 0 && (this.time.now > drillTimer + drillingTime) && player.body.onFloor()) startDrilling('down');
            
            // If block is ready to be broken
            if(drillStage == 1 && this.time.now > drillTimer + drillingTime * breakPoint) {
                
                mineTile(layer.getTileX(player.x + xOffset),layer.getTileY(player.y + yOffset) + 1);
                
                if(layer.getTileY(player.y) > 27)
                    map.putTile(20, layer.getTileX(player.x + xOffset), layer.getTileY(player.y + yOffset) + 1, layer);
                else
                    map.putTile(1, layer.getTileX(player.x + xOffset), layer.getTileY(player.y + yOffset) + 1, layer);
                drillStage = 2;
            }
            /*
             if(drilling && drillDirection != 'down') {
             console.log("stopped");
             drilling = false;
             tileBroken = false;
             }*/
        }
        
        // Move left
        if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
            facing = 'left';
            
            // Check if we should drill, or if we should walk
            if(player.body.blocked.left && (this.time.now > drillTimer + drillingTime))
            {
                if(drillStage == 0 && (this.time.now > drillTimer + drillingTime) && player.body.onFloor()) startDrilling('left');
                
                // If block is ready to be broken
                if(drillStage == 1 && this.time.now > drillTimer + drillingTime * breakPoint) {
                    
                    mineTile(layer.getTileX(player.x + xOffset) - 1,layer.getTileY(player.y + yOffset));
                    
                    if(layer.getTileY(player.y) > 28)
                        map.putTile(20, layer.getTileX(player.x + xOffset) - 1, layer.getTileY(player.y + yOffset), layer);
                    else
                        map.putTile(1, layer.getTileX(player.x + xOffset) - 1, layer.getTileY(player.y + yOffset), layer);
                    drillStage = 2;
                }
            }
            // Otherwise, just walk
            else {
                if(drillStage == 0)
                    player.animations.play('left');
                player.body.velocity.x = -150;
            }
            
        }
        
        // Move right
        else if (this.input.keyboard.isDown(Phaser.Keyboard.D)) {
            facing = 'right';
            
            // Check if we should drill, or if we should walk
            if(player.body.blocked.right && (this.time.now > drillTimer + drillingTime))
            {
                if(drillStage == 0 && (this.time.now > drillTimer + drillingTime) && player.body.onFloor()) startDrilling('right');
                
                // If block is ready to be broken
                if(drillStage == 1 && this.time.now > drillTimer + drillingTime * breakPoint) {
                    
                    mineTile(layer.getTileX(player.x + xOffset) + 1,layer.getTileY(player.y + yOffset));
                    
                    if(layer.getTileY(player.y) > 28)
                        map.putTile(20, layer.getTileX(player.x + xOffset) + 1, layer.getTileY(player.y + yOffset), layer);
                    else
                        map.putTile(1, layer.getTileX(player.x + xOffset) + 1, layer.getTileY(player.y + yOffset), layer);
                    drillStage = 2;
                    console.log("Drilled");
                }
            }
            // Otherwise, just walk
            else {
                if(drillStage == 0)
                    player.animations.play('right');
                player.body.velocity.x = 150;
            }
            
        }
        // If nothing needs to be animated, stop animations.
        else if((!this.input.keyboard.isDown(Phaser.Keyboard.D) && !this.input.keyboard.isDown(Phaser.Keyboard.A)) && drillStage == 0) {
            player.animations.stop();
            player.body.velocity.x = 0;
        }
        else {
            player.body.velocity.x = 0;
        }
        
        
        checkStoppedDrilling();
        
        checkFinishedDrilling();
    }
    
    render(){
        //  Useful debug things you can turn on to see what's happening
        
        // this.debug.spriteBounds(sprite);
        // this.debug.cameraInfo(this.camera, 32, 32);
        //this.debug.body(player);
        //this.debug.bodyInfo(player, 32, 32);
    }
}



var map;
var layer;
var cursors;
var player;
var facing = 'left';
var inventory;


function newFilledArray(len, val) {
    var rv = new Array(len);
    while (--len >= 0) {
        rv[len] = val;
    }
    return rv;
}


function generateOres()
{
    console.log("Starting ore generation...");
    
    placeOres(81, 2000, 36, 600);
    placeOres(82, 300, 850, 1000);
    placeOres(83, 1000, 400, 700);
    placeOres(84, 1000, 300, 600);
    
    placeOres(102, 1000, 100, 400);
    placeOres(103, 1000, 100, 400);
    placeOres(104, 1000, 100, 400);
    placeOres(105, 1000, 100, 400);
    
    
    console.log("Ore generation finished.");
    
    
}

function placeOres(tile, quantity, top, bottom) {
    for(i = 0; i < quantity; i++)
    {
        map.putTile(tile, Math.floor((Math.random() * 99) + 0), Math.floor((Math.random() * (bottom - top)) + top), layer);
    }
}


var drillTimer = 0;
var drillingTime = 2000;
var breakPoint = .2;

// 0 is not, 1 is drilling, 2 is tile broken
var drillStage = 0;
var drillDirection = 'down';

var playerLast = 0;

var counter = 0;

var playerMovedLast = true;

var xOffset = 70;
var yOffset = 60;

function mineTile(x,y) {
    var tile = map.getTile(x, y, layer).index;
    
    if(!(tile == 20 || tile == 1)) {
        inventory[tile]++;
    }
    console.log(inventory);
}



function startDrilling(dir) {
    // Handle animations
    if(facing == 'left')
        player.animations.play('drillL');
    else
        player.animations.play('drillR');
        
    // Remember that we started drilling
    drillStage = 1;
    
    // Remember our drill direction
    drillDirection = dir;
    
    // Start the timer so we know when to stop
    console.log("Starting drill");
    drillTimer = game.time.now;
}

function checkStoppedDrilling() {
    // If the player stopped drilling, stop the drilling and the animation.
    if(drillStage == 1 && drillDirection == 'left' && !game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        drillStage = 0;
        if(facing == 'left')
            player.animations.play('left');
        else
            player.animations.play('right');
            
        console.log("Drill stopped");
    }
    
    // If the player stopped drilling, stop the drilling and the animation.
    if(drillStage == 1 && drillDirection == 'down' && !game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        drillStage = 0;
        if(facing == 'left')
            player.animations.play('left');
        else
            player.animations.play('right');
        
        console.log("Drill stopped");
    }
    
    // If the player stopped drilling, stop the drilling and the animation.
    if(drillStage == 1 && drillDirection == 'right' && !game.input.keyboard.isDown(Phaser.Keyboard.D)) {
        drillStage = 0;
        if(facing == 'left')
            player.animations.play('left');
        else
            player.animations.play('right');
            
        console.log("Drill stopped");
    }
}

function checkFinishedDrilling() {
    // This means that we were drilling, but we have finished fully (so we can stop animating)
    if(drillStage == 2 && (game.time.now > drillTimer + drillingTime)) {
        drillStage = 0;
            
        // Reset animations
        if(facing == 'left')
            player.animations.play('left');
        else
            player.animations.play('right');
        console.log("Finished drill");
    }
}
