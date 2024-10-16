import {View, Text, StyleSheet} from 'react-native';

function HomeScreen() {
    return (
        <View style={style.container}>
        <Text>HomeScreen</Text>
       
      </View>
    );
  }
  
  function SecondScreen() {
    return (
      <View style={style.container}>
        <Text>SecondScreen</Text>
      </View>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export { HomeScreen, SecondScreen}