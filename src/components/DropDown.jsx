import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import DropDownArrow from './DropDownArrow.svg';
import LinkButton from './LinkButton';
import SmallText from './SmallText';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnimation, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const rotation = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownContainer}>
        <View style={styles.dropdownHeader}>
          <Text style={styles.title}>Lorem ipsum dolor sit amet annubg jhrebhdu</Text>
          <Animated.View style={[styles.iconContainer, { transform: [{ rotate: rotation }] }]}>
            <DropDownArrow style={styles.icon} />
          </Animated.View>
        </View>
        {isOpen && (
          <View style={styles.dropdownContent}>
            <SmallText/>
             <LinkButton title="Lorem ipsum" />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdownContainer: {
    flexDirection: 'column',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#535353',
    padding: 7,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    width: 200,
    lineHeight: 28.5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContent: {
    marginBottom:10,
    borderRadius: 5,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

  },
});

export default Dropdown;
