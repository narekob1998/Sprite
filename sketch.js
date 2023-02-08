let spriteSheet;
let cyclop;
// let sx = 0;
// let sy = 0;
// let sw = 80;
// let sh = 80;
// let u = 0,
//     v = 0;
// let animationLength = 9;
// let currentFrame = 0;
// let x = 200;
// let moving = 0;
// let xDirection = 1;
let walKingAnimation;
let walKingAnimation2;
let cyclopAnimation;

function preload() {
    spriteSheet = loadImage("assets/56425 (1).png")
    cyclop = loadImage("assets/56428.png")

}

function setup() {
    createCanvas(400, 400);
    imageMode(CENTER)

    walKingAnimation = new WalKingAnimation(spriteSheet, 80, 80, 200, 200, 9);
    walKingAnimation2 = new WalKingAnimation(spriteSheet, 80, 80, 200, 300, 9);
    cyclopAnimation = new WalKingAnimation(cyclop, 80, 80, 200, 100, 9);
}

function draw() {
    background(220);
    walKingAnimation.draw();
    walKingAnimation2.draw();
    cyclopAnimation.draw();
    // if (moving != 0)

    //     u = currentFrame % animationLength;

    // else
    //     u = 0;

    // translate(x, 200)
    // scale(xDirection, 1);
    // image(spriteSheet, 0, 0, 80, 80, u * sw, v * sh, sw, sh);
    // if (frameCount % 6 == 0) {
    //     currentFrame++;


    // }

    // x += moving
}

function keyPressed() {
    walKingAnimation.keyPressed(RIGHT_ARROW, LEFT_ARROW);
    walKingAnimation2.keyPressed(UP_ARROW, DOWN_ARROW);
    // if (keyCode === RIGHT_ARROW) {
    //     moving = 1;
    //     xDirection = 1;
    //     currentFrame = 0;
    // } else if (keyCode === LEFT_ARROW) {
    //     moving = -1;
    //     xDirection = -1;
    //     currentFrame = 0;

}

function KeyReleased() {
    // if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    //     moving = 0;
    // }
    walKingAnimation.KeyReleased();
    walKingAnimation2.KeyReleased();


}
class WalKingAnimation {
    constructor(spritesheet, sw, sh, dx, dy, animationLength) {
        this.spriteSheet = spriteSheet;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.u = 0;
        this.v = 0;
        this.animationLength = animationLength;
        this.currentFrame = 0;
        this.moving = 0;
        this.xDirection = 1;
    }

    draw() {
        if (this.moving != 0)

            this.u = this.currentFrame % this.animationLength;

        else
            this.u = 0;
        push();
        translate(this.dx, this.dy)
        scale(this.xDirection, 1);
        image(this.spriteSheet, 0, 0, this.sw, this.sh, this.u * this.sw, this.v * this.sh, this.sw, this.sh);
        pop();
        if (frameCount % 6 == 0) {
            this.currentFrame++;


        }

        this.dx += this.moving
    }
    keyPressed(right, left) {
        if (keyCode === right) {
            this.moving = 1;
            this.xDirection = 1;
            this.currentFrame = 0;
        } else if (keyCode === left) {
            this.moving = -1;
            this.xDirection = -1;
            this.currentFrame = 0;
        }
    }
    KeyReleased(up, down) {
        if (keyCode === up || keyCode === down) {
            this.moving = 0;
        }

    }


}