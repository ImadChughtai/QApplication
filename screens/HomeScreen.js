import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Fblogin from './fblogin'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  

  render() {
    return (
      <View>
        <Fblogin/>
     
      </View>
    );
  }
}