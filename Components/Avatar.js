import AvatarIcon from './avatar.svg';
import { StyleSheet, Text, View } from 'react-native';



export default function Avatar(){
    return (
            <View style={{width:'60px', height:'60px', position:'relative'}}>
                <img src={AvatarIcon} style={{width:'60px', height:'60px', borderRadius:'30px'}} />
                <View style={{width:'20px', height:'20px', borderRadius:'10px', backgroundColor:'#F7444E', position:'absolute', bottom:'0px', right:'0px', borderWidth:'2px', borderColor:'white'}}></View>
            </View>
    );
}