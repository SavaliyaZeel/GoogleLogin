import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../../src/Home';
import { StyleSheet } from 'react-native';
import { Colors } from '../../common/styles/color';
import { FontFamily } from '../../common/styles/font';
import RewardScreen from '../../src/Reward';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name="Rewards"
        options={{
          headerShown: false
        }}
        component={RewardScreen}
      />
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBarIconStyle: { height: 24, width: 24 },
  headerStyle: { backgroundColor: Colors.white, padding: 20 },
  title: {
    color: Colors.black,
    fontSize: 26,
    fontFamily: FontFamily.GothicA1SemiBold,
  },
  description: {
    color: '#747474',
    fontSize: 16,
    fontFamily: FontFamily.GothicA1Regular,
  },
});
