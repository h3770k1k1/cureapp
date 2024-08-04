import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const colors = ['#FFD3FA', '#FFE2CC', '#FFF7CC', '#D3F2D7', '#CDF6FF'];

  return (
    <SafeAreaView style={styles.navbarContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.navbar, activeIndex !== null && { backgroundColor: colors[activeIndex] }]}>
        <Text style={styles.areaHeading}>
          <Text style={styles.text}>obszar: </Text>
          <Text style={styles.highlight}>OBSZAR</Text>
        </Text>
      </View>
      <View style={styles.circleContainer}>
        {['c', 'u', 'r', 'e', 'd'].map((letter, index) => (
          <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
            <View style={[styles.circle, styles[`circle${index}`], activeIndex === index && styles.activeCircle]}>
              <Text style={[styles.circleText, activeIndex === index && styles.activeCircleText]}>{letter}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  navbar: {
    height: 120,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#FFD3FA',
  },
  text: {
    fontSize: 20,
    fontWeight: '300',
    color: '#535353',
  },
  highlight: {
    fontSize: 25,
    fontWeight: '600',
    color: '#535353',
    letterSpacing: 3,
  },
  areaHeading: {
    marginLeft: 25,
  },
  circleContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '95%',
    marginTop: -25,
  },
  circle: {
    width: 45,
    height: 43,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 19,
    fontWeight: '300',
    color: '#000',
  },
  circle0: {
    backgroundColor: '#FFD3FA',
  },
  circle1: {
    backgroundColor: '#FFE2CC',
  },
  circle2: {
    backgroundColor: '#FFF7CC',
  },
  circle3: {
    backgroundColor: '#D3F2D7',
  },
  circle4: {
    backgroundColor: '#CDF6FF',
  },
  activeCircle: {
    borderWidth: 3,
    borderColor: '#fff',
  },
  activeCircleText: {
    fontWeight: 'bold',
  },
});

export default Navbar;
