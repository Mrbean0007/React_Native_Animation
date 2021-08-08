import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
    Easing,
  } from 'react-native-reanimated';
  import { View, Button,StyleSheet } from 'react-native';
  import React from 'react';
  
  
  
  export default function Box() {
    const offset = useSharedValue(0);
  
  
    const defaultSpringStyles = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: withSpring(offset.value * 255) }],
      };
    });
    const customSpringStyles = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: withSpring(offset.value * 255, {
              damping: 20,
              stiffness: 90,
            }),
          },
        ],
      };
    });
  
    return (
      <View>
        
        <Animated.View style={[styles.box, defaultSpringStyles]} />
        <Animated.View style={[styles.box, customSpringStyles]} />
        <View style={styles.viewButton}>
            <Button onPress={() => (offset.value = Math.random())} title="Move" />

        </View>
        
      </View>
    );
  }
  const styles=StyleSheet.create({
    box:{
      backgroundColor:'blue',
      margin:50,
      width:105,
      height:105,
      justifyContent:'center',
      borderRadius:20
    },
    button:{
      justifyContent:'space-around'
  
    },
  
    viewButton:{
      marginHorizontal:50,
      marginVertical:50,
    },
  })