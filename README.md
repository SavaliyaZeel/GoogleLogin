Google login steps.

- Step 1 : Create firebase account.
      
  ![Screenshot 2024-02-16 at 4 25 10 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/d2d04288-7d3b-4894-8cdf-26256a5e367d)
- Step 2 : Select android platform.
      
   ![Screenshot 2024-02-16 at 4 26 32 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/c2cbb968-d275-4920-84cd-a707c0ca079b)
   
   ![Screenshot 2024-02-16 at 4 34 41 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/7d581f1e-7fb9-41b6-bb04-31d719111eb5)

- Step 3 : Find SHA-1 key using ```./gradlew signinReport``` command on terminal.

   - If getting issue of SHA-1, delete keystore file and generate new keystore file.

       ![Screenshot 2024-02-16 at 4 53 12 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/e878d727-0eaf-4587-9fff-88e897eccdc0)
       - ```keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000``` use this command on ```android/app``` directory for generate new keystore file and fill details.
- Step 4 : Download ```google-service.json``` file and set in ```andoird/app``` folder.

   ![Screenshot 2024-02-16 at 5 09 20 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/42190e09-8b93-41ea-bd9c-2b9164856c60)
- Step 5 : add ```classpath 'com.google.gms:google-services:4.4.0'``` in ```android/build.gradle```.

   ![Screenshot 2024-02-16 at 5 11 00 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/a6059a7c-104f-43f1-965f-aa0df98caa99)
- Step 6 : add ```apply plugin: 'com.google.gms.google-services'``` in top of ```android/app/build.gradle``` file.

   ![Screenshot 2024-02-16 at 5 12 17 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/05f256a0-0842-4733-b9e0-26acfe275a36)
- Step 7 : add below 2 line in ```android/app/build.gradle``` file.
    ```
   implementation(platform("com.google.firebase:firebase-bom:32.7.2"))
   implementation("com.google.firebase:firebase-analytics")
     ```

   ![Screenshot 2024-02-16 at 5 12 48 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/89f97610-1ac3-4a4e-bea7-9fb6e65c7e83)
- Step 8 : Download ```@react-native-google-signin/google-signin``` library.

           npm i @react-native-google-signin/google-signin
                          // or
           npx yarn @react-native-google-signin/google-signin
- Step 9 : Add GoogleSignin.configure code in useEffect.

   ```
   GoogleSignin.configure({
      webClientId: ''
   });
   ```

   ![Screenshot 2024-02-16 at 5 17 25 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/218aadd8-39ae-4b3a-b17b-0f41898392dc)
- Step 10 : Open firebase project and move to authentication and enable google.

   ![Screenshot 2024-02-16 at 5 20 09 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/952599cc-0af0-428e-b64f-18b27fb82c40)

   ![Screenshot 2024-02-16 at 5 20 19 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/11a43888-bff3-4c3c-af99-85c45efd9039)

   ![Screenshot 2024-02-16 at 5 21 07 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/21de3559-ef0a-4c0c-83c5-f90bfeeace89)
- Step 11 : click on edit button of google and click on "Web SDK configuration" and copy “web client Id” and past on your code.

     ```
		For example : - 
			my web client  id is “abcd”		
		GoogleSignin.configure({
			webClientId: 'abcd', <—— past web client id heare
		});
     ```

   ![Screenshot 2024-02-16 at 5 24 58 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/48185490-3542-4f92-a872-5256bb861edc)

   ![Screenshot 2024-02-16 at 5 21 31 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/6fd6c0f0-d751-4770-a396-5cc1a50a4b10)

   ![Screenshot 2024-02-16 at 5 22 01 PM](https://github.com/SavaliyaZeel/GoogleLogin/assets/158541274/b809a2d9-dbbd-4077-91a6-1eebe1f9b493)

- Step 12 : Google login function code.
```
// Somewhere in your code
signIn = async () => {
  try {
   // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const userdata = await auth().signInWithCredential(googleCredential);
    console.log("userdata",userdata);

  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
```
