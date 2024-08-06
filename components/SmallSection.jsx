// SmallSection.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  }
  return text;
};

const SmallSection = ({ header, description, backgroundColor }) => (
  <View style={[styles.smallSection, { backgroundColor }]}>
    <Text style={styles.smallHeader}>{header}</Text>
    <Text style={styles.smallDescription}>{truncateText(description, 80)}</Text>
    <TouchableOpacity style={styles.moreButton} onPress={() => console.log('More pressed')}>
      <Text style={styles.moreButtonText}>More</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  smallSection: {
    padding: 16,
    marginRight: 10,
    width: 280,
    height: 150,
  },
  smallHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  smallDescription: {
    fontSize: 16,
    color: '#666',
  },
  moreButton: {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    marginTop: 120,
  },
  moreButtonText: {
    fontSize: 16,
    color: '#535353',
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
  },
});

export default SmallSection;
