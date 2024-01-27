
class Tweety {

    constructor(ctx,x,y) {
        this.ctx = ctx;
        this.x = x;
        this.vx = TWEETY_SPEED_MOVE;
        this.y = y;
        this.w = Math.ceil(42);
        this.h = Math.ceil(42);

        this.sprite = new Image();
        this.sprite.src = '/assets/img/char-sprites/tweety-sprite.png';
        this.sprite.verticalFrames = 1;
        this.sprite.verticalFrameIndex = 0;
        this.sprite.horizontalFrames = 3;
        this.sprite.horizontalFrameIndex = 0;

        this.sprite.onload = () => {
            this.sprite.isReady = true;
            this.sprite.frameWidth = Math.ceil(this.sprite.width / this.sprite.horizontalFrames);
            this.sprite.frameHeight = Math.ceil(this.sprite.height / this.sprite.verticalFrames);
        }

        this.animationTick = 0;

        this.alive = true;

    }




move() {
    this.x -= this.vx;
}


draw() {
    if (this.sprite.isReady) {
        this.ctx.drawImage( 
            this.sprite,
            this.sprite.horizontalFrameIndex * this.sprite.frameWidth,
            this.sprite.verticalFrameIndex * this.sprite.frameHeight,
            this.sprite.frameWidth,
            this.sprite.frameHeight,
            this.x,
            this.y,
            this.w,
            this.h,
        )

        this.animate();
    }
}

animate() {
    this.animationTick++;
    
    if (this.animationTick >= TWEETY_RUN_ANIMATION_TICK) {
        this.animationTick = 0;

        this.sprite.horizontalFrameIndex++;
        if (this.sprite.horizontalFrameIndex >= this.sprite.horizontalFrames -1) {
            this.sprite.horizontalFrameIndex = 0;
        }
    }
}


}