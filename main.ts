radio.setGroup(1)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(1)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendNumber(2)
    } else if (input.isGesture(Gesture.LogoUp)) {
        radio.sendNumber(3)
    } else if (input.isGesture(Gesture.LogoDown)) {
        radio.sendNumber(4)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(5)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(6)
    } else {
        radio.sendNumber(0)
    }
})
