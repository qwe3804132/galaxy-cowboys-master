module objects {
    export abstract class GameObject extends createjs.Bitmap {
        protected _dy: number;
        protected _dx: number;

        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight: number;
        public position: createjs.Point;
        public isColliding: boolean;

        constructor(assetManager:createjs.LoadQueue, imageName:string) {
            super(assetManager.getResult(imageName));
            this.name = imageName;
            
            this._initialize();
        }

        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.position = new createjs.Point(this.x, this.y);
            this.isColliding = false;
        }

        public Reset():void { }

        public CheckBounds():void { }

        public Move():void { }

        public Start():void { }

        public Update():void { }
    }
}