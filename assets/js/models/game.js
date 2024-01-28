
class Game {

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.height = CANVAS_H;
        this.canvas.width = CANVAS_W;
        this.ctx = this.canvas.getContext('2d');
        this.fps = FPS;
        this.drawIntervalId = undefined;

        this.background = new Background(this.ctx);
        this.cat = new Cat(this.ctx, CAT_X_PADDING, this.canvas.height - CAT_GROUND_PADDING);
        this.tweeties = [
            new Tweety(this.ctx, this.canvas.width - 80, this.canvas.height - TWEETY_GROUND_PADDING)
        ];

            this.addTweetyBackoff = 2000;
            setTimeout(() => this.addTweety(), this.addTweetyBackoff);


         this.enemies = [
            new Granny(this.ctx, this.canvas.width - 20, this.canvas.height - GRANNY_GROUND_PADDING)
        ];
        
            this.addEnemyBackoff = 2000;
            setTimeout(() => this.addEnemy(), this.addEnemyBackoff);


    
        this.score = new Score(this.ctx, 10, 30);

    
    }

    onKeyEvent(event) {
        this.cat.onKeyEvent(event);
    }

    start(){
        if (!this.drawIntervalId) {
           this.drawIntervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollisions();
            }, this.fps);
        }
        
    }

    checkCollisions() {
        this.enemies.forEach((enemy) => {
            if (enemy.collidesWith(this.cat)) {
                this.gameOver(); 
            }
        });

        this.tweeties.forEach((tweety) => {
            if (tweety.collidesWith(this.cat)) {
                this.score.inc();
            }
        })

    }

   

    addEnemy() {
        if (this.drawIntervalId) {
            this.enemies.push(new Granny(this.ctx, this.canvas.width, this.canvas.height - GRANNY_GROUND_PADDING));
        }

        this.addEnemyBackoff = Math.floor(Math.random() * 10 + 1) * 1000;
        setTimeout(() => this.addEnemy(), this.addEnemyBackoff);
    }

    addTweety() {
        if (this.drawIntervalId) {
            this.tweeties.push(new Tweety(this.ctx, this.canvas.width, this.canvas.height - TWEETY_GROUND_PADDING))
        }

        this.addTweetyBackoff = Math.floor(Math.random() * 10 + 1) * 1000;
        setTimeout(() => this.addTweety(), this.addTweetyBackoff);
    }


    stop() {
        clearInterval(this.drawIntervalId);
        this.drawIntervalId = undefined;
    }

    move() {
        this.cat.move();
        this.background.move();
        this.tweeties.forEach((tweety) => tweety.move());
        this.enemies.forEach((enemy) => enemy.move());

        if (this.cat.x < 0) {
            this.cat.x = 0;
        } else if (this.cat.x > this.canvas.width - this.cat.w) {
            this.cat.x = this.canvas.width - this.cat.w;
        }

       
    }

    draw() {
        this.background.draw();
        this.cat.draw();
        this.tweeties.forEach((tweety) => tweety.draw());
        this.enemies.forEach((enemy) => enemy.draw());
        this.score.draw();
        
    
    }

    clear() {
        
        this.tweeties = this.tweeties.filter((tweety) => (tweety.x + tweety.w) > 0 && !tweety.isDead());
        this.enemies = this.enemies.filter((enemy) => (enemy.x + enemy.w) > 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    gameOver() {
        this.stop();
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    this.ctx.fillTextStyle = "black";
    this.ctx.font = "40px RubikBurned";
    this.ctx.fillText = "FINISH!";
    this.ctx.strokeText(`OH NO! GAME OVER`,this.canvas.width/3, this.canvas.height/2);
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    const endPanel = document.getElementById('end-panel');
        endPanel.classList.remove('hidden');

    const endGameBtn = document.getElementById('btn-end-game');
    endGameBtn.addEventListener('click', () => {

        const endPanel = document.getElementById('end-panel');
        endPanel.classList.remove('hidden');

        const canvasPanel = document.getElementById('main-canvas');
        canvasPanel.classList.remove('hidden');

        document.location.reload();
        
    });
        
    }

}

