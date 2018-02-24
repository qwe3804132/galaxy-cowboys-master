module ui {
    export class Button extends createjs.Bitmap {
        constructor(imageUrl:string, x:number=0, y:number=0, isCentered=false) {
            super(imageUrl);

            this.x = x;
            this.y = y;
            
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut)
        }

        public mouseOver():void {
            // mouseover effect
        }

        public mouseOut():void {
            // mouseout effect
        }
    }
}