class UI1{

    constructor(){
    }
    
    display(){
        
        var button = createButton("START GAME")
        button.position(windowWidth/2,windowHeight/2+20);
        button.mousePressed(function(){



        button.hide();
        gameState=1;
        console.log(gameState)
        console.log("PRessed");
        });
    }

}