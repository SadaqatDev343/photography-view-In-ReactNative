import React, {useState} from 'react';
import { View, Text,Image ,StyleSheet,FlatList,Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CustomHeader from '../components/header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselItems = [
    {
      ImageUrl:require('../images/pic1.jpg'),
      text: "All that glitters is not gold",
      number:"1/5"
        
        
    },
    {
      ImageUrl:require('../images/pic2.jpg'),
      text: "To thine own self, be true",
      number:"2/5"
        
    },
    {
      ImageUrl:require('../images/pic3.jpg'),
      text: "Go ahead, make my day",
      number:"3/5"
    },
    {
      ImageUrl:require('../images/pic4.jpg'),
      text: "If you build it, they will com",
      number:"3/5"
    },
    { 
      ImageUrl:require('../images/pic5.jpg'),
      text: "Knowledge is power",
      number:"1/5" 
    },
  ]
  const renderItem = ({ item ,index}) => {
    return (
     
      <View style={styles.main} >
        <View style={{
        backgroundColor: 'black',
        borderRadius: 10,
        height: 20,
        paddingTop:80,
        height:100,
        backgroundColor:'black',
       
      }}>
       
      <Image source = {item.ImageUrl}style={{height:400, backgroundColor:'black'}}  />
    
      </View>
      <View style={{ alignItems: 'center',color:'white',paddingTop:350 ,paddingRight:50}}>
      <Text style={{fontSize: 20,color:'white',alignItems:'center' ,paddingTop:40,paddingLeft:30}}>{item.text}</Text>
      <Text style={{fontSize: 20,color:'white',alignItems:'center' ,paddingTop:60,paddingLeft:50}}>{index+1+" of "+carouselItems.length}</Text>
     </View>
     </View>
    )}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'black' }}>
      
       
      <CustomHeader/>
      <Carousel
        layout={"default"}
        // ref={ref => this.carousel = ref}
        data={carouselItems}
        sliderWidth={380}
        itemWidth={380}
        renderItem={renderItem}
        onSnapToItem={index => setActiveIndex( index )} />
        
   
    </View>

  );
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:'black',
    with:windowWidth,
    height:windowHeight
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
    padding: 16,
  },
});



export default HomeScreen;