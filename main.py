radio.set_group(1)
basic.show_icon(IconNames.SMALL_HEART)

def on_forever():
    if input.button_is_pressed(Button.A):
        radio.send_number(1)
    elif input.button_is_pressed(Button.B):
        radio.send_number(2)
    elif input.button_is_pressed(Button.AB):
        radio.send_number(3)
    elif input.logo_is_pressed():
        radio.send_number(4)
    elif input.is_gesture(Gesture.TILT_LEFT):
        radio.send_number(5)
    elif input.is_gesture(Gesture.TILT_RIGHT):
        radio.send_number(6)
    else:
        radio.send_number(0)
basic.forever(on_forever)
