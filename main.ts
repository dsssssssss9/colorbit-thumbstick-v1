input.onPinPressed(TouchPin.P1, function () {
    colorbit_51bit.setMultiColor(true)
    colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Red))
    basic.pause(500)
    colorbit_51bit.setMultiColor(false)
    colorbit_51bit.clear()
})
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P16, BitColorMode.RGB)
colorbit_51bit.setBrightness(32)
colorbit_51bit.showScrollStringColor("3 2 1", colorbit.colors(BitColors.Red))
colorbit_51bit.clear()
control.inBackground(function () {
    while (true) {
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
        basic.pause(16)
        colorbit_51bit.clear()
    }
})
