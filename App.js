import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {useForm} from 'react-hook-form';
import { StyleSheet, Text, TextInput, View, TouchableHighlight} from 'react-native';

const signUp = () =>   {
  return (
    <TouchableHighlight>
        <View style={styles.button}>
          <Text style={{color:'white',fontSize:14}}>Sign Up</Text>
        </View>
    </TouchableHighlight>
  );
};


function App() {
  return (
    <View style={styles.container}>
      <Text>Demo form</Text>
      <View >
        <TextInput placeholder="User Name" style={styles.inputStyle} />
        <TextInput placeholder="Email" style={styles.inputStyle}/>
        <TextInput placeholder="Password" style={styles.inputStyle} secureTextEntry={true} />
        <TextInput placeholder="Mobile Number" style={styles.inputStyle}/>
        {/*  Component Inheritance Not working */}
        {/* <signUp /> */}
        <TouchableHighlight>
          <View style={styles.button}>
            <Text style={{color:'white',fontSize:14}}>Sign Up</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  inputStyle: {
    margin: 20,
    width: 200,
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button:{
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#176CDC',
    color:'#fff',
    alignItems: "center",
    backgroundColor: "#176CDC",
    width:100,
    marginLeft:60,
    marginTop:10,
    padding: 5, 
    // Shadow  
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  
  
});


export default App;