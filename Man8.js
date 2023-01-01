import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";


const CARD = 'CARD';
const BANK_ACCOUNT = 'BANK_ACCOUNT';
const Man8 = () => {
    const [mood, setMood] = useState(CARD);
    return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',marginLeft: 30, marginTop: 40}}>
          <Image
              source={require('./image/Vector.png')} 
        />
          <Text style={{marginLeft: 115, fontSize: 18, fontWeight: '600',color:'#000000'}}>Checkout</Text>
      </View>
        <Text style={{fontSize: 34, marginLeft: 30, color:'#000000', marginTop: 20,fontWeight:'600'}}>Delivery</Text>
        <View style={{flexDirection: 'row',marginLeft: 30,marginTop: 20}}>
            <Text style={{fontSize: 14,color:'#000000',fontWeight:'600'}}>Address details</Text>
            <Text style={{fontSize: 12,color:'#F47B0A', marginLeft: 130}}>change</Text>
        </View>
    <View style={{height:100, width: 300, backgroundColor: '#FFFFFF',marginLeft: 25,borderRadius: 30,marginTop: 20}}>
        <Text style={{fontSize: 14, color:'#000000',fontWeight:'400',marginLeft: 20}}>Marvis Kparobo</Text>
        <Image 
            source={require('./image/Line3.png')}
            style={{marginLeft: 20}}/>
        <Text style={{fontSize: 12,marginLeft: 20}}>Km 5 refinery road oppsite re</Text>
        <Text style={{fontSize: 12 ,marginLeft: 20}}>public road, effurun, delta state</Text>
        <Image 
            source={require('./image/Line3.png')}
            style={{marginLeft: 20}}/>
        <Text style={{fontSize: 12 ,marginLeft: 20}}>+234 9011039271</Text>
    </View>
      <Text style={{fontSize: 14,color:'#000000',fontWeight:'600',marginLeft: 30,marginTop: 20}}>Delivery method.</Text>
      <View style={{height:100, width: 300, backgroundColor: '#FFFFFF',marginLeft: 25,borderRadius: 30,marginTop: 20}}>
      <View style={{marginTop: 20, marginLeft: 40, flexDirection:'row'}}>
              <TouchableOpacity style={styles.outter}
              onPress={() => {setMood(CARD)}}>
                  {mood === CARD? <View style={styles.inner}></View> : null}
              </TouchableOpacity>
              <Text style={{marginLeft: 20, fontSize: 14,fontWeight:'400', color:'#000000'}}>Door delivery</Text>
        </View>
        <Image 
            source={require('./image/Line3.png')}
            style={{marginLeft: 40}}/>
        <View style={{marginTop: 20, marginLeft: 40, flexDirection: 'row'}}>
              <TouchableOpacity style={styles.outter}
              onPress={() => {setMood(BANK_ACCOUNT)}}>
                  {mood ===BANK_ACCOUNT? <View style={styles.inner}></View>: null}
              </TouchableOpacity>
              <Text style={{marginLeft: 20, fontSize: 14,fontWeight:'400', color:'#000000'}}>Pick up</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginLeft: 30}}>Total</Text>
        <Text style={{fontSize: 17, fontWeight: '400',color: '#000000', marginLeft: 220}}>23000</Text>
      </View>
      <View>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: '#FA4A0C', width: '70%', height: 50, marginLeft: 55, marginTop: 20, borderRadius: 20}}>
              <Text style={{color: '#F6F6F9',fontSize:17, fontWeight:'600'}}>Proceed to payment</Text>
          </TouchableOpacity>
      </View>









    </View>
    );
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    outter: {
        width: 12,
        height: 12,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center',
        borderColor: '#FA4A0C',
    },
    inner: {
        width: 8,
        height: 8,
        backgroundColor: '#FA4A0C',
        borderRadius: 20,
    },
    outter1: {
      width: 30,
      height: 30,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#EB4796',
      borderColor: '#EB4796',
      marginLeft: 25,
      marginTop: -10
    },
    outter2:{
      width: 30,
      height: 30,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#F47B0A',
      borderColor: '#F47B0A',
      marginLeft: 25,
      marginTop: -15
    }
  });
  
  export default Man8;