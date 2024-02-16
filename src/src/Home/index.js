import { Alert, Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Images } from '../../common/styles/image';
import { Colors } from '../../common/styles/color';
import Carousel from 'react-native-snap-carousel';
import { OptionIcon } from '../../common/Array/Array';

const HomeScreen = () => {
  const [currentOption, setCurrentOption] = useState(0)
  return (
    <View style={styles.mainBox}>
      <SafeAreaView style={styles.mainBox}>
        <ScrollView style={styles.mainBox}>
          <View style={styles.mainBox}>
            <View style={{ padding: 20, flexDirection: "row", alignItems: "center" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: Colors.black, fontWeight: "500", fontSize: 16  }}>Hi, Hii Test</Text>
                <Text style={{ color: Colors.main, fontSize: 10, letterSpacing: 2, fontWeight: "500" }}>#TH1707461793717</Text>
              </View>
              <TouchableOpacity onPress={()=>{
                Alert.alert("rtg")
              }} style={{ backgroundColor: Colors.white, height: 30, width: 30, borderRadius: 15, alignItems: "center", justifyContent: "center", padding: 6, marginHorizontal: 10, overflow: "hidden" }}>
                <Image style={{ flex: 1, resizeMode: "center" }} source={Images.Question} />
              </TouchableOpacity>
              <View style={{ backgroundColor: Colors.white, height: 40, width: 40, borderRadius: 20, alignItems: "center", justifyContent: "center", padding: 6 }}>
              </View>
            </View>
            <View style={{ padding: 20 }}>
              <View style={{ backgroundColor: Colors.white, padding: 20, borderRadius: 15, flexDirection: "row" }}>
                <ImageBackground source={Images.Sixangle} style={{ height: 60, width: 60, alignItems: "center", justifyContent: "center" }} resizeMode='contain'>
                  <Image style={{ resizeMode: "contain", height: 25, width: 25 }} resizeMode='center' source={Images.TLogo} />
                </ImageBackground>
                <View style={{ flex: 1, marginHorizontal: 10, justifyContent: "space-between" }}>
                  <Text style={{ color: Colors.black, letterSpacing: 2, fontSize: 10, fontWeight: "500" }}>CURRENT BANALCE</Text>
                  <Text style={{ color: Colors.black, fontSize: 19, fontWeight: "600" }}>0.3 USDT</Text>
                  <Text style={{ color: Colors.black, fontSize: 12, fontWeight: "500" }}>0.0025/min</Text>
                </View>
                <Image source={Images.Info} style={{ height: 15, width: 15 }} />
              </View>
              <View style={{ flexDirection: "row", gap: 15 }}>
                <View style={{ backgroundColor: Colors.main, padding: 20, borderRadius: 15, flexDirection: "row", marginTop: 15, flex: 0.65 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: Colors.white, letterSpacing: 2, fontSize: 10, fontWeight: "500" }}>SUPER COINS</Text>
                    <Text style={{ color: Colors.white, fontSize: 16, fontWeight: "600", marginVertical: 5 }}>298</Text>
                    <Text style={{ color: Colors.white, fontSize: 10, fontWeight: "500" }}>~ 0.17 USDT</Text>
                  </View>
                  <Image source={Images.Info} style={{ height: 15, width: 15, tintColor: Colors.white }} />
                </View>
                <View style={{ backgroundColor: Colors.semiMain, padding: 20, borderRadius: 15, flexDirection: "row", marginTop: 15, flex: 0.35 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: Colors.white, letterSpacing: 2, fontSize: 10, fontWeight: "500" }}>SPEED</Text>
                    <Text style={{ color: Colors.white, fontSize: 16, fontWeight: "600", marginVertical: 5 }}>30 Gh/s</Text>
                    <Text style={{ color: Colors.main }}>-</Text>
                  </View>
                  <Image source={Images.Info} style={{ height: 15, width: 15, tintColor: Colors.white }} />
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: Colors.white, paddingHorizontal: 20, paddingVertical: 40, borderRadius: 30, marginTop: 20 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: Colors.bgColor, alignItems: "center", justifyContent: "center" }}>
                  <Image source={Images.Hourglass} style={{ resizeMode: "center", height: 25, width: 25 }} />
                  <Image source={Images.RedDot} style={{ resizeMode: "center", height: 18, width: 18, position: "absolute", top: 0, right: 0 }} />
                </View>
                <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: Colors.semiMain, alignItems: "center", justifyContent: "center" }}>
                  <Image source={Images.Hourglass} style={{ resizeMode: "center", height: 25, width: 25, tintColor: Colors.white }} />
                  <Image source={Images.RedDot} style={{ resizeMode: "center", height: 18, width: 18, position: "absolute", top: 0, right: 0 }} />
                </View>
              </View>
              <View style={{ backgroundColor: "#eefdfa", width: Dimensions.get('window').width * 0.7, height: Dimensions.get('window').width * 0.7, borderRadius: Dimensions.get('window').width * 0.35, alignSelf: "center", padding: 15, overflow: "hidden", alignItems: "center", justifyContent: "center", marginTop: -50, marginBottom: 30 }}>
                <View style={{ backgroundColor: "#c5fbef", borderRadius: Dimensions.get('window').width * 0.35, alignSelf: "center", flex: 1, width: "100%", padding: 15 }}>
                  <View style={{ backgroundColor: Colors.main, borderRadius: Dimensions.get('window').width * 0.35, alignSelf: "center", flex: 1, width: "100%", borderWidth: 3, borderColor: Colors.main, justifyContent: "center" }}>
                    <Text style={{ color: Colors.white, fontSize: 10, fontWeight: "500", textAlign: "center", letterSpacing: 2 }}>{true && "CLICK HERE TO"}</Text>
                    <Text style={{ color: false ? Colors.darkGreen : Colors.white, fontSize: 24, fontWeight: "500", marginVertical: 5, textAlign: "center", letterSpacing: 0 }}>{true ? "Start Mining" : "00:36:02"}</Text>
                    <Text style={{ color: Colors.darkGreen, fontSize: 10, fontWeight: "500", textAlign: "center", letterSpacing: 2 }}>{false && "30 GH/S"}</Text>
                  </View>
                </View>
              </View>
              <Carousel
                data={OptionIcon}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{ backgroundColor: Colors.bgColor, padding: 20, borderRadius: 15, flexDirection: "row" }}>
                      <ImageBackground source={Images.Sixangle} style={{ height: 60, width: 60, alignItems: "center", justifyContent: "center" }} tintColor={item.color} resizeMode='contain'>
                        <Image style={{ resizeMode: "contain", height: 25, width: 25, tintColor: Colors.white }} resizeMode='center' source={item.image} />
                      </ImageBackground>
                      <View style={{marginLeft: 10, flex:1}}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", flex:1}}>
                        <Text style={{ color: Colors.black, fontSize: 14, fontWeight: "500" }}>{item.title}</Text>
                        <Text style={{ color: Colors.black, fontSize: 10, fontWeight: "500", letterSpacing: 2, padding: 2, backgroundColor: "#c4cfdd", borderRadius: 10, paddingHorizontal: 7 }}>TIP</Text>
                        </View>
                        <Text style={{ color: Colors.gray, fontSize: 12, fontWeight: "500", textAlign: "left", maxWidth: "90%", lineHeight: 20, marginVertical: 5 }}>{item.disc} <Text style={{fontWeight: "600", color: "#778497"}}>{item.subDisc}</Text></Text>
                        <Text style={{ color: Colors.main, fontSize: 12, fontWeight: "500" }}>Read more</Text>
                      </View>
                    </View>
                  );
                }}
                activeSlideAlignment='start'
                sliderWidth={Dimensions.get('window').width - 20}
                itemWidth={Dimensions.get('window').width - 110}
                onSnapToItem={setCurrentOption}
              />
              <FlatList data={OptionIcon} style={{marginTop: 10, alignSelf: "center"}} horizontal renderItem={({item, index})=>(
                <View style={{padding:3, backgroundColor: index == currentOption ? Colors.main : "#c4cfdd", margin:3, width: index == currentOption ? 30 : 4, borderRadius: 5}}></View>
              )} />
            </View>
          </View>
        </ScrollView>
        <ImageBackground source={Images.GiftCircle} style={{height: 70, width: 70, position: "absolute", bottom: 10, right: 10}} resizeMode='center'>
        <Image source={Images.RedDot} style={{ resizeMode: "center", height: 18, width: 18, position: "absolute", top: 3, right: 3 }} />
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
