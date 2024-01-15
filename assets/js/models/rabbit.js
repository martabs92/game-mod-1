
class Rabbit {

    constructor(ctx,x,y) {
        this.ctx = ctx;

        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 50;
    }

    onKeyEvent(event) {
        
    }

draw () {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);

}

}