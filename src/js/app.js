(function(){
    let Game = require("./game"),
        myGame = new Game();

        myGame.init();
        myGame.start();
        document.body.onkeyup = function(e){
            if(e.keyCode == 32){
                myGame.pause();
            }
        };
}());