import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View>
      <TextInput
      style = {styles.inputBox}
      onChangeText={text => {
        this.setState({
          text: text,
          isSearchPressed: false,
          word : "Loading...",
          lexicalCategory :'',
          examples : [],
          defination : ""
        });
      }}
      value = {this.state.text}
      />

      <TouchableOpacity
        style = {styles.searchButton}
        onPress = {() =>{
          this.setState({ isSearchPressed: true});
          this.getWord (this.state.text)
        }}
      >

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
