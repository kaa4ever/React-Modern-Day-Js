import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Component = ({ headline }) => (
  <Text style={styles.headline}>{headline}</Text>
);

const styles = StyleSheet.create({
  headline: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Component;
