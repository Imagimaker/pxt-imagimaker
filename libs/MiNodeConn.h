#ifndef MINODE_CONN_H
#define MINODE_CONN_H

#include "mbed.h"
#include "MicroBitConfig.h"
#include "MicroBitPin.h"

enum ConnName
{
  A0 = 0,
  A1 = 1,
  A2 = 2,
  MN_NC = NC
};

enum AnalogConnName
{
  Analog_A0 = 0,
  Analog_A1 = 1,
  Analog_A2 = 2,
  Analog_MN_NC = NC
};

class MiNodeConn
{

public:

  MicroBitPin      pin[0];
  MicroBitPin          P0;
  MicroBitPin          P1;

  MiNodeConn(int id, PinName p0, PinName p1);

  static void calcPinName(ConnName name, PinName* p0, PinName* p1);
  static void calcPinName(AnalogConnName name, PinName* p0, PinName* p1);
  static int calcId(ConnName name);
  static int calcId(AnalogConnName name);
  static ConnName calcConnName(PinName p0);
  static PinName calcP0Name(ConnName name);
  static PinName calcP0Name(AnalogConnName name);
  static PinName calcP1Name(ConnName name);
  static PinName calcP1Name(AnalogConnName name);

};

#endif