import Animated, { useSharedValue, useAnimatedStyle, withTiming,
    withRepeat,
    Easing,
    withSpring,
    useAnimatedGestureHandler,

  } from 'react-native-reanimated';
import {
    TapGestureHandler,
    PanGestureHandler,
  } from 'react-native-gesture-handler';
  
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React from 'react';


const EventsExample3 = () => {
        const pressed = useSharedValue(false);
        
        //Gesture Event 
        const startingPosition = 100;
        const x = useSharedValue(startingPosition);
        const y = useSharedValue(startingPosition);

        
        
        const eventHandler = useAnimatedGestureHandler({
          onStart: (event, ctx) => {
            pressed.value = true;
            ctx.startX = x.value;
            ctx.startY = y.value;
          },
          onActive: (event, ctx) => {
            x.value = ctx.startX + event.translationX;
            y.value = ctx.startY + event.translationY;
            console.log('event-OnActive ->',event);
            // console.log('x.value:->',x.value);
            // console.log('y.value->',y.value);
            console.log('event.translationX ->',event.translationX)
            // console.log('event.translationY ->',event.translationY)
          },


          onEnd: (event, ctx) => {
            console.log('event-OnEnd ->',event);

            pressed.value = false;
            // x.value = withSpring(startingPosition,{damping:50});
            // y.value = withSpring(startingPosition,{damping:50});
          },
        });

        
        
        const uas3 = useAnimatedStyle(() => {
            return {
              backgroundColor: pressed.value ? '#FEEF86' : '#001972',
              transform: [{ translateX: x.value },{ translateY: y.value } ], //
            };
          });  


        return(
            <View style={styles.container}>

                <PanGestureHandler onGestureEvent={eventHandler}>
                    <Animated.View style={[styles.ball, uas3]} />
                </PanGestureHandler>
            


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

export default  EventsExample3;