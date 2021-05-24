import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Search from './screens/Search';



const App = () => {
  return (
    <>
      <Search />
      <StatusBar barStyle="dark-content" style={{backgroundColor:"blue", marginTop:10}}/>
     <Text style={{marginTop:42, justifyContent:'center', alignItems:'center'}} >Hello World</Text>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
