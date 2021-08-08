import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Base({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.row1}>

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('First')}> 
                    <Text style={styles.text} >First</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Second')}>
                    <Text style={styles.text}>Second</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Third')}>
                    <Text style={styles.text}>Third</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row1}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Four')}>
                    <Text style={styles.text}>Four</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Five')}>
                    <Text style={styles.text}>Five</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Test')}>
                    <Text style={styles.text}>Test</Text>
                </TouchableOpacity>
            </View>

        </View>)
}

const styles = StyleSheet.create({
    button: {
        margin:20,
        width:100,
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
        marginTop:100
    
    },
    box:{
        backgroundColor:'blue',
        margin:60,
        width:105,
        height:105,
        justifyContent:'center',
        borderRadius:20
      },
    row1:{
        flexDirection:'row'
    }
    
})