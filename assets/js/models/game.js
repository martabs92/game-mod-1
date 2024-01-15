
class Game {

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.height = CANVAS_H;
        this.canvas.width = CANVAS_W;
        this.ctx = this.canvas.getContext('2d');

        this.fps = FPS;
        this.drawIntervalId = undefined;

        this.rabbit = new Rabbit(this.ctx, 100, 100);
    }

    onKeyEvent(event) {
        this.rabbit.onKeyEvent(event);
    }

    start(){
        if (!this.drawIntervalId) {
           this.drawIntervalId = setInterval(() => {
            this.draw();
            }, this.fps);
        }
    }

    stop() {
        clearInterval(this.drawIntervalId);
        this.drawIntervalId = undefined;
    }

    draw() {
        this.rabbit.draw()
    }
}

