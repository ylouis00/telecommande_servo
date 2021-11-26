radio.setGroup(1)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
    } else if (input.logoIsPressed()) {
        radio.sendNumber(4)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendNumber(5)
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(6)
    } else {
        radio.sendNumber(0)
    }
})
