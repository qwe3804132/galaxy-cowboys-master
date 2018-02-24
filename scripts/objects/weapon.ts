module objects {
    export class Weapon {
        public fireRate: number;
        public projectile: Projectile;

        constructor(fireRate:number, projectile:Projectile) {
            this.fireRate = fireRate;
            this.projectile = projectile;
        }
    }
}