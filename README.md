
# Magibit Library for Micro:bit
版本号: v0.1.2

该扩展包为麦极创客专门为Micro:bit开发的语句库。推荐配合麦极创客的Magishield扩展板、Magibit主板和Magibit传感器套装进行使用，以便获得最好的体验。同时该包也支持市面上绝大多数的Micro:bit传感器模块和执行器，用户自行进行pin口连接即可。

## 1. 当前版本支持的模块
- 光线传感器
- 声音传感器
- 土壤湿度传感器
- 巡线红外传感器
- 测速模块
- 空气温湿度传感器
- 超声波传感器
- 摇杆
- 电位器
- 电机
- LED

## 2. 使用说明
- 点击高级->添加软件包（add package），粘贴Magibit库的地址，https://github.com/Imagimaker/pxt-magibit
- 点击右侧“搜索”按钮，单击找到的程序包，稍等片刻后，即可成功添加Magibit的语句库。
![install](install.gif)

## 3. 备注

- 舵机推荐使用Micro:bit官方的语句进行控制，引脚->伺服机构（pin->servo）。
- 灯带推荐使用Neopixel进行控制，在Add Package中搜索Neopixel即可添加。
- 语句库中的摇杆模块的语句，硬件上只支持搭配Magibit摇杆模块进行使用，不支持第三方摇杆模块。如需使用第三方摇杆模块，用户需自行读取pin口数据。

## Supported targets

* for PXT/microbit