
import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

const Man4 = () => {

  // render(){
    return (
    <View style={{backgroundColor:'#fff', flex:1,justifyContent:'space-evenly'}}>
      <View style={styles.head}>
        <Swiper style={styles.wrapper} showsButtons>
          <View style={styles.slide1}>
            <Image source={require('./image/h1.jpeg')} style={styles.anh}/>
          </View>
          <View style={styles.slide2}>
          <Image source={require('./image/h2.jpeg')} style={styles.anh}/>
          </View>
          <View style={styles.slide3}>
          <Image source={require('./image/h1.jpeg')} style={styles.anh}/>
          </View>
          <View style={styles.slide3}>
          <Image source={require('./image/h2.jpeg')} style={styles.anh}/>
          </View>
        </Swiper>
      </View>

      <View style={styles.content1}>
        <Text style={{fontSize:25,color:"black"}}>Veggie tomato mix</Text>
        <Text style={{fontSize:22,color:"#FA4A0C"}}>N1,900</Text>
      </View>

      <View style={styles.content2}>
          <View style={{width:'70%'}}>
            <Text style={styles.title}>Delivery info</Text>
            <Text style={styles.text}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
          </View>
      </View>
      
        <View style={styles.content2}>
          <View style={{width:'70%'}}>
            <Text style={styles.title}>Return policy</Text>
            <Text style={styles.text}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
          </View>
        </View>
        
      

      <View>
        <TouchableOpacity  style={styles.button}>
          <View style={{ width:'70%',height:60, backgroundColor:'#FA4A0C',borderRadius:30, justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:17, color:'#fff'}}>Add to cart</Text>
          </View>
          
        </TouchableOpacity>
      </View>
    </View>
  );
}
// }

const styles = StyleSheet.create({

  head: {
    width: '100%',
    height: 200,
  
  },

  anh: {
    width: '100%',
    height:'90%'
  },
  content1: {
    width: '100%',
    alignItems: 'center',
  },
  content2: {
    flexDirection:"row",
    justifyContent:"center",
  },
  title: {
    fontSize: 20,
    marginBottom:10,
    color:'black'
  },
  text:{
    fontSize:15,
  },
  button: {
    // width:'70%',
    // height:50,
    flexDirection:'row',
    
    justifyContent:'center',
    
    
  }

});

export default Man4;