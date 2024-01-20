
class Platform {
    
    constructor(ctx,x,y) {
        this.ctx = ctx;
        this.x = x;
        this.vx = PLATFORM_SPEED_MOVE;
        this.y = y;
        this.w = Math.ceil(50);
        this.h = Math.ceil(50);

        this.sprite = new Image();
        this.sprite.src = '/assets/img/0platform.png';
        this.sprite.verticalFrames = 1;
        this.sprite.verticalFrameIndex = 0;
        this.sprite.horizontalFrames = 1;
        this.sprite.horizontalFrameIndex = 0;

        this.sprite.onload = () => {
            this.sprite.isReady = true;
            this.sprite.frameWidth = Math.ceil(this.sprite.width);
            this.sprite.frameHeight = Math.ceil(this.sprite.height);
        }


        
    }

move() {
    this.x -= this.vx;
}


draw() {
    if (this.sprite.isReady) {
        this.ctx.drawImage( 
            this.sprite,
            this.sprite.horizontalFrameIndex,
            this.sprite.verticalFrameIndex,
            this.sprite.frameWidth,
            this.sprite.frameHeight,
            this.x,
            this.y,
            this.w,
            this.h,
        )
    }
}




}