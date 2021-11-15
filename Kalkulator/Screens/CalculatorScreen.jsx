
import React, {useState} from 'react';
import {View, Text,StyleSheet} from 'react-native'
import CalcButton from '../Components/CalcButton'
import CalcDisplay from '../Components/CalcDisplay'
import CalcInput from '../Components/CalcInput'

export default function CalculatorScreen (){

	const [display, setDisplay] = useState(0);
	const [valueA, setValueA] = React.useState('');
	const [valueB, setValueB] = React.useState('');

	const intA = parseInt(valueA);
	const intB = parseInt(valueB);

	const clear = () =>{
		setValueA('')
		setValueB('')
		setDisplay(0)
	}

	return (
		<View style={styles.wrapper}>
			<CalcInput valueA={valueA} valueB={valueB} setValueA={setValueA} setValueB ={setValueB} />
			<Text style={styles.text}>Display</Text>
			<CalcDisplay display={display} />
			<View style={styles.container}>
				<CalcButton title="-"  onPress={() => setDisplay(intA-intB)} bgColor="#FF8C42" />
				<CalcButton title="+"  onPress={() => setDisplay(intA+intB)} bgColor="#FF8C42" />
				<CalcButton title="/"  onPress={() => setDisplay(intA/intB)} bgColor="#FF8C42" />
				<CalcButton title="*"  onPress={() => setDisplay(intA*intB)} bgColor="#FF8C42" />
				<CalcButton title="%"  onPress={() => setDisplay(intA%intB)} bgColor="#FF8C42" />
				<CalcButton title="C"  onPress={() => {clear()}} bgColor="#09bc8a" />
			</View>
		</View>
	)
}

	const styles = StyleSheet.create({
		container :{
			flexDirection:'row',
			flexWrap:'wrap', 
			justifyContent:'center',
			marginTop:10
		},
		wrapper : {
			backgroundColor : '#F4E87C', 
			minHeight:'100%', 
			padding:35, 
			paddingTop:30, 
		},
		text : {color:'#333', 
		fontWeight:'bold', 
		fontSize:35 
		}
	});