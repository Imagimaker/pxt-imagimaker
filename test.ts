basic.showIcon(IconNames.Heart)

basic.forever(function () {
    serial.writeValue("light", magibit.lightSensorReadValue(magibit.LightSensorPins.P0))
    serial.writeValue("infrared", magibit.motorSpeedSensorReadValue(magibit.InfraredSensorPins.P13))
    basic.pause(100)
    magibit.ledSetBrightness(magibit.LEDPin.P0, 500)
    basic.pause(1500)
    magibit.ledSetOnOff(magibit.LEDPin.P0, magibit.LEDState.OFF)
    basic.pause(1500)
    magibit.motorSetSpeed(magibit.Motor.M1, magibit.MotorDirection.Forward, 500)
    magibit.motorSetSpeed(magibit.Motor.M2, magibit.MotorDirection.Forward, 500)
    basic.pause(1500)
    magibit.motorStopAll()
    basic.pause(1500)
})

