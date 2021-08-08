import Animated, { useSharedValue, useAnimatedStyle, withTiming,
    withRepeat,
    Easing,
    withSpring,
  } from 'react-native-reanimated';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function WobbleExample(props) {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    console.log(rotation.value)
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
        
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      
      <TouchableOpacity style={styles.button}
        onPress={() => {
            rotation.value = withRepeat(withTiming(10,{duration:1000}), 6, true)

        }}
      >
          <Text style={styles.text}>Wobble</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}
        onPress={() => {
            rotation.value = withRepeat(withTiming(10,{duration:1000}), 6, false) // also freeze if no reverse 

        }}
      >
          <Text style={styles.text}>Wobble Even  no Reverse-freeze</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => {
            rotation.value = withRepeat(withSpring(10), 6, true) 
        }}>
          <Text style={styles.text}>Wobble withSpring  </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}
        onPress={() => {
            rotation.value = withRepeat(withSpring(10), 6, false) 
        }}>
          <Text style={styles.text}>Wobble withSpring No Reverse  </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}
        onPress={() => {
            rotation.value = withRepeat(withTiming(10), 3, false)
        }}>
          <Text style={styles.text}>Wobble odd-Number-freeze  </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}
        onPress={() => {
            rotation.value = withRepeat(withTiming(10), 6, true)
        }}>
          <Text style={styles.text}>Wobble even-Number  </Text>
      </TouchableOpacity>

      <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}
                onPress={() => {rotation.value = withRepeat(withTiming(360,{duration:1000}), 6, true)}}>

                <Text style={styles.text}>Spin</Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}
                onPress={() => {rotation.value = withRepeat(withTiming(-360,{duration:1000}), 6, true)}}>

                <Text style={styles.text}>Spin -</Text>

            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button}
                onPress={() => {rotation.value = withRepeat(withTiming(360,{duration:1000}), 6, false)}}>

                <Text style={styles.text}>Spin-FASLE</Text>

            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.button}
                onPress={() => {rotation.value = withRepeat(withTiming(360,{duration:1000}), 3, true)}}>

                <Text style={styles.text}>Spin 360-odd</Text>

            </TouchableOpacity> */}
            <TouchableOpacity style={styles.button}
                onPress={() => {rotation.value = withRepeat(withTiming(90,{duration:1000}), 3, false)}}>

                <Text style={styles.text}>Spin 90</Text>

            </TouchableOpacity>

        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'pink'
    },
    button: {
        margin:10,
        // width:100,
        backgroundColor:'black',
        borderRadius:10,
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize:20,
        padding:10,
    },
    box:{
        backgroundColor:'blue',
        marginTop:110,
        marginBottom:40,
        width:105,
        height:105,

        
        borderRadius:20,
        borderTopColor:'cyan',
        borderWidth:6

      },
    buttonRow:{
        flexDirection:'row'
    }
    
    
})