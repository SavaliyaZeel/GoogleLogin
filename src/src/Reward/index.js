import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Colors } from '../../common/styles/color';
import { Images } from '../../common/styles/image';

const RewardScreen = () => {
  return (
    <View style={styles.mainBox}>
      <SafeAreaView style={styles.mainBox}>
        <ScrollView style={styles.mainBox}>
            <View style={{ backgroundColor: Colors.white, height: 30, width: 30, borderRadius: 15, alignItems: "center", justifyContent: "center", padding: 6, marginHorizontal: 10, alignSelf: "flex-end", margin: 20 }}>
              <Image style={{ flex: 1, resizeMode: "center" }} source={Images.Question} />
            </View>
            <View style={{ backgroundColor: Colors.white, paddingHorizontal: 20, paddingVertical: 40, borderRadius: 30, marginTop: 20 }}>
              
            </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default RewardScreen;
