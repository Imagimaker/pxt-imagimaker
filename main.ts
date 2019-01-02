
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
    //% blockId="Forward" block="0"
    Forward,
    //% blockId="Backward" block="1"
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
    P0,
    P1,
    P2,
    P13,
    P16
  }

  export enum UltrasonicSensorPins {
    A1,
    A2
  }

  export enum SampleTimes {
    //% blockId="OneTime" block="OneTime"
    OneTime=1,
    //% blockId="ThreeTimes" block="ThreeTimes"
    ThreeTimes=3,
    //% blockId="SevenTimes" block="SevenTimes"
    SevenTimes=7
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
  export function soundSensorReadValue(pin: SoundSensorPins): number {
    switch (pin) {
      case SoundSensorPins.P0:
        return 1023-pins.analogReadPin(AnalogPin.P0);
      case SoundSensorPins.P1:
        return 1023-pins.analogReadPin(AnalogPin.P1);
      case SoundSensorPins.P2:
        return 1023-pins.analogReadPin(AnalogPin.P2);
      default:
        return 1023;
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
  export function soilSensorReadValue(pin: SoilSensorPins): number {
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
  export function infraredSensorReadValue(pin: InfraredSensorPins): number {
    switch (pin) {
      case InfraredSensorPins.P0:
        pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
        return pins.digitalReadPin(DigitalPin.P0);
      case InfraredSensorPins.P1:
        pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
        return pins.digitalReadPin(DigitalPin.P1);
      case InfraredSensorPins.P2:
        pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
        return pins.digitalReadPin(DigitalPin.P2);
      case InfraredSensorPins.P13:
        pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
        return pins.digitalReadPin(DigitalPin.P13);
      case InfraredSensorPins.P16:
        pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
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
  export function motorSpeedSensorReadValue(pin: InfraredSensorPins): number {
    switch (pin) {
      case InfraredSensorPins.P0:
        pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
        return pins.digitalReadPin(DigitalPin.P0);
      case InfraredSensorPins.P1:
        pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
        return pins.digitalReadPin(DigitalPin.P1);
      case InfraredSensorPins.P2:
        pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
        return pins.digitalReadPin(DigitalPin.P2);
      case InfraredSensorPins.P13:
        pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
        return pins.digitalReadPin(DigitalPin.P13);
      case InfraredSensorPins.P16:
        pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
        return pins.digitalReadPin(DigitalPin.P16);
      default:
        return 0;
    }
  }

  /**
   * read air humidity sensor's value
   * @param pin sensor's active pin
   * @return number returns analog value from 0 to 1023
   */
  //% blockId=magibit_sensor_air_humidity_read
  //% block="🌡Read air humidity at %pin|"
  //% blockGap=16
  //% weight=75
  //% shim=minode::DHTGetHumidity
  export function airHumidityReadValue(pin: ConnName): number {
    return 0;
  }

  /**
   * read air Temperature sensor's value
   * @param pin sensor's active pin
   * @return number returns analog value from 0 to 1023
   */
  //% blockId=magibit_sensor_air_Temperature_read
  //% block="🌡Read air Temperature(°C) at %pin|"
  //% blockGap=16
  //% weight=74
  //% shim=minode::DHTGetTemperature
  export function airTemperatureReadValue(pin: ConnName): number {
    return 0;
  }

  /**
   * read Ultrasonic sensor's value
   * @param pin sensor's active pin
   * @return number returns ultrasonic range from 4-50cm. 
   */
  //% blockId=ultrasonic_sensor_range_read
  //% block="📡Ultrasonic read distance(cm) at %pin| "
  //% blockGap=16
  //% weight=73
  export function ultrasonicReadValue(pin: UltrasonicSensorPins ): number {
    let time_end: number = 0 ;
    let time_begin: number = 0 ;
    let distance: number = 0 ;
    let times=1;
    let totData: number = 0 ;
    let avrData: number=0;

    let echoPin: number ;
    let trigPin: number ;
    switch (pin) {
      case UltrasonicSensorPins.A1:
        echoPin=DigitalPin.P1;
        trigPin=DigitalPin.P2;
        break;
      case UltrasonicSensorPins.A2:
        echoPin=DigitalPin.P0;
        trigPin=DigitalPin.P1;
        break;
    }


    // 获取超声波模块，上一个周期中高电平的时间
    function getTimestemp() {
        let timestemp = 0;
        let time_end = 0 ;
        let time_begin = 0 ;

        pins.digitalWritePin(trigPin, 0);
        control.waitMicros(10);
        pins.digitalWritePin(trigPin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(trigPin, 0);
        control.waitMicros(10);

        while (pins.digitalReadPin(echoPin) == 0) {
          
        }
        time_begin = input.runningTimeMicros() ;
        while (pins.digitalReadPin(echoPin) == 1) {
            time_end = input.runningTimeMicros() ;            
        }
        timestemp = time_end - time_begin ;
        basic.pause(1);
        return timestemp;
    }
    for (let i=0;i<times;i++){

      totData+=getTimestemp();

    }
    avrData=totData/times;

    const table1: number[]=[425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425
                          ];

    const table2: number[]=[425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425
                          ];

    const table3: number[]=[425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425
                          ];

    const table4: number[]=[425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425,
                          425,425,425,425,425
                          ];

    const table5: number[]=[424,424,424,424,424,
                          424,424,424,424,424,
                          424,424,424,424,424,
                          424,424,424,424,424,
                          423,423,423,423,423
                          ];
    //20 per step
    const table6: number[]=[423,423,423,423,423,
                          422,422,422,422,422,
                          421,421,421,421,421,
                          420,420,420,420,420,
                          420,420,420,420,420
                          ];
    let table: number[];
    let tableIndex: number = avrData/20;
    if (tableIndex<25&&tableIndex>0) {
      table= table1;
    } 
    if(tableIndex<50&&tableIndex>=25) {
      table= table2;
    }
    if(tableIndex<75&&tableIndex>=50) {
      table= table3;
    } 
    if(tableIndex<100&&tableIndex>=75) {
      table= table4;
    } 
    if(tableIndex<125&&tableIndex>=100) {
      table= table5;
    } 
    if(tableIndex<150&&tableIndex>=125) {
      table= table6;
    } 
    let tableCnt: number = Math.round(tableIndex%25);
    let velocity: number;    
    if(tableIndex>=150) {
      velocity = 420;
    }
    else {
      velocity = table[tableCnt];
    }

     //转换成厘米
    distance = velocity *  avrData / 20000 ;
    // let decimal: number = Math.floor((distance-Math.floor(distance))*10);
    // let decimalArr: number[] = [0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9];
      
    return Math.floor(Math.round(distance*10)/10);
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
}
