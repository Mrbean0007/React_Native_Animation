import React, { Component} from 'react';
import { AppRegistry,Modal,StyleSheet, Text,  View,  TextInput,TouchableOpacity,Image,Pressable} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
    Easing,
} from 'react-native-reanimated';
export default function SignUpScreen() {
        const offset = useSharedValue(-330);
        const animatedStyles = useAnimatedStyle(() => {
            // console.log(offset.value)
            offset.value = 0
            return {
              transform: [{ translateY: withTiming(offset.value,{duration:1000}) }],// Buttons:- 1,  2,  3, 5,
             
            };
        });
        const offsetbelow = useSharedValue(600);
          

        const animatedStylesBelow = useAnimatedStyle(() => {
            // console.log(offset.value)
            offsetbelow.value = 0
            return {
              transform: [{ translateY: withTiming(offsetbelow.value,{duration:1000}) }],// Buttons:- 1,  2,  3, 5,
             
            };
        });
        
              
        return (
            <View style={styles.container}>

                <Animated.View style={[animatedStyles]}>
                    <Image style={styles.image} source={require('../assets/sign-up.png')  } />

                </Animated.View>

                {/* <TouchableOpacity style={styles.button1}
                    onPress={() => {(offset.value = 100)}}> 
                    <Text style={styles.text} >Press Me</Text>
                    
                </TouchableOpacity> */}

                <Animated.View style={[styles.form,animatedStylesBelow]}>
                        <View style={styles.header}>
                            <Text style={{fontSize:20,color:'#FFF',}}>Sign-up</Text>
                        </View>

                        <View style={styles.inputForm}>
                            <TextInput style={styles.textInput}
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="Email Address"
                                placeholderTextColor='#D3CDDF'
                            />
                            <TextInput style={styles.textInput}
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="Mobile Number"
                                placeholderTextColor='#D3CDDF'
                                keyboardType="numeric"/>
                            
                            <TextInput style={styles.textInput} 
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="Password"
                                placeholderTextColor='#D3CDDF'
                                secureTextEntry={true}
                            />
                            <TextInput style={styles.textInput} 
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="Confirm Password"
                                placeholderTextColor='#D3CDDF'
                                secureTextEntry={true}
                            />
                            <Pressable style={styles.button}   >
                                <Text style={styles.buttonText}>Submit</Text>
                            </Pressable>

                            <Text style={styles.labelLoginP}>
                                Already have an account?  
                                <Text  style={styles.labelLoginC}>Login</Text>
                            </Text>
                        </View>
                </Animated.View>
                

            </View>
            
        )
}

const styles = StyleSheet.create({
    button1: {
        margin:20,
        width:150,
        backgroundColor:'black',
        borderRadius:10,
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize:20,
        padding:10,
    },
    container:{
        flex:1,
        backgroundColor:'#36213E', 
    },

    image:{
        resizeMode: 'center',
        height:500,
        width:410,
    },
    box:{
        backgroundColor:'blue',
        margin:50,
        width:105,
        height:105,
        justifyContent:'center',
        borderRadius:20
    },

    header:{
        flex:0.3,
        paddingTop:30,
        // backgroundColor:"white",
        // FCFC62   
      },

    form:{
        flex:2,
        backgroundColor:'#724583',
        // backgroundColor:'#36213E',
        // borderColor:'#BC9ACA',
        // borderWidth:3,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal:40,
        justifyContent:"center",
      },
    inputForm:{
        flex:2,
        justifyContent:"space-evenly"
      },
    textInput:{
        color:'#D3CDDF',
        borderBottomWidth:1,
        borderBottomColor:'#A678B8',
        fontSize:14,
        marginTop:10
      },
        
    button:{
        
        backgroundColor:'#E6E6E6',
        // borderColor:'#A678B8',
        borderRadius:10,
        // borderWidth:2,
        marginHorizontal:50,
        padding:3,
        marginTop:20
    },
    
    buttonText:{
        textAlign:"center",
        fontSize:20,
    },
    
    labelLoginP:{
        textAlign:"center",
        color:'#20203D',
        paddingTop:10,
    },
    
    labelLoginC:{
        color:'#DF79D8',
        fontWeight:"bold",
    
      },


})