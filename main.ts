input.onPinPressed(TouchPin.P1, function () {
	
})
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
	
})
input.onPinReleased(TouchPin.P1, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
basic.forever(function () {
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    1023,
    0,
    0,
    5
    ), pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    5
    ))
    basic.pause(100)
    basic.clearScreen()
})
