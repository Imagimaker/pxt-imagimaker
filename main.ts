/**
 * support for magibit
 */
//% weight=10 icon="\uf0ad" color=#FF7D0A block="Magibit"
namespace magibit {
  /**
   * 定义项目中使用的内部数据类型
   */
  export enum InnerNumberType {
    ANALOG,
    DIGITAL
  }

  export enum Motor {
    M1,
    M2
  }

  export enum MotorDirection {
    Forward,
    Backward
  }

  export enum LEDPin {
    P0,
    P1,
    P2,
    P13,
    P16
  }

  export enum LEDState {
    ON,
    OFF
  }

  export enum LightSensorPins {
    P0,
    P1,
    P2
  }

  export enum SoundSensorPins {
    P0,
    P1,
    P2
  }

  export enum SoilSensorPins {
    P0,
    P1,
    P2
  }

  export enum InfraredSensorPins {
    P13,
    P16
  }

  export enum UltrasonicSensorPins {
    P0,
    P1,
    P2
  }

  export enum AirSensorPins {
    P0,
    P1,
    P2
  }

  export enum PotentiometerSensorPins {
    P0,
    P1,
    P2
  }

  export enum Joystick {
    A1,
    A2
  }

  /**
   * read light sensor's value
   * @param pin sensor's active pin
   * @return number returns analog value from 0 to 1023
   */
  //% blockId=magibit_sensor_light_read
  //% block="🔆Light level read analog at |%pin|"
  //% blockGap=16
  //% weight=80
  export function lightSensorReadValue(pin: LightSensorPins): number {
    switch (pin) {
      case LightSensorPins.P0:
        return pins.analogReadPin(AnalogPin.P0);
      case LightSensorPins.P1:
        return pins.analogReadPin(AnalogPin.P1);
      case LightSensorPins.P2:
        return pins.analogReadPin(AnalogPin.P2);
      default:
        return 0;
    }
  }

  /**
   * read sound sensor's value
   * @param pin sensor's active pin
   * @return number returns analog value from 0 to 1023
   */
  //% blockId=magibit_sensor_sound_read
  //% block="🔊Sound read analog at |%pin|"
  //% blockGap=16
  //% weight=79
  export function SoundSensorReadValue(pin: SoundSensorPins): number {
    switch (pin) {
      case SoundSensorPins.P0:
        return pins.analogReadPin(AnalogPin.P0);
      case SoundSensorPins.P1:
        return pins.analogReadPin(AnalogPin.P1);
      case SoundSensorPins.P2:
        return pins.analogReadPin(AnalogPin.P2);
      default:
        return 0;
    }
  }

  /**
   * read soil sensor's value
   * @param pin sensor's active pin
   * @return number returns analog value from 0 to 1023
   */
  //% blockId=magibit_sensor_soil_read
  //% block="💧Soil moisture read analog at |%pin|"
  //% blockGap=16
  //% weight=78
  export function SoilSensorReadValue(pin: SoilSensorPins): number {
    switch (pin) {
      case SoilSensorPins.P0:
        return pins.analogReadPin(AnalogPin.P0);
      case SoilSensorPins.P1:
        return pins.analogReadPin(AnalogPin.P1);
      case SoilSensorPins.P2:
        return pins.analogReadPin(AnalogPin.P2);
      default:
        return 0;
    }
  }

  /**
   * read infrared sensor's value
   * @param pin sensor's active pin
   * @return number returns digital value from 0 to 1
   */
  //% blockId=magibit_sensor_infrared_read
  //% block="👀infrared read digital at |%pin|"
  //% blockGap=16
  //% weight=77
  export function InfraredSensorReadValue(pin: InfraredSensorPins): number {
    switch (pin) {
      case InfraredSensorPins.P13:
        return pins.digitalReadPin(DigitalPin.P13);
      case InfraredSensorPins.P16:
        return pins.digitalReadPin(DigitalPin.P16);
      default:
        return 0;
    }
  }

  /**
   * read motor speed sensor's value
   * @param pin sensor's active pin
   * @return number returns digital value from 0 to 1
   */
  //% blockId=magibit_sensor_motor_speed_read
  //% block="⏱Motor speed read digital at |%pin|"
  //% blockGap=16
  //% weight=76
  export function MotorSpeedSensorReadValue(pin: InfraredSensorPins): number {
    switch (pin) {
      case InfraredSensorPins.P13:
        return pins.digitalReadPin(DigitalPin.P13);
      case InfraredSensorPins.P16:
        return pins.digitalReadPin(DigitalPin.P16);
      default:
        return 0;
    }
  }

  /**
   * read air temperature sensor's value
   * @param pin sensor's active pin
   * @return number returns analog value from 0 to 1023
   */
  //% blockId=magibit_sensor_air_temperature_read
  //% block="🌡Read air temperature(°C) at |%pin|"
  //% blockGap=8
  //% weight=75
  export function airTemperatureReadValue(pin: AirSensorPins): number {
    let tmpVal = 0;
    switch (pin) {
      case AirSensorPins.P0: {
        tmpVal = minode.DHTGetTemperature(ConnName.A0, DHTTemStyle.MINODE_DHT_CELSIUS);
        break;
      }
      case AirSensorPins.P1: {
        tmpVal = minode.DHTGetTemperature(ConnName.A1, DHTTemStyle.MINODE_DHT_CELSIUS);
        break;
      }
      case AirSensorPins.P2: {
        tmpVal = minode.DHTGetTemperature(ConnName.A2, DHTTemStyle.MINODE_DHT_CELSIUS);
        break;
      }
    }
    return tmpVal;
  }

  /**
   * read air humidity sensor's value
   * @param pin sensor's active pin
   * @return number returns analog value from 0 to 1023
   */
  //% blockId=magibit_sensor_air_humidity_read
  //% block="🌡Read air humidity(%) at |%pin|"
  //% blockGap=16
  //% weight=74
  export function airHumidityReadValue(pin: AirSensorPins): number {
    let tmpVal = 0;
    switch (pin) {
      case AirSensorPins.P0: {
        tmpVal = minode.DHTGetHumidity(ConnName.A0);
        break;
      }
      case AirSensorPins.P1: {
        tmpVal = minode.DHTGetHumidity(ConnName.A1);
        break;
      }
      case AirSensorPins.P2: {
        tmpVal = minode.DHTGetHumidity(ConnName.A2);
        break;
      }
    }
    return tmpVal;
  }

  /**
   * read Ultrasonic sensor's value
   * @param pin sensor's active pin
   * @return number returns ultrasonic range from 3-400cm. It's only used with seeedstudio's ultrasonic grove module.
   */
  //% blockId=ultrasonic_sensor_range_read
  //% block="📡Read ultrasonic(cm) at |%pin|"
  //% blockGap=16
  //% weight=73

  export function UltrasonicReadValue(pin: UltrasonicSensorPins): number {
    let time_end = 0 ;
    let time_begin = 0 ;
    let distance = 0 ;
    let data = 0 ;
    // 获取超声波模块，上一个周期中高电平的时间
    function getTime() {
        data = 0 ;
        while (pins.digitalReadPin(DigitalPin.P0) == 0) {
          
        }
        time_begin = input.runningTimeMicros() ;
        while (pins.digitalReadPin(DigitalPin.P0) == 1 && data < 27400) {
            time_end = input.runningTimeMicros() ;
            data = time_end - time_begin ;
        }
    }
    basic.showIcon(IconNames.Heart)
    basic.forever(function () {
        getTime() ;
        // 将高电平时间转化为距离（单位为cm）
        distance = data * 0.015 ;
        // 针对不同区间段的数据，做对应的数据处理
        if (distance > 8.5 && distance < 10) {
            distance = distance * (distance / 10) ;
        } 
        if (distance <= 8.5) {
            distance = distance * (distance / 12) ;
        } 
    })
    return distance ;
  }


  /**
   * read joystick sensor's x value
   * @param joystick selected joystick sensor
   * @return number returns analog value from 0 to 1000
   */
  //% blockId=magibit_sensor_joystick_x_read
  //% block="🕹Position of joystick, x-axis |%joystick|"
  //% blockGap=8
  //% weight=72
  export function joystickReadXValue(joystick: Joystick): number {
    switch (joystick) {
      case Joystick.A1:
        return pins.analogReadPin(AnalogPin.P1);
      case Joystick.A2:
        return pins.analogReadPin(AnalogPin.P0);
      default:
        return 0;
    }
  }

  /**
   * read joystick sensor's y value
   * @param joystick selected joystick sensor
   * @return number returns analog value from 0 to 1000
   */
  //% blockId=magibit_sensor_joystick_y_read
  //% block="🕹Position of joystick, y-axis |%joystick|"
  //% blockGap=8
  //% weight=71
  export function joystickReadYValue(joystick: Joystick): number {
    switch (joystick) {
      case Joystick.A1:
        return pins.analogReadPin(AnalogPin.P2);
      case Joystick.A2:
        return pins.analogReadPin(AnalogPin.P1);
      default:
        return 0;
    }
  }

  /**
   * read joystick sensor's button state value
   * @param joystick selected joystick sensor
   * @return number returns digital value from 0 to 1
   */
  //% blockId=magibit_sensor_joystick_button_state_read
  //% block="🕹Joystick |%joystick| is pressed"
  //% blockGap=16
  //% weight=70
  export function joystickReadButtonStateValue(joystick: Joystick): boolean {
    let tmpVal = 0;
    let tmpP0Val = pins.analogReadPin(AnalogPin.P0);
    let tmpP1Val = pins.analogReadPin(AnalogPin.P1);
    let tmpP2Val = pins.analogReadPin(AnalogPin.P2);
    switch (joystick) {
      case Joystick.A1:
        tmpVal = tmpP1Val > tmpP2Val ? tmpP1Val : tmpP2Val;
        break;
      case Joystick.A2:
        tmpVal = tmpP0Val > tmpP1Val ? tmpP0Val : tmpP1Val;
        break;
    }
    return tmpVal > 1000;
  }

  /**
   * read potentiometer sensor's value
   * @param pin sensor's active pin
   * @return number returns analog value from 0 to 1023
   */
  //% blockId=magibit_sensor_potentiometer_read
  //% block="🎚Potentiometer read analog at |%pin|"
  //% blockGap=16
  //% weight=69
  export function potentiometerReadValue(pin: PotentiometerSensorPins): number {
    switch (pin) {
      case PotentiometerSensorPins.P0:
        return pins.analogReadPin(AnalogPin.P0);
      case PotentiometerSensorPins.P1:
        return pins.analogReadPin(AnalogPin.P1);
      case PotentiometerSensorPins.P2:
        return pins.analogReadPin(AnalogPin.P2);
      default:
        return 0;
    }
  }


  /**
   * change motor's speed and direction
   */
  //% blockId=magibit_actuator_motor_set_speed
  //% block="Motor |%motor| running with direction |%direction| and speed |%speed|"
  //% weight=68
  //% blockGap=8
  //% speed.min=0 speed.max=1023
  export function motorSetSpeed(motor: Motor, direction: MotorDirection, speed: number): void {

    let speedVal = filterInnerTypeNumber(InnerNumberType.ANALOG, speed);

    if (motor == Motor.M1) {
      pins.digitalWritePin(DigitalPin.P8, direction);
      pins.analogWritePin(AnalogPin.P12, speedVal);
    } else if (motor == Motor.M2) {
      pins.digitalWritePin(DigitalPin.P14, direction);
      pins.analogWritePin(AnalogPin.P15, speedVal)
    }
  }

  /**
   * stop all motor
   */
  //% blockId=magibit_actuator_motor_stop_all
  //% block="Motor stop all"
  //% blockGap=16
  //% weight=67
  export function motorStopAll(): void {
    motorSetSpeed(Motor.M1, MotorDirection.Forward, 0);
    motorSetSpeed(Motor.M2, MotorDirection.Forward, 0);
  }


  /**
   * set LED'S brightness
   */
  //% blockId=magibit_actuator_led_set_brightness
  //% block="💡LED |%pin| set brightness |%brightness|"
  //% weight=66
  //% blockGap=8
  //% brightness.min=0 brightness.max=1023
  export function ledSetBrightness(pin: LEDPin, brightness: number): void {

    let brightnessVal = filterInnerTypeNumber(InnerNumberType.ANALOG, brightness);

    switch (pin) {
      case LEDPin.P0:
        pins.analogWritePin(AnalogPin.P0, brightnessVal);
        break;
      case LEDPin.P1:
        pins.analogWritePin(AnalogPin.P1, brightnessVal);
        break;
      case LEDPin.P2:
        pins.analogWritePin(AnalogPin.P2, brightnessVal);
        break;
      case LEDPin.P13:
        pins.analogWritePin(AnalogPin.P13, brightnessVal);
        break;
      case LEDPin.P16:
        pins.analogWritePin(AnalogPin.P16, brightnessVal);
        break;
    }
  }

  /**
   * turn LED on or off
   */
  //% blockId=magibit_actuator_led_on_off
  //% block="💡LED |%pin| |%state|"
  //% blockGap=8
  //% weight=65
  export function ledSetOnOff(pin: LEDPin, state: LEDState): void {
    switch (state) {
      case LEDState.ON:
        ledSetBrightness(pin, 1023);
        break;
      case LEDState.OFF:
        ledSetBrightness(pin, 0);
        break;
      default:
        ledSetBrightness(pin, 0);
    }
  }

  /**
   * 项目内部的数据类型非法制过滤
   * @param {InnerNumberType} innerType
   * @param {number} analogNumber
   * @returns {number}
   */
  export function filterInnerTypeNumber(innerType: InnerNumberType, analogNumber: number): number {
    switch (innerType) {
      case InnerNumberType.ANALOG: {
        if (analogNumber < 0 || analogNumber == null) {
          return 0;
        } else if (analogNumber > 1023) {
          return 1023;
        } else {
          return analogNumber;
        }
      }
      case InnerNumberType.DIGITAL: {
        if (analogNumber < 0 || analogNumber == null) {
          return 0;
        } else {
          return analogNumber;
        }
      }
    }
    return 0;
  }

  //% block
  export function hi () {
    
  }
}
