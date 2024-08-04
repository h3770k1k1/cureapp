import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import MentalIcon from './Mental.svg';

const BottomMenu = () => {
const [selectedButton, setSelectedButton] = useState(null);
const handlePress = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };
  return (
    <SafeAreaView style={styles.BottomMenuContainer}>
      <View style={styles.menuBar}>
      <View style={styles.buttonsContainer}>
 {[0, 1, 2, 3].map((buttonIndex) => (
          <TouchableOpacity
            key={buttonIndex}
            style={[
              styles.circleButton,
              selectedButton === buttonIndex && styles.selectedCircleButton,
            ]}
            onPress={() => handlePress(buttonIndex)}
          >
            <Text>{buttonIndex + 1}</Text>
          </TouchableOpacity>
        ))}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
BottomMenuContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
        bottom: 0,
        width: '100%',
  },
  menuBar: {
      height: 70,
      width: '100%',
      justifyContent: 'center',
      backgroundColor: '#F0F0F0',
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-around',
    },
 circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  selectedCircleButton: {
    backgroundColor: '#8E8E8E',
  },
  buttonsContainer:{
  display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:'90%',
  }
})

export default BottomMenu;
