import React, { Component } from 'react';
import {SafeAreaView, TouchableOpacity, Image,ImageBackground,Text, StyleSheet, TextStyle,View,TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputScrollView from 'react-native-input-scroll-view';

class SignUp extends Component{
    render(){
        const {navigation}=this.props;
        return(
            <SafeAreaView style={ {flex:1, backgroundColor:'#FFFFFF'}}>
                
                <View style={{flex:0.5}}>
                
                <ImageBackground source={require('../images/Qbg.jpg')} style={{ height:50, justifyContent:'center',alignItems:'center'}} >
                <Text style={{fontSize:30, fontStyle:'italic', alignItems:'center',/*backgroundColor:"#00203fff"*/ textAlign:'center', color:"#FFFFFF"}}>Sign-Up</Text>
                </ImageBackground>
                

                </View>
                <View style={{backgroundColor:'#FFFFFF',flex:6}}>
                
                <KeyboardAvoidingView style={SUStyles.sendControlContainerOuter} keyboardVerticalOffset={-120}{...(Platform.OS === "ios" ? { behavior: 'padding'}: {}) }>
                <InputScrollView style={{flex:1}} scrollEnabled={true} keyboardShouldPersistTaps={true} /*keyboardDismissMode='on-drag'*/ automaticallyAdjustContentInsets={true}>
                <View style={{justifyContent:'center', flex:1}}>
                <Text></Text>
                {/* <TextInput keyboardType='email-address' automaticallyAdjustContentInsets={true} multiline={true} style={require,{fontSize:20, position:'relative' ,color:'black'}}>ANS: </TextInput> */}
                <TextInput keyboardType='email-address' automaticallyAdjustContentInsets={true}  style={require,{position:'relative',fontSize:30,marginTop:20} } placeholder="First Name" placeholderTextColor='black' />
                
                <Text></Text>

                <TextInput keyboardType='email-address' automaticallyAdjustContentInsets={true} style={require,{position:'relative',fontSize:30,marginTop:35} } placeholder="Last Name" placeholderTextColor='black' />
                
                <Text></Text>

                <TextInput keyboardType='number-pad' automaticallyAdjustContentInsets={true} style={require,{position:'relative',fontSize:30,marginTop:50} } placeholder="Age" placeholderTextColor='black' />

                <Text></Text>

                <TextInput keyboardType='email-address' automaticallyAdjustContentInsets={true} style={require,{position:'relative',fontSize:30,marginTop:45} } placeholder="Emai-ID" placeholderTextColor='black' />

                <Text></Text>

                <TextInput secureTextEntry={true} keyboardType='default' automaticallyAdjustContentInsets={true} style={require,{position:'relative',fontSize:30,marginTop:45} } placeholder="Password" placeholderTextColor='black' />

                <Text></Text>

                <TextInput secureTextEntry={true} keyboardType='default' automaticallyAdjustContentInsets={true} style={require,{position:'relative',fontSize:30,marginTop:45} } placeholder="Re-Enter Password" placeholderTextColor='black' />

                <Text></Text>

                <TextInput keyboardType='number-pad' automaticallyAdjustContentInsets={true} style={require,{position:'relative',fontSize:30,marginTop:50} } placeholder="Mobile Number" placeholderTextColor='black' />

                <Text></Text>

                <TextInput keyboardType='email-address' automaticallyAdjustContentInsets={true} multiline={true} style={require,{position:'relative',fontSize:30,marginTop:50 } } placeholder="About Yourself" placeholderTextColor='black' />

                <TouchableOpacity onPress={()=> navigation.navigate("Q1")} style={{alignItems:'center',padding:10, borderRadius:30, marginTop:80, backgroundColor:'#00203fff', width:200,elevation:3,alignSelf:'center'}}>
                <Text onPress={()=> navigation.navigate("Q1")} style={{fontSize:30, fontWeight:'400', alignItems:'center',color:'white'}}>NEXT</Text>
                </TouchableOpacity>

                </View>
                </InputScrollView>
                </KeyboardAvoidingView>
                </View>
                
            </SafeAreaView>
        );
    }
}
export default SignUp;
const SUStyles = StyleSheet.create({
    col:{
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    sendControlContainerOuter: {
        flex: 1,
        justifyContent: 'flex-end'
        }
})