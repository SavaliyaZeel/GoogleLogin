import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from "@react-native-firebase/auth";

const App = () => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '590075937500-sopd3pg5s7bl7ipddesc5vsc5ca0o39b.apps.googleusercontent.com',
    });
  }, [])

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const userdata = await auth().signInWithCredential(googleCredential);
    console.log("userdata",userdata);
    
  }
  
  
  return (
    <TouchableOpacity onPress={()=>{

    }} style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
      <Text>App</Text>
    </TouchableOpacity>
  )
}

export default App