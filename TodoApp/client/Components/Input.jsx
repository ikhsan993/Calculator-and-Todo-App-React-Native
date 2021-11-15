import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,TextInput} from 'react-native'

import {API} from '../config/api'

export default function Input (props){
	const {value,setValue,getTodo} = props;

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();

			const config = {

				headers: {
          		'Content-Type': 'application/json;charset=UTF-8',
          		"Access-Control-Allow-Origin": "*",
      			}
			};
			const data = {title : value};
			const body = (JSON.stringify(data))
			const response = await API.post('/todo',body,config);
			alert('Add todo succcess')
			getTodo()
		}catch (error){
		alert(error)
	}

	}
	return (
		<View style={styles.container}>
			<TextInput onChangeText={text => setValue(text)} 
				value={value} placeholder="To do...." style={styles.textInput}/>
			<TouchableOpacity onPress= {handleSubmit} style={styles.button}> 
				<Text style={styles.text} > + </Text> 
			</TouchableOpacity>	
		</View>
	)
}

const styles = StyleSheet.create({
	textInput : {
		borderRadius : 5,
    	backgroundColor : '#fff',
    	paddingLeft : 20  ,
    	fontSize : 25,
    	height : 50,
		marginTop : 5,
		borderColor : 'teal',
		borderWidth : 1,
		marginLeft : 20,
		width : '75%',
		height : 50
	},

    button :{
    	backgroundColor : 'aqua',
    	borderRadius : 5,
    	height: 50, 
    	marginLeft : 10,
    	marginTop : 2
    },
    container :{
    	flexDirection : 'row',
    	alignItems : 'center',
    	justifyContent : 'flex-start',
    	marginBottom : 20,
    	marginTop : 20
    },
    text : {
    	fontSize : 30,
    	padding : 5
    }
});