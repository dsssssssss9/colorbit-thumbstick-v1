input.onPinReleased(TouchPin.P0, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
})
basic.forever(function () {
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P2),
    1023,
    0,
    0,
    5
    ), pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    5
    ))
    basic.pause(50)
    basic.clearScreen()
})
