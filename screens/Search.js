import React, {useState} from 'react';
import { Appbar, Title, Button, Card } from 'react-native-paper';
import { Text, TextInput, View, FlatList } from 'react-native';
import Header from './Header';

const Search = () => {
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([])
  const fetchCities = (text)=>{
    setCity(text)
    fetch('https://autocomplete.wuderground.com/aq?query=' + text)
    .then(item=>item.json())
    .then(cityData=>{
        setCities(cityData)
        console.log(cityData.RESULTS.slice(0,9))
    })
  }
  return (
    <View style={{flex:1}}> 
        <Header name="Search Screen" />
        <TextInput 
        label='City Name'
        style={{padding:5, margin:5,borderRadius:1, borderWidth:2, borderColor:"#00aaff"}}
        theme={{colors:{primary:"#00aaff"}}}
        value={city}
        onChangeText={(text)=>fetchCities(text)}
        />
        <Button 
        icon="content-save" 
        mode="contained" 
        theme={{colors:{primary:"#00aaff"}}}
        style={{margin:21,}}
        onPress={() => console.log('pressed')}>
           <Text style={{color:"white"}}> Search</Text>
        </Button>
        <FlatList
            data={cities}
            renderItem={(item)=>{
                return(
                    <Card
                        style={{margin:2, padding:12}}
                    >
                        <Text>{item.name}</Text>
                    </Card>

                )
            }}
            keyExtractor={item=>item.name}
        />
    </View>
  );
};

export default Search;