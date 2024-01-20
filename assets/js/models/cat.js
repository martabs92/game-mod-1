
class Cat {

    constructor(ctx,x,y) {
        this.ctx = ctx;

        this.x = x;
        this.vx = SPEED_MOVE;
        this.y = y;
        this.y0 = this.y;
        this.vy = 0;
        this.w = Math.ceil(170);
        this.h = Math.ceil(130);

        this.sprite = new Image();
        this.sprite.src = '/assets/img/cat.png';
        this.sprite.verticalFrames = 1;
        this.sprite.verticalFrameIndex = 0;
        this.sprite.horizontalFrames = 3;
        this.sprite.horizontalFrameIndex = 0;
       
        this.sprite.onload = () => {
            this.sprite.isReady = true;
            this.sprite.frameWidth = Math.ceil(this.sprite.width / this.sprite.horizontalFrames);
            this.sprite.frameHeight = Math.ceil(this.sprite.height / this.sprite.verticalFrames);
        }

        
        this.movements = {
            right: false,
            left: false,
            isJumping: false,
        }

        this.animationTick = 0;
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
            case KEY_UP:
                if (enabled) {
                    this.jump();
                }
                break;
        }
    }

jump() {
        if (!this.movements.isJumping) {
            this.movements.isJumping = true;
            this.y -= Math.ceil(this.h / 2);
            this.vy = -SPEED_JUMP;
        }
}

move() {
    if (this.movements.right) {
        this.x += this.vx;
    } else if (this.movements.left) {
        this.x -= this.vx;
    }

    if (this.y < this.y0) {
        this.vy += ACCELERATION;
        this.y += this.vy;
    } else {
        this.y = this.y0;
        this.movements.isJumping = false;
    }
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
    
    if (this.movements.isJumping) {
        this.sprite.horizontalFrameIndex = 1;
    } else if (this.animationTick >= CAT_RUN_ANIMATION_TICK) {
        this.animationTick = 0;
        this.sprite.horizontalFrameIndex++;

        if (this.sprite.horizontalFrameIndex > this.sprite.horizontalFrames -1) {
        this.sprite.horizontalFrameIndex = 0;
        }
    }
}


}