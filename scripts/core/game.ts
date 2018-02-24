(function() {
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];
    let currentScene: objects.Scene;
    let helloLabel: ui.Label;
    let clickMeButton: ui.Button;
    let currentState: number;


    assetManifest = [
        {id: "clickMeButton", src:"./Assets/images/clickMeButton.png"},
        {id: "startButton", src:"./Assets/images/startButton.png"},
        {id: "nextMeButton", src:"./Assets/images/nextButton.png"},
        {id: "backButton", src:"./Assets/images/backButton.png"}
      ];

    function Init():void {
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start():void {
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        objects.Game.currentScene = config.Scene.START;
        Main();
    }

    function Update():void {
        if (currentScene.Update() != objects.Game.currentScene) {
            Main();
        }

        stage.update();
    }

    function Main():void {
        stage.removeAllChildren();
        
        switch (objects.Game.currentScene) {
            case config.Scene.START:
            stage.removeAllChildren();
      currentScene = new scenes.StartScene(assetManager);
      stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }

    window.onload = Init;

})