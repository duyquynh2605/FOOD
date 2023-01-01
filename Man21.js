import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Man21 = () => (
  <View style={styles.container}>
    <View style={{marginLeft: 30, marginTop: 40}}>
        <Image
            source={require('./image/Vector.png')} 
      />
        <Text style={{marginTop: 20, fontSize: 18, fontWeight: '600',color:'#000000'}}>My offers</Text>
    </View>
    <View style={{justifyContent:'center', alignItems:'center', marginTop: 100}}>
        <Text style={{marginTop: 70,fontSize: 28, fontWeight: '600',color:'#000000'}}>ohh snap!  No offers yet</Text>
        <Text style={{marginLeft: 80, marginRight: 80}}>Bella dose’t have any offers</Text>
        <Text>yet please check again.</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Man21;