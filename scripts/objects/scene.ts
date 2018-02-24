module objects {
    export abstract class Scene extends createjs.Container {
        public assetManager;

        constructor(assetManager: createjs.LoadQueue) {
            super();
            this.assetManager = assetManager;
        }
    
        public Start():void { }

        public Update():number { 
            return 0;
        }

        public Main():void { }
    }
}