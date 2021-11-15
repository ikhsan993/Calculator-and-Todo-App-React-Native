import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,TextInput} from 'react-native'

export default function CalcInput (props){
	const {valueA,valueB,setValueA,setValueB} = props;
	return (
		<View>
			<Text style={styles.text}> Value A </Text>
			<TextInput keyboardType="numeric" onChangeText={text => setValueA(text)} 
				value={valueA} placeholder="Input Number" style={styles.textInput}/>
			<Text style={styles.text}> Value B </Text>
			<TextInput keyboardType="numeric" onChangeText={text => setValueB(text)}
      			value={valueB} placeholder="Input Number" style={styles.textInput}/>
		</View>
	)
}

const styles = StyleSheet.create({
	textInput : {
		borderRadius : 5,
    	marginBottom : 20,
    	backgroundColor : '#fff',
    	paddingLeft : 20  ,
    	fontSize : 25,
    	height : 50,
		marginTop : 5
	},

    text :{
    	fontSize : 25,
    }
});