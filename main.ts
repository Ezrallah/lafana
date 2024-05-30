enum RadioMessage {
    message1 = 49434
}
bitcommander.onEvent(BCPins.Joystick, BCEvents.Up, function () {
    serial.redirectToUSB()
    kitronik_servo_lite.forward()
    kitronik_servo_lite.backward()
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 700)
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
    pins.setEvents(DigitalPin.P1, PinEventType.Touch)
    pins.setAudioPinEnabled(true)
    pins.setAudioPin(AnalogPin.P2)
    radio.sendNumber(0)
    radio.setTransmitPower(6)
    control.reset()
})
basic.showArrow(control.deviceSerialNumber())
RTC_DS1307.DateTime(
2004,
2,
4,
8,
0,
0
)
datalogger.deleteLog(datalogger.DeleteType.Full)
grove.initGesture()
RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, 14)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Hours)
basic.forever(function () {
    radio.setGroup(1)
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
    radio.setGroup(2)
    music.setBuiltInSpeakerEnabled(true)
    record.setMicGain(record.AudioLevels.High)
    music.stopAllSounds()
    music.ringTone(175)
    music.setVolume(music.beat(BeatFraction.Quarter))
    music.play(music.stringPlayable("G E D B E A - D ", 97), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G - E C - F - G ", 78), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - E - - - F - ", 20), music.PlaybackMode.LoopingInBackground)
    game.pause()
    game.resume()
    game.gameOver()
})
