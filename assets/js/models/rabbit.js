
class Rabbit {

    constructor(ctx,x,y) {
        this.ctx = ctx;

        this.x = x;
        this.vx = SPEED_MOVE;
        this.y = y;
        this.w = 50;
        this.h = 50;

        this.movements = {
            right: false,
            left: false,
        }
    }

    onKeyEvent(event) {
        const enabled = event.type === 'keydown';
        switch (event.keyCode) {
            case KEY_RIGHT:
                this.movements.right = enabled;
                break;
            case KEY_LEFT:
                this.movements.left = enabled;
                break;
        }
    }

move() {
    if (this.movements.right) {
        this.x += this.vx;
    } else if (this.movements.left) {
        this.x -= this.vx;
    }
}

draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
}

}