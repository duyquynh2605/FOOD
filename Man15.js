import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Man15 = () => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row',marginLeft: 30, marginTop: 40}}>
        <Image
            source={require('./image/Vector.png')} 
      />
        <Text style={{marginLeft: 115, fontSize: 18, fontWeight: '600',color:'#000000'}}>History</Text>
    </View>
    <View style={{justifyContent:'center', alignItems:'center', marginTop: 100}}>
        <Image 
            source={require('./image/Vector1.png')}/>
        <Text style={{marginTop: 15,fontSize: 28, fontWeight: '600',color:'#000000'}}>No history yet</Text>
        <Text style={{marginLeft: 80, marginRight: 80}}>Hit the orange button down below to Create an order</Text>
    </View>
    <View>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: '#FA4A0C', width: '70%', height: 50, marginLeft: 55, marginTop: 120, borderRadius: 20}}>
            <Text style={{color: '#F6F6F9',fontSize:17, fontWeight:'600'}}>Start odering</Text>
        </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Man15;