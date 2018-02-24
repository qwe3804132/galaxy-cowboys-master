module animate {
    export class Player extends Animate {
        constructor(assetManager:createjs.LoadQueue, imageName:string, hp:number, mvspd:number=1) {
            super(assetManager, imageName, hp, mvspd);
        }

        public Reset():void {

        }

        public CheckBounds():void {
            // Checking bottom boundary
            if (this.y >= objects.Game.HEIGHT + this.height) {

            }

            // Checking top boundary
            // Checking right boundary
            // Checking left boundary
        }

        public Move() {
            
        }

        public Update() {
            this.CheckBounds();
        }

        public Attack() {

        }
    }
}