
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
        this.tweety = new Tweety(this.ctx, this.canvas.width - 80, this.canvas.height - TWEETY_GROUND_PADDING);
        this.granny = new Granny(this.ctx, this.canvas.width - 20, this.canvas.height - GRANNY_GROUND_PADDING);
        
    
        


        this.platform = new Platform(this.ctx, this.canvas.width - 80, this.canvas.heigth - PLATFORM_GROUND_PADDING);
    
    
    
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
            }, this.fps);
        }
    }

    stop() {
        clearInterval(this.drawIntervalId);
        this.drawIntervalId = undefined;
    }

    move() {
        this.cat.move();
        this.background.move();
        this.tweety.move();
        this.granny.move();
        this.platform.move();
    }

    draw() {
        this.background.draw();
        this.cat.draw();
        this.tweety.draw();
        this.granny.draw();
        this.platform.draw();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

