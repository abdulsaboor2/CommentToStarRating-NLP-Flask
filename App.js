/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#61dafb" />
      <View>
        <View>
          <TextInput keyboardType='text' placeholder='Write Some Thing' onChangeText={(e)=>setText(e)} />
        </View>
        <Button title='Submit' onPress={()=>console.log("Do Something")} />
        <Text>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
