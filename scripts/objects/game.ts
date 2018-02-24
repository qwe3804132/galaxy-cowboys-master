module objects {
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        
        public static readonly WIDTH = 640;
        public static readonly HEIGHT = 480;
        public static readonly FPS = 60;

        // Points that the player has to reach to start moving around the map
        public static readonly TOP_BOUNDARY = 200; // move up
        public static readonly BOTTOM_BOUNDARY = Game.HEIGHT - 20; // move down
        public static readonly LEFT_BOUNDARY = 10; // move left
        public static readonly RIGHT_BOUNDARY = Game.WIDTH - 10; // move right
    }
}