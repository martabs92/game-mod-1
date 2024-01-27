
class Score {

    constructor(ctx,x,y) {
        this.ctx = ctx;

        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 50;

        this.sprite = new Image();
        this.sprite.src = '/assets/img/score-img/Bigtweety.png';
        this.sprite.onload = () => {
            this.sprite.isReady = true;
        }

        this.points = 0;
    }

    inc() {
        this.points++;
    }

    draw() {
        if (this.sprite.isReady){
            this.ctx.drawImage(
            this.sprite,
            this.x,
            this.y,
            this.w,
            this.h
            );
            
            this.ctx.save();
            this.ctx.fillStyle = 'yellow';
            this.ctx.font = '30px RubikBurned';
            this.ctx.fillText(this.points, this.x + this.w + 10, Math.ceil(this.y + this.h/2));
            this.ctx.restore();

        }
    }



}