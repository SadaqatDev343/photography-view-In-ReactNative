import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity ,Button} from 'react-native';
//import Ionicons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/';
const CustomHeader = () => {
  return (
    <View style={styles.container}>
         <View style={{paddingLeft:18}}>
        <Image source={require('../images/back.png')} style={styles.back} />
        </View>
        <View style={{paddingLeft:90}}>
        <Image source={require('../images/logo.jpg')} style={styles.logo} />
         </View>
         <View style={{paddingLeft:45}}>
        <Image source={require('../images/frvt.png')} style={styles.frv} />
        </View>
        <View style={{paddingBottom:5}}>
        <Image source={require('../images/share.png')} style={styles.share} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'black',
    width:365,


  },
 
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 30,
    marginLeft: 16,
  },
  share: {
    width: 35,
    height: 35,
   paddingLeft:10,
    backgroundColor:'black',
    paddingBottom:20,
    
  },
  frv: {
    width: 35,
    height: 35,
    backgroundColor:'black',
    paddingLeft:10
   
  },
  back: {
    width: 20,
    height: 20,
    backgroundColor:'black',
    alignItems:'center',
   
  },
});

export default CustomHeader;
