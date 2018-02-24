module ui {
    export class Label extends createjs.Text {
        private _isCentered: boolean;

        constructor(
                labelString:string,
                fontSize:string,
                fontFamily:string,
                fontColour:string,
                x:number=0,
                y:number=0,
                isCentered:boolean=false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);
            
            if (isCentered) {
                this._isCentered = true;
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
        }
    }
}