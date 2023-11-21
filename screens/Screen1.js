import React from 'react';

import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Header from "../components/Header.js";
import Prediction from "../components/Prediction.js";

const Screen1 = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const changeModalVisibility =(value)=>{
    setModalVisible(value)
  }
  return (
    <SafeAreaView
      style={
        {
          backgroundColor: modalVisible ? "black" : "white",
          opacity: modalVisible ? 0.25 : 1,
        }
      }
    >
    <StatusBar/>
    <Text style={styles.headingStyle}>Today's Games</Text>
     <Header />
    <Prediction onChangeModalVisibility={changeModalVisibility} modalVisibility={modalVisible}/>

    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  containerStyle: {
    display: "flex",
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    width: "auto",
    height: "auto",
    gap: 5,
  },
  predictionStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    fontSize: 14,
  },
  headingStyle: {
    color: "#333333",
    textAlign: "left",
    fontSize: 20,
    padding:10,
    lineHeight:22,
    fontWeight: "600",
    fontFamily: "Sen-SemiBold",
  },
  viewStyle: {
    backgroundColor: "green",
  },
  topContainerStyle: {
    backgroundColor: "#6231AD",
    padding: 12,
    gap: 15,
  },


});
