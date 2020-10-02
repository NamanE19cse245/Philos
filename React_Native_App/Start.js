import React, { Component } from 'react';
import {SafeAreaView, TouchableOpacity, Image,ImageBackground,Text, StyleSheet, TextStyle,View } from 'react-native';


class Start extends Component{
    render(){
        const {navigation}=this.props;
        return(

            <SafeAreaView style={ {flex:1, backgroundColor:'#FFFFFF'}}>
                <ImageBackground source={require('../images/Qbg.jpg')} style={{ height:50, justifyContent:'center',alignItems:'center'}} >
                <Text style={{fontSize:25, color:'#D1E8E2',textAlign: 'center', fontStyle: 'italic'}}>PHILOS</Text>
                </ImageBackground>
                <View style={{flexDirection:'column',position:'relative',marginTop:200,marginLeft:12,alignItems:'center', height:'100%'}}>
                <Image source={require('../images/main3.jpeg')} style={{height:100, width:100}} ></Image>
                <View style={{flex:0.5 , justifyContent:'center'}}>                 
                <TouchableOpacity onPress={()=> navigation.navigate("LoginScreen")} style={{alignItems:'center', backgroundColor:'#00203fff',padding:10, borderRadius:30}}  >
                        <Text style={{fontSize:20,fontWeight:'400' , color:'white'}}>LOG-IN</Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}  style={{alignItems:'center', backgroundColor:'#00203fff', borderRadius:30,padding:10 }} /*onPress={()=>{navigation.navigate("SignUp")}}*/ >
                        <Text style={{fontSize:20,fontWeight:'400', color:'white'}}>Sign-Up with Mobile Number</Text>
                </TouchableOpacity>
                </View>
                </View>
                
            </SafeAreaView>

        );
    }
    
}
// const appNavigator=createStackNavigator({
//     Home:{
//         screen: Start
//     },
//     SignUp:{
//         screen:SignUp
//     }
// }) 


export default Start;

// const styles=StyleSheet.create({
//     Heading: 
//     {
//         fontSize: 25,
//         backgroundColor: '#7395AE'
//     }
// })
