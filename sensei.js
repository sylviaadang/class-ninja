
let Ninja = require('./ninja.js')


class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength)
        this.wisdom = 10
    }

    speakWisdom() {
        let message = super.drinkSake();
        console.log(message)
    }
}
