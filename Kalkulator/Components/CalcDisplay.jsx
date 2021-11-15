import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function CalcDisplay (props){
	const {display} = props;
	return (
		<View style={styles.container}>
		<Text style={styles.text}>{display}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { 
		justifyContent:'center',
		width:60,
		backgroundColor:'#fff', 
		width:'100%', borderRadius:7, 
		marginTop:15, 
	},
	text : {
		fontSize : 35, 
		fontWeight : 'bold', 
		color:'#172774', 
		padding:10, 
		marginLeft:10 },
});