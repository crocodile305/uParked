import React ,{Component} from 'react';
import {Dimensions,TouchableOpacity ,StyleSheet,Image, TextInput,Text, View,Button} from 'react-native';


export class Menu extends Component{

    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.myinfo}>
                    <View style = {styles.imagecircle1}>
                        <View style = {styles.imagecircle2}>
                            <Image style = {styles.myphotoimg} source = {require('../assets/images/1.jpg')}/>
                        </View>
                    </View>
                    <View style = {styles.myinfodetail}>
                        <Text style = {styles.myname}>Renan</Text>
                        <Text style = {styles.mynamedetail}>São Paulo - SP</Text>
                    </View>
                </View>
                <Text>Menu</Text>
            </View>
        )
    };
};

const styles = {
    container:{
        backgroundColor:"#008CE2",
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        alignItems:"center",
    },
    myinfo:{
        // backgroundColor:"red",
        marginTop:Dimensions.get('window').height*0.1,
        width:Dimensions.get('window').width,
        flexDirection: 'row',
    },
    myphotoimg:{
        width:Dimensions.get('window').width*0.25*0.85,
        height:Dimensions.get('window').width*0.25*0.85,
        borderRadius:Dimensions.get('window').width*0.25*0.85*0.5,
        marginTop:Dimensions.get('window').width*0.25*0.05*0.5,
    },
    imagecircle1:{
        width:Dimensions.get('window').width*0.25,
        height:Dimensions.get('window').width*0.25,
        marginLeft:Dimensions.get('window').width*0.1,
        borderRadius:Dimensions.get('window').width*0.25*0.5,
        alignItems:"center",
        backgroundColor:"white",
    },
    imagecircle2:{
        width:Dimensions.get('window').width*0.25*0.9,
        height:Dimensions.get('window').width*0.25*0.9,
        borderRadius:Dimensions.get('window').width*0.25*0.9*0.5,
        backgroundColor:"#008CE2",
        alignItems:"center",
        marginTop:Dimensions.get('window').width*0.25*0.1*0.5,
    },
    myinfodetail:{
        marginLeft:Dimensions.get('window').width*0.1,
        marginTop:Dimensions.get('window').width*0.25*0.2,
    },
    myname:{
        fontSize:25,
        color:"white",
        fontWeight:'bold',
    },
    mynamedetail:{
        fontSize:15,
        color:"white",
        fontWeight:'bold',
    },
};
export default Menu;