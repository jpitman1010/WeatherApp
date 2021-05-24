import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import { Text, View } from 'react-native';

const Header = (props) => {
  
  return (
    <Appbar.Header
    theme={{
        colors: {
            primary:"#00aaff",
            accent: "white"
        }
    }}
    style={{flexDirection:"row", justifyContent:'center'}}
    >
        <Title style={{color:'white'}}>
            {props.name}
        </Title>
     </Appbar.Header>
  );
}

export default Header;