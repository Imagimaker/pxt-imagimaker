basic.showIcon(IconNames.Heart)

basic.forever(function () {
    serial.writeValue("light", magibit.LightSensorReadValue(magibit.LightSensorPins.P0))
    serial.writeValue("infrared", magibit.MotorSpeedSensorReadValue(magibit.InfraredSensorPins.P13))
    basic.pause(100)
    magibit.LedSetBrightness(magibit.LEDPin.P0, 500)
    basic.pause(1500)
    magibit.LedSetOnOff(magibit.LEDPin.P0, magibit.LEDState.OFF)
    basic.pause(1500)
    magibit.MotorSetSpeed(magibit.Motor.M1, magibit.MotorDirection.Forward, 500)
    magibit.MotorSetSpeed(magibit.Motor.M2, magibit.MotorDirection.Forward, 500)
    basic.pause(1500)
    magibit.MotorStopAll()
    basic.pause(1500)
})

