import { StyleSheet, Text, View } from 'react-native';



const styles = StyleSheet.create({
  center:{
    alignItems:'center'
  }
});

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  )
}

const LotsOfGreeting = () => {
  return (
    <View style={[styles.center, {top:50}]}>
      <Greeting name ='Ariff'/>
      <Greeting name ='Syamsul'/>
      <Greeting name ='Mat Kilau'/>
    </View>
  );
}

export default LotsOfGreeting;