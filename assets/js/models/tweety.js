
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
        this.lives = 1;

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

collidesWith(element) {
    return (
        this.x + SPRITE_AIR_X + this.w - SPRITE_AIR_W > element.x && 
        this.x + SPRITE_AIR_X < element.x + element.w - SPRITE_AIR_W &&
        this.y  + this.h - SPRITE_AIR_H > element.y &&
        this.y < element.y + element.h - SPRITE_AIR_H
        );
    }



isDead() {
    if (this.alive = false) {
        return this.score.inc() && this.lives <= 0;
    }
}



}