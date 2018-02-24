module objects {
    export class Map extends createjs.Bitmap {
        private _dy: number;

        constructor(assetManager:createjs.LoadQueue, imageName:string) {
            super(assetManager.getResult(imageName));
            this.Start();
        }

        private _checkBounds():void {
            if (this.y >= 0) {

            }
        }

        private _move():void {
            this.y += this._dy;
        }

        public Start():void {
            this._dy = 5;
        }

        public Update():void {

        }
    }
}