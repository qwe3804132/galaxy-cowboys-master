module scenes {
    export class StartScene extends objects.Scene {
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            
            this.Start();
        }

        public Start():void {
            this._welcomeLabel = new objects.Label("Welcome to Galaxy CowBoys", "60px", "Consolas", "#000000", 320, 240, true);
            this._startButton = new objects.Button(this.assetManager, "startButton", 320, 300);
            this.Main();
        }

        public Update():number {
            return objects.Game.currentScene;
                }

        public Main():void {
            this.addChild(this._welcomeLabel);

            this.addChild(this._startButton);
      
            this._startButton.on("click", this._startButtonClick);
        }
        private _startButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
          }
    }
}