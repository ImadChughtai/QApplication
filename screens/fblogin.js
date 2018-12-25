import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
// import { LoginButton } from 'react-native-fbsdk';
// import { AppLoading, Asset, Font, Icon } from 'expo';
// import AppNavigator from './navigation/AppNavigator';
// import { WebBrowser } from 'expo';


export default class Fblogin extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    hasCameraPermission: null,
  };
  constructor(props){
    super(props);
    this.logIn = this.logIn.bind(this);
  }


  async logIn(logInAs) {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      "1302749559866771",
      {
        permissions: ["public_profile", "email"]
      }
    );

    if (type === "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(userCredential => {
          // console.log(userCredential.user, "*****userCredential*****");
          firebase
            .database()
            .ref(`/users/${userCredential.user.uid}/`)
            .set(userCredential.user)
            .then(() => {
              this.props.navigation.navigate("Home", { logInAs });
            });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log("type === cancel");
      // type === 'cancel'
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
      return (
        <View>
          <Button title="Login" onPress={()=>{ this.logIn()}} />          
        </View>

      );
    }
  };
