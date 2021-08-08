
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

  const animatedStyles = useAnimatedStyle(() => {
    // console.log(offset.value)
    return {
      transform: [{ translateX: offset.value * 255 }],// Buttons:- 1,  2,  3, 5,
      // transform: [{ translateX: withSpring(offset.value * 255 )}],//actually useAnimatedStyle  // Button 4
      
      // transform: [{ translateX: withTiming(offset.value * 255,{duration: 1000,
      //   easing: Easing.in(Easing.quad)}) }], // Button 6 
      
      // transform: [{ translateY offset.value * 255 }],

    };
  });


  return (
    <View>
      
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.viewButton}>
        <Button style={styles.button} onPress={() => (offset.value = withTiming(Math.random()))}  title="Move withTimming" />
        <Button style={styles.button} onPress={() => (offset.value = withTiming(50))}  title="Move withTimming 50" />
        <Button style={styles.button} onPress={() => (offset.value = withSpring(Math.random()))}  title="Move withSpring" />
        {/* <Button style={styles.button} onPress={() => (offset.value = Math.random())}  title="No  withSpring on button4 but with hook useAnimationStyle " /> */}
        <Button style={styles.button} onPress={() => (offset.value = withSpring(Math.random(),{},(finished)=>{ 
          if (finished) {
          console.log("Animation Ended")
          }
          else {
            console.log("ANIMATION GOT CANCELLED");
          } 

        }))}  title="Custom animation Button 5" />

        {/* <Button style={styles.button} onPress={() => (offset.value = Math.random())}  title="withTiming Ease out button 6" /> */}
        
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