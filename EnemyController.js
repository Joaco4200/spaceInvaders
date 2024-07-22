export default class EnemyController {
    enemyMap = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];
    enemyRows = [];

    constructor(canvas){
        this.canvas = canvas;
        this.createEnemys();
    }

    draw(ctx) {}

    createEnemys() {
        this.enemyMap.forEach((row,rowIndex) => {
            this.enemyRows[rowIndex] = [];
            row.forEach((enemyNumber, enemyIndex) => {
                if(enemyNumber > 0){
                    this.enemyNumber[rowIndex].push(new Enemy(enemyIndex * 50, this.enemyRows * 35, enemyNumber))
                }
            });
        });
    }
}

