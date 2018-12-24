//#include "pxt.h"
#include "MiNode.h"

MiNode node;

//using namespace pxt;
namespace minode {

	//%
  	int DHTGetTemperature(ConnName pin){
   	  MiNodeDHT* pDHT11;
   	  int dht_tempreature=0;

      pDHT11 = node.dht11.attach(pin);
      dht_tempreature = pDHT11->getTemperature();
  	  return dht_tempreature;
    }

    //%
 	int DHTGetHumidity(ConnName pin){
    	MiNodeDHT* pDHT11;
    	int dht_humidity=0;

    	pDHT11 = node.dht11.attach(pin);
    	dht_humidity = pDHT11->getHumidity();

    	return dht_humidity;
  	}
}
