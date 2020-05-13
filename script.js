(function() {
    const player = {
        position: 0,
        directionForward: true,

        moveForward(distance) {
            this.directionForward ? this.position += distance: this.position -= distance; 
        },
        moveBackward(distance) {
            this.directionForward ? this.position -= distance: this.position += distance; 
        },
        turnAround() {
            this.directionForward = !this.directionForward; 
        },
        printLocation() {
        console.log(`The current position of the player is ${this.position}`); 
        }
    };

player.moveForward(5);
player.moveBackward(3);
player.printLocation();
player.turnAround();
player.moveForward(10);
player.moveBackward(5);
player.printLocation();

})();

