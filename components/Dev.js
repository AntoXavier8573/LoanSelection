import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
const AnimatedTableExample = () => {
    const [isTableVisible, setTableVisibility] = useState(true);
    const tableHeight = new Animated.Value(200); // Set the initial height of the table
  
    const toggleTable = () => {
      const newHeight = isTableVisible ? 0 : 200; // Set the desired height when showing or hiding the table
      Animated.timing(tableHeight, {
        toValue: newHeight,
        duration: 300, // Set the duration of the animation
        useNativeDriver: false, // Make sure to set useNativeDriver to false for layout animations
      }).start();
  
      setTableVisibility(!isTableVisible);
    };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={toggleTable}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            {isTableVisible ? 'Hide Table' : 'Show Table'}
          </Text>
        </TouchableOpacity>
  
        <Animated.View style={{ height: tableHeight, overflow: 'hidden' }}>
          {/* Your table content goes here */}
          <View style={{ backgroundColor: 'lightgray', padding: 10 }}>
            <Text>Table Content</Text>
          </View>
        </Animated.View>
      </View>
    );
  };
  
  export default AnimatedTableExample;
  