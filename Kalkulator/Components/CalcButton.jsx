import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function CalcButton (props){
	const {bgColor,title,onPress} = props;

	return (
		<View style={styles.wrapper}>
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<Text style={[styles.text, {backgroundColor : bgColor}]}> {title} </Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper : {width:'33%'},
	container: { 
		justifyContent:'center',
		marginTop:15,  
		alignItems:'center'
	},
	text : {
		fontSize : 35, 
		fontWeight : 'bold', 
		color:'#172774', 
		padding:15, 
		borderRadius:5, },
});