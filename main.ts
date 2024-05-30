enum RadioMessage {
    message1 = 49434
}
bitcommander.onEvent(BCPins.Joystick, BCEvents.Up, function () {
    turtle.setSpeed(4000)
    turtle.setPosition(3, 3)
    turtle.turnLeft()
    kitronik_servo_lite.turnLeft(60)
    turtle.turnRight()
    kitronik_servo_lite.turnRight(50)
    turtle.pen(TurtlePenMode.Down)
    turtle.home()
    bitcommander.ledRotate()
})
input.onPinPressed(TouchPin.P1, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.setAudioPin(AnalogPin.P2)
})
basic.showArrow(ArrowNames.West)
basic.forever(function () {
    led.enable(true)
    basic.showIcon(IconNames.House)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . #
        . . . . .
        `)
    basic.showString("Hello!")
    basic.clearScreen()
    basic.showNumber(7)
})
basic.forever(function () {
    music.setBuiltInSpeakerEnabled(true)
    music.stopAllSounds()
    music.ringTone(175)
    music.setVolume(music.beat(BeatFraction.Quarter))
    music.play(music.stringPlayable("G E D B E A - D ", 97), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G - E C - F - G ", 78), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - E - - - F - ", 20), music.PlaybackMode.LoopingInBackground)
})
