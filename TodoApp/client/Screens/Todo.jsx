import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,SafeAreaView,TouchableOpacity } from 'react-native';
import Input from '../Components/Input'
import { API } from "../config/api";

export default function Todo(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState('');
  const [todo, setTodo] = useState([]);
  // const [id,setId] = useState('');

  const getTodo = async () => {
    try {
      const response = await API.get("/todos");
      setTodo(response.data.todos)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleSubmit = async (idTodo) => {
    try {

      const config = {
        headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
            }
      };
      const data = {status : 1};
      const body = (JSON.stringify(data))
      const response = await API.patch('/todo/' + idTodo,body,config);

    }catch (error){
    alert(error)
  }
}

// const idTodo = id

// console.log(id)

    const Item = ({ title,id,status }) => (
     
  <View style={styles.item}>
    <Text style={status==0 ? styles.title : styles.titleDone}>{title}</Text>
    <TouchableOpacity style={styles.button} onPress={()=>{handleSubmit(id)}}><Text style={styles.buttonText}>Done</Text></TouchableOpacity>
  </View>
);
    const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} status={item.status} />
  );

  return (
    <View >
        <StatusBar style="auto" />
        <Input getTodo ={getTodo}value={value} setValue={setValue}/>
      <SafeAreaView >
        <FlatList
          data={todo}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item : {
    backgroundColor : '#eee',
    marginTop : 10,
    marginHorizontal : 20,
    flexDirection : 'row',
  },
  title :{
    fontSize : 30,
    paddingVertical : 5,
    paddingHorizontal : 10,
    width : '80%'
  },
    titleDone :{
    fontSize : 30,
    paddingVertical : 5,
    paddingHorizontal : 10,
    width : '80%',
    color : 'red'
  },
  button :{
  backgroundColor : 'aqua',
  borderRadius : 5,
  marginLeft : 10,
  marginTop : 2,
  justifyContent : 'center',
  padding : 10,
  width : '18%'
  },
  buttonText : {
  fontSize : 15
  }
});
