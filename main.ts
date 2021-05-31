input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
let colorbit_51bit = colorbit.initColorBit(DigitalPin.P16, BitColorMode.RGB)
colorbit_51bit.setBrightness(32)
colorbit_51bit.clear()
colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Red))
basic.forever(function () {
    colorbit_51bit.drawColorBit(pins.map(
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
    ), colorbit.colors(BitColors.Blue))
    basic.pause(100)
    colorbit_51bit.clear()
})
