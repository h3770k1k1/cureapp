import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CarouselArrow from './CarouselArrow'
const Carousel = () => {
  return (
    <View style={styles.container}>
    <CarouselArrow/>
      <View style={styles.inner}>
      <Text style={styles.text}>Sed ut perspiciatis unde omnis iste natus error </Text>
      <Text style={styles.name}>Lorem Ipsum</Text>
      </View>
      <CarouselArrow style={styles.rotatedArrow}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 130,
    marginTop:10,
    borderWidth:1,
    borderColor: '#535353',
  },
  inner: {
  flexDirection: 'column',
    justifyContent: 'space-between',
    width: '70%',
    height: '80%',
    marginHorizontal: 20,
  },
  name:{
   width: '100%',
   justifyContent: 'center',
       alignItems: 'center',
        fontSize: 14,
           fontWeight: '600',
           fontStyle: 'italic',
           textTransform: 'uppercase',
             textAlign: 'center',
  },
  text:{
fontSize:18,
fontWeight:'400',
textAlign: 'center',
lineHeight: 30,
  },
  rotatedArrow: {
      transform: [{ rotate: '180deg' }], // Rotate the arrow 180 degrees
    },
});

export default Carousel;
