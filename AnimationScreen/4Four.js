import Animated, { useSharedValue, useAnimatedStyle, withTiming,
    withRepeat,
    Easing,
    withSpring,
    useAnimatedGestureHandler,

  } from 'react-native-reanimated';
import {
    TapGestureHandler,
  } from 'react-native-gesture-handler';
  
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React from 'react';


const EventsExample = () => {
        const pressed = useSharedValue(false);
        const touch = useSharedValue(false);

        const eventHandler = useAnimatedGestureHandler({
            onStart: (event, ctx) => {
              pressed.value = true;
            },
            onEnd: (event, ctx) => {
              pressed.value = false;
            },
          });
          const uas = useAnimatedStyle(() => {
            return {
              backgroundColor: pressed.value ? '#00a6fb' : '#001972',
              transform: [{ scale: withTiming(pressed.value ? 1.2 : 1,{duration:300}) }],
            };
          });

        const eventHandler2 = useAnimatedGestureHandler({
            onStart: (event, ctx) => {
                touch.value = true;
            },
            onEnd: (event, ctx) => {
                touch.value = false;
            },
          });

          const uas2 = useAnimatedStyle(() => {
            return {
              backgroundColor: touch.value ? '#f87575' : '#9B5DE5',
              transform: [{ scale: withSpring(touch.value ? 2 : 1,{
                damping: 20,
                stiffness: 90,
              }) }],
            };
          });


        return(
            <View style={styles.container}>
                
                    <TapGestureHandler onGestureEvent={eventHandler} >
                        <Animated.View style={[styles.ball,uas]} />
                    </TapGestureHandler>
              
                    <TapGestureHandler onGestureEvent={eventHandler2}>
                        <Animated.View style={[styles.ball2,uas2]} />
                    </TapGestureHandler>
                

            </View>
        );

    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'pink',
        paddingTop:80
    },
    ball:{
        marginBottom:100,
        backgroundColor:'#001972',
        width:150,
        height:150,
        borderRadius:150/2,
        borderWidth:5,
        borderColor:'cyan'

    },
    ball2:{
        marginBottom:50,
        backgroundColor:'#9B5DE5',
        width:150,
        height:150,
        borderRadius:150/2,
        borderWidth:5,
        borderColor:'#EF476F'

    },
})

export default  EventsExample;