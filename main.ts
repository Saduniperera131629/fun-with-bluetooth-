maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
basic.showLeds(`
    # # # # #
    # # . # #
    # # # # #
    # # # . #
    # # . # #
    `)
maqueen.motorStop(maqueen.Motors.All)
IR.IR_init()
Maqueen_V5.I2CInit()
bluetooth.startLEDService()
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
minode.FanControl_1(AnalogConnName.Analog_A2, 12)
datalogger.log(datalogger.createCV("100", 100))
keyboard.startKeyboardService()
mouse.startMouseService()
media.startMediaService()
absmouse.startAbsoluteMouseService()
gamepad.send(
gamepad._buttons(GameButton.none, true),
191,
192,
gamepad._dpad(GameDirection.noDirection),
192,
192
)
RTC_DS1307.DateTime(
2019,
1,
17,
12,
31,
19
)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.setData(
"Thehan12345678908282392939393387gyguyvuyygygg67byt4v7y4tb7ybv7b4t7yv4t",
100
)
ESP8266_IoT.connectSmartiot("", "")
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TCP,
"192.168.70.107",
"Thehan ",
"192.168.70.107",
"192.168.70.107"
)
ESP8266_IoT.setIFTTT("Thehan6636465664", "192.168.70.107")
let _4digit = sonar.ping(
DigitalPin.P9,
DigitalPin.P9,
PingUnit.Inches
)
tft24.backlightCtrl(tft24.BlkCmdEnum.BlkOpen)
OLED.init(128, 64)
record.setMicGain(record.AudioLevels.Medium)
minode.FanControl_1(AnalogConnName.Analog_A1, 12)
servos.P0.setAngle(90)
turtle.turnLeft()
basic.forever(function () {
	
})
